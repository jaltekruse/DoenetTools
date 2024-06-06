import express, {
  Express,
  NextFunction,
  Request,
  Response,
  response,
} from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { DateTime } from "luxon";
import {
  copyPublicActivityToPortfolio,
  createActivity,
  deleteActivity,
  findOrCreateUser,
  getAllDoenetmlVersions,
  getActivityEditorData,
  getActivityViewerData,
  getAllRecentPublicActivities,
  getIsAdmin,
  getUserInfo,
  listUserActivities,
  updateDoc,
  searchPublicActivities,
  updateActivity,
  getDoc,
  assignActivity,
  listUserAssignments,
  deleteAssignment,
  getAssignmentEditorData,
  updateAssignment,
  getAssignmentDataFromCode,
  openAssignmentWithCode,
  closeAssignmentWithCode,
  updateUser,
  saveScoreAndState,
  getAssignmentScoreData,
  loadState,
  getAssignmentStudentData,
  recordSubmittedEvent,
  getAnswersThatHaveSubmittedResponses,
  getDocumentSubmittedResponses,
  getAssignment,
  getAssignmentContent,
  getDocumentSubmittedResponseHistory,
} from "./model";
import path from "path";
import { Provider as lti } from "ltijs";
import Database from "ltijs-sequelize";
import pg from "pg";
import { Prisma } from "@prisma/client";

dotenv.config();

const db = new Database(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    dialect: "postgres",
    dialectModule: pg,
    dialectOptions: {
      ssl: true,
    },
    host: process.env.DATABASE_HOST,
    ssl: {
      require: true,
      native: true,
      rejectUnauthorized: false,
    },
  },
);

// Setup provider
lti.setup(
  // TODO - MUST CHANGE THIS, SHOULD NOT BE THE KEY FOR AN LTI PLATFORM
  // process.env.LTI_KEY as string, // Key used to sign cookies and tokens
  "LTIKEY",
  {
    plugin: db,
  },
  {
    // Options
    appRoute: "/",
    loginRoute: "/login",
    cookies: {
      secure: false, // Set secure to true if the testing platform is in a different domain and https is being used
      sameSite: "", // Set sameSite to 'None' if the testing platform is in a different domain and https is being used
    },
    devMode: true, //Set DevMode to false if running in a production environment with https
    dynRegRoute: "/register", // Setting up dynamic registration route. Defaults to '/register'
    dynReg: {
      url: "http://tool.example.com", // Tool Provider URL. Required field.
      name: "Tool Provider", // Tool Provider name. Required field.
      logo: "http://tool.example.com/assets/logo.svg", // Tool Provider logo URL.
      description: "Tool Description", // Tool Provider description.
      redirectUris: ["http://127.0.0.1/lti13/launch"], // Additional redirection URLs. The main URL is added by default.
      customParameters: { key: "value" }, // Custom parameters.
      autoActivate: false, // Whether or not dynamically registered Platforms should be automatically activated. Defaults to false.
    },
  } as any,
);

const setup = async () => {
  await lti.deploy({ serverless: true } as any);
  app.use("/lti13", lti.app);

  // insert into lti13_issuers (id,  created_at, updated_at, host, client_id, auth_login_url, auth_token_url, key_set_url, private_key,  kid) values
  //( 1, NULL, NULL, 'https://canvas.instructure.com', '112200000000000222', 'https://canvas.instructure.com/api/lti/authorize_redirect',
  // 'https://canvas.instructure.com/login/oauth2/   token', 'https://canvas.instructure.com/api/lti/security/jwks', 'X509 SNIP SNIP SNIP', 'sig-1615993850')

  // Register platform
  await lti.registerPlatform(
    {
      url: "https://canvas.instructure.com",
      name: "Platform Name",
      clientId: "112200000000000234",
      authenticationEndpoint:
        "https://canvas.instructure.com/api/lti/authorize_redirect",
      accesstokenEndpoint: "https://canvas.instructure.com/login/oauth2/token",
      authConfig: {
        method: "JWK_SET",
        key: "https://canvas.instructure.com/api/lti/security/jwks",
      },
    },
    /* @ts-ignore */
    null,
    /* @ts-ignore */
    // process.env.LTI_KEY as string,
    "LTIKEY",
  );

  // let result = await prisma.$queryRaw<
  //   {
  //     docId: number;
  //     docVersionId: number;
  //     answerId: string;
  //     answerNumber: number | null;
  //     count: number;
  //   }[]
  // >(Prisma.sql`
  //  sql goes here
  //   `);

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

// Set lti launch callback
lti.onConnect((token, req, res) => {
  //console.log(token);
  console.log("JASON onConnect");
  return res.send(
    "This does not appear to be called, but it is redirecting... It's alive!",
  );
});

const app: Express = express();
// app.use(cookieParser(process.env.LTI_KEY as string));
app.use(cookieParser("LTIKEY"));
// app.use(cookieParser("LTIKEY"));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  }),
);

const port = process.env.PORT || 3000;

app.use(express.static("public"));

lti.app.get("/launch", async (req: Request, res: Response) => {
  //console.log(req);
  console.log(req.query);
  // TODO - see if I can fix types for ltijs
  const idtoken = res.locals.token as any;
  console.log(idtoken);
  if (!idtoken) {
    return res.status(500).send({
      err:
        "LTI launch did not complete successfully, " +
        "make sure to get to Doenet by clicking a link from your LMS",
    });
  }
  console.log("before the try");
  try {
    const idtoken = res.locals.token; // IdToken
    const score = req.body.grade; // User numeric score sent in the body
    // Creating Grade object
    const gradeObj = {
      /* @ts-ignore*/
      //userId: idtoken.user,
      scoreGiven: score,
      scoreMaximum: 100,
      activityProgress: "Completed",
      gradingProgress: "FullyGraded",
    };

    // Selecting linetItem ID

    /* @ts-ignore*/
    let lineItemId = idtoken.platformContext.endpoint.lineitem; // Attempting to retrieve it from idtoken
    // if (!lineItemId) {
    //   const response = await lti.Grade.getLineItems(idtoken, {
    //     resourceLinkId: true,
    //   });
    //   const lineItems = response.lineItems;
    //   if (lineItems.length === 0) {
    //     // Creating line item if there is none
    //     console.log("Creating new line item");
    //     const newLineItem = {
    //       scoreMaximum: 100,
    //       label: "Grade",
    //       tag: "grade",
    //       resourceLinkId: idtoken.platformContext.resource.id,
    //     };
    //     const lineItem = await lti.Grade.createLineItem(idtoken, newLineItem);
    //     lineItemId = lineItem.id;
    //   } else lineItemId = lineItems[0].id;
    // }

    console.log("About to send grade");
    // Sending Grade
    /* @ts-ignore*/
    const responseGrade = await lti.Grade.submitScore(
      /* @ts-ignore*/
      idtoken,
      lineItemId,
      {
        /* @ts-ignore*/
        userId: idtoken.user,
        scoreGiven: 7,
        activityProgress: "Completed",
        gradingProgress: "FullyGraded",
      },
      // lineItemId,
      // /* @ts-ignore*/
      // gradeObj,
    );
    return res.send(responseGrade);
  } catch (err) {
    console.log("caught an error", err);
    /* @ts-ignore*/
    console.log("caught an error", err.response);
    /* @ts-ignore*/
    return res.status(500).send({ err: err.message });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/api/getQuickCheckSignedIn", (req: Request, res: Response) => {
  const signedIn = req.cookies.email ? true : false;
  res.send({ signedIn: signedIn });
});

app.get(
  "/api/getUser",
  async (req: Request, res: Response, next: NextFunction) => {
    const signedIn = req.cookies.email ? true : false;
    if (signedIn) {
      try {
        let userInfo = await getUserInfo(req.cookies.email);
        res.send(userInfo);
      } catch (e) {
        next(e);
      }
    } else {
      res.send({});
    }
  },
);

app.post("/api/updateUser", async (req: Request, res: Response) => {
  const signedIn = req.cookies.email ? true : false;
  if (signedIn) {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const name = body.name;
    await updateUser({ userId: loggedInUserId, name });
    res.cookie("name", name);
    res.send({ name });
  } else {
    res.send({});
  }
});

app.get("/api/checkForCommunityAdmin", async (req: Request, res: Response) => {
  const loggedInUserId = Number(req.cookies.userId);
  const isAdmin = await getIsAdmin(loggedInUserId);
  res.send({
    isAdmin,
  });
});

app.get(
  "/api/getAllRecentPublicActivities",
  async (req: Request, res: Response) => {
    const docs = await getAllRecentPublicActivities();
    res.send(docs);
  },
);

app.get(
  "/api/getPortfolio/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const userId = Number(req.params.userId);
    try {
      const activityLists = await listUserActivities(userId, loggedInUserId);
      const allDoenetmlVersions = await getAllDoenetmlVersions();
      res.send({ allDoenetmlVersions, ...activityLists });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(404);
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/getPublicPortfolio/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = Number(req.params.userId);
    try {
      const activityLists = await listUserActivities(userId, 0);
      res.send(activityLists);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(404);
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/getAssignments",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    try {
      const assignmentList = await listUserAssignments(loggedInUserId);
      res.send(assignmentList);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(404);
      } else {
        next(e);
      }
    }
  },
);

app.get("/api/sendSignInEmail", async (req: Request, res: Response) => {
  const email: string = req.query.emailaddress as string;
  // TODO: add the ability to give a name after logging in or creating an account
  const user = await findOrCreateUser(email, email);
  res.cookie("email", email);
  res.cookie("userId", String(user.userId));
  res.cookie("name", String(user.name));
  res.send({});
});

app.post(
  "/api/deleteActivity",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const activityId = Number(body.activityId);
    try {
      await deleteActivity(activityId, loggedInUserId);
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/deleteAssignment",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    try {
      await deleteAssignment(assignmentId, loggedInUserId);
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post("/api/createActivity", async (req: Request, res: Response) => {
  const loggedInUserId = Number(req.cookies.userId);
  const { activityId, docId } = await createActivity(loggedInUserId);
  res.send({ activityId, docId });
});

app.post(
  "/api/updateActivityName",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const activityId = Number(body.activityId);
    const name = body.name;
    try {
      await updateActivity({ activityId, name, ownerId: loggedInUserId });
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/updateIsPublicActivity",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const activityId = Number(body.activityId);
    const isPublic = body.isPublic;
    try {
      await updateActivity({ activityId, isPublic, ownerId: loggedInUserId });
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/loadSupportingFileInfo/:activityId",
  (req: Request, res: Response) => {
    const activityId = Number(req.params.activityId as string);
    res.send({
      success: true,
      supportingFiles: [],
      canUpload: true,
      userQuotaBytesAvailable: 1000000,
      quotaBytes: 9000000,
    });
  },
);

app.get("/api/checkCredentials", (req: Request, res: Response) => {
  const loggedIn = req.cookies.email ? true : false;
  res.send({ loggedIn });
});

app.get(
  "/api/getCoursePermissionsAndSettings",
  (req: Request, res: Response) => {
    res.send({});
  },
);

app.get("/api/searchPublicActivities", async (req: Request, res: Response) => {
  const query = req.query.q as string;
  res.send({
    users: [], // TODO - this
    activities: await searchPublicActivities(query),
  });
});

app.get("/api/loadPromotedContent", (req: Request, res: Response) => {
  res.send({
    success: true,
    carouselData: {},
  });
});

app.get(
  "/api/getActivityEditorData/:activityId",
  async (req: Request, res: Response, next: NextFunction) => {
    const activityId = Number(req.params.activityId);
    const loggedInUserId = Number(req.cookies.userId);
    try {
      const editorData = await getActivityEditorData(
        activityId,
        loggedInUserId,
      );
      res.send(editorData);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(404);
      } else {
        next(e);
      }
    }
  },
);

app.get("/api/getAllDoenetmlVersions", async (req: Request, res: Response) => {
  const allDoenetmlVersions = await getAllDoenetmlVersions();
  res.send(allDoenetmlVersions);
});

app.get(
  "/api/getActivityView/:activityId",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const activityId = Number(req.params.activityId);

    try {
      const viewerData = await getActivityViewerData(
        activityId,
        loggedInUserId,
      );
      res.send(viewerData);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(404);
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/getAssignmentEditorData/:assignmentId",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const assignmentId = Number(req.params.assignmentId);
    try {
      const editorData = await getAssignmentEditorData(
        assignmentId,
        loggedInUserId,
      );
      res.send(editorData);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(404);
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/getAssignmentDataFromCode/:code",
  async (req: Request, res: Response) => {
    const code = req.params.code;
    const signedIn = req.cookies.email ? true : false;

    let assignmentData = await getAssignmentDataFromCode(code, signedIn);

    let name: string;
    if (assignmentData.newAnonymousUser) {
      const anonymousUser = assignmentData.newAnonymousUser;
      // create a user with random name and email
      res.cookie("email", anonymousUser.email);
      res.cookie("userId", String(anonymousUser.userId));
      res.cookie("name", String(anonymousUser.name));
      name = anonymousUser.name;
    } else {
      name = req.cookies.name;
    }

    res.send({ name, ...assignmentData });
  },
);

app.get("/api/loadPromotedContentGroups", (req: Request, res: Response) => {
  res.send({});
});

app.post(
  "/api/saveDoenetML",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const doenetML = body.doenetML;
    const docId = Number(body.docId);
    try {
      await updateDoc({ docId, content: doenetML, ownerId: loggedInUserId });
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/updateActivitySettings",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const activityId = Number(body.activityId);
    const imagePath = body.imagePath;
    const name = body.name;
    // TODO - deal with learning outcomes
    const learningOutcomes = body.learningOutcomes;
    const isPublic = body.isPublic;
    try {
      await updateActivity({
        activityId,
        imagePath,
        name,
        isPublic,
        ownerId: loggedInUserId,
      });
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/updateDocumentSettings",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const docId = Number(body.docId);
    const name = body.name;
    // TODO - deal with learning outcomes
    const learningOutcomes = body.learningOutcomes;
    const doenetmlVersionId = Number(body.doenetmlVersionId);
    try {
      await updateDoc({
        docId,
        name,
        doenetmlVersionId,
        ownerId: loggedInUserId,
      });
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post("/api/duplicateActivity", async (req: Request, res: Response) => {
  const targetActivityId = Number(req.body.activityId);
  const loggedInUserId = Number(req.cookies.userId);

  let newActivityId = await copyPublicActivityToPortfolio(
    targetActivityId,
    loggedInUserId,
  );

  res.send({ newActivityId });
});

app.post("/api/assignActivity", async (req: Request, res: Response) => {
  const activityId = Number(req.body.activityId);
  const loggedInUserId = Number(req.cookies.userId);

  let assignmentId = await assignActivity(activityId, loggedInUserId);

  res.send({ assignmentId, userId: loggedInUserId });
});

app.post(
  "/api/updateAssignmentName",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const name = body.name;
    try {
      await updateAssignment({ assignmentId, name, ownerId: loggedInUserId });
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/updateAssignmentSettings",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const imagePath = body.imagePath;
    const name = body.name;
    try {
      await updateAssignment({
        assignmentId,
        imagePath,
        name,
        ownerId: loggedInUserId,
      });
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/openAssignmentWithCode",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const closeAt = DateTime.fromISO(body.closeAt);

    try {
      const { classCode, codeValidUntil } = await openAssignmentWithCode(
        assignmentId,
        closeAt,
        loggedInUserId,
      );
      res.send({ classCode, codeValidUntil });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/closeAssignmentWithCode",
  async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUserId = Number(req.cookies.userId);
    const body = req.body;
    const assignmentId = Number(body.assignmentId);

    try {
      await closeAssignmentWithCode(assignmentId, loggedInUserId);
      res.send({});
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(403);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/saveScoreAndState",
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const docId = Number(body.docId);
    const docVersionId = Number(body.docVersionId);
    const loggedInUserId = Number(req.cookies.userId);
    const score = Number(body.score);
    const state = body.state;

    try {
      await saveScoreAndState({
        assignmentId,
        docId,
        docVersionId,
        userId: loggedInUserId,
        score,
        state,
      });
      res.send({});
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientValidationError ||
        e instanceof Prisma.PrismaClientKnownRequestError
      ) {
        res.status(400).send({});
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/loadState",
  async (req: Request, res: Response, next: NextFunction) => {
    const assignmentId = Number(req.query.assignmentId);
    const docId = Number(req.query.docId);
    const docVersionId = Number(req.query.docVersionId);
    const requestedUserId = Number(req.query.userId || req.cookies.userId);
    const loggedInUserId = Number(req.cookies.userId);
    const withMaxScore = req.query.withMaxScore === "1";

    try {
      const state = await loadState({
        assignmentId,
        docId,
        docVersionId,
        requestedUserId,
        userId: loggedInUserId,
        withMaxScore,
      });
      res.send({ state });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(204).send({});
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/getAssignmentData/:assignmentId",
  async (req: Request, res: Response, next: NextFunction) => {
    const assignmentId = Number(req.params.assignmentId);
    const loggedInUserId = Number(req.cookies.userId);

    try {
      const assignmentData = await getAssignmentScoreData({
        assignmentId,
        ownerId: loggedInUserId,
      });
      const answerList = await getAnswersThatHaveSubmittedResponses({
        assignmentId,
        ownerId: loggedInUserId,
      });
      const assignmentContent = await getAssignmentContent({
        assignmentId,
        ownerId: loggedInUserId,
      });
      res.send({ assignmentData, answerList, assignmentContent });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(404);
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/getAssignmentStudentData/:assignmentId/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const assignmentId = Number(req.params.assignmentId);
    const userId = Number(req.params.userId);
    const loggedInUserId = Number(req.cookies.userId);

    try {
      const assignmentData = await getAssignmentStudentData({
        assignmentId,
        ownerId: loggedInUserId,
        userId,
      });
      res.send(assignmentData);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(404);
      } else {
        next(e);
      }
    }
  },
);

app.post(
  "/api/recordSubmittedEvent",
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const docId = Number(body.docId);
    const docVersionId = Number(body.docVersionId);
    const answerId = body.answerId as string;
    const loggedInUserId = Number(req.cookies.userId);
    const response = body.result.response as string;
    const itemNumber = Number(body.result.itemNumber);
    const creditAchieved = Number(body.result.creditAchieved);
    const itemCreditAchieved = Number(body.result.itemCreditAchieved);
    const documentCreditAchieved = Number(body.result.documentCreditAchieved);
    const answerNumber = body.answerNumber
      ? Number(body.answerNumber)
      : undefined;

    try {
      await recordSubmittedEvent({
        assignmentId,
        docId,
        docVersionId,
        userId: loggedInUserId,
        answerId,
        answerNumber,
        response,
        itemNumber,
        creditAchieved,
        itemCreditAchieved,
        documentCreditAchieved,
      });
      res.send({});
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientValidationError ||
        e instanceof Prisma.PrismaClientKnownRequestError
      ) {
        res.status(400).send({});
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/getSubmittedResponses/:assignmentId/:docId/:docVersionId",
  async (req: Request, res: Response, next: NextFunction) => {
    const assignmentId = Number(req.params.assignmentId);
    const docId = Number(req.params.docId);
    const docVersionId = Number(req.params.docVersionId);
    const answerId = req.query.answerId as string;
    const loggedInUserId = Number(req.cookies.userId);

    try {
      const assignment = await getAssignment(assignmentId, loggedInUserId);
      const submittedResponses = await getDocumentSubmittedResponses({
        assignmentId,
        docId,
        docVersionId,
        answerId,
        ownerId: loggedInUserId,
      });
      res.send({ assignment, submittedResponses });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(204);
      } else {
        next(e);
      }
    }
  },
);

app.get(
  "/api/getSubmittedResponseHistory/:assignmentId/:docId/:docVersionId/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const assignmentId = Number(req.params.assignmentId);
    const docId = Number(req.params.docId);
    const docVersionId = Number(req.params.docVersionId);
    const userId = Number(req.params.userId);
    const answerId = req.query.answerId as string;
    const loggedInUserId = Number(req.cookies.userId);

    try {
      const assignment = await getAssignment(assignmentId, loggedInUserId);
      const submittedResponses = await getDocumentSubmittedResponseHistory({
        assignmentId,
        docId,
        docVersionId,
        answerId,
        userId,
        ownerId: loggedInUserId,
      });
      res.send({ assignment, submittedResponses });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        res.sendStatus(204);
      } else {
        next(e);
      }
    }
  },
);

setup();

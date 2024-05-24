"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const luxon_1 = require("luxon");
const model_1 = require("./model");
const client_1 = require("@prisma/client");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/api/getQuickCheckSignedIn", (req, res) => {
    const signedIn = req.cookies.email ? true : false;
    res.send({ signedIn: signedIn });
});
app.get("/api/getUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const signedIn = req.cookies.email ? true : false;
    if (signedIn) {
        let userInfo = yield (0, model_1.getUserInfo)(req.cookies.email);
        res.send(userInfo);
    }
    else {
        res.send({});
    }
}));
app.post("/api/updateUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const signedIn = req.cookies.email ? true : false;
    if (signedIn) {
        const body = req.body;
        const name = body.name;
        yield (0, model_1.updateUser)({ userId: Number(req.cookies.userId), name });
        res.cookie("name", name);
        res.send({ name });
    }
    else {
        res.send({});
    }
}));
app.get("/api/checkForCommunityAdmin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.cookies.email;
    const isAdmin = yield (0, model_1.getIsAdmin)(userEmail);
    res.send({
        isAdmin,
    });
}));
app.get("/api/getAllRecentPublicActivities", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docs = yield (0, model_1.getAllRecentPublicActivities)();
    res.send(docs);
}));
app.get("/api/getPortfolio/:userId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedInUserId = Number(req.cookies.userId);
    const userId = Number(req.params.userId);
    try {
        const activityLists = yield (0, model_1.listUserActivities)(userId, loggedInUserId);
        const allDoenetmlVersions = yield (0, model_1.getAllDoenetmlVersions)();
        res.send(Object.assign({ allDoenetmlVersions }, activityLists));
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            res.sendStatus(404);
        }
        else {
            next(e);
        }
    }
}));
app.get("/api/getPublicPortfolio/:userId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.userId);
    try {
        const activityLists = yield (0, model_1.listUserActivities)(userId, 0);
        res.send(activityLists);
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            res.sendStatus(404);
        }
        else {
            next(e);
        }
    }
}));
app.get("/api/getAssignments/:userId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedInUserId = Number(req.cookies.userId);
    const userId = Number(req.params.userId);
    try {
        const assignmentList = yield (0, model_1.listUserAssignments)(userId, loggedInUserId);
        res.send(assignmentList);
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            res.sendStatus(404);
        }
        else {
            next(e);
        }
    }
}));
app.get("/api/sendSignInEmail", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.emailaddress;
    // TODO: add the ability to give a name after logging in or creating an account
    const user = yield (0, model_1.findOrCreateUser)(email, email);
    res.cookie("email", email);
    res.cookie("userId", String(user.userId));
    res.cookie("name", String(user.name));
    res.send({});
}));
app.post("/api/deleteActivity", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const activityId = Number(body.activityId);
    yield (0, model_1.deleteActivity)(activityId);
    res.send({});
}));
app.post("/api/deleteAssignment", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    yield (0, model_1.deleteAssignment)(assignmentId);
    res.send({});
}));
app.post("/api/createActivity", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loggedInUserId = Number(req.cookies.userId);
    const { activityId, docId } = yield (0, model_1.createActivity)(loggedInUserId);
    res.send({ activityId, docId });
}));
app.post("/api/updateActivityName", (req, res) => {
    const body = req.body;
    const activityId = Number(body.activityId);
    const name = body.name;
    (0, model_1.updateActivity)({ activityId, name });
    res.send({});
});
app.post("/api/updateIsPublicActivity", (req, res) => {
    const body = req.body;
    const activityId = Number(body.activityId);
    const isPublic = body.isPublic;
    (0, model_1.updateActivity)({ activityId, isPublic });
    res.send({});
});
app.get("/api/loadSupportingFileInfo/:activityId", (req, res) => {
    const activityId = Number(req.params.activityId);
    res.send({
        success: true,
        supportingFiles: [],
        canUpload: true,
        userQuotaBytesAvailable: 1000000,
        quotaBytes: 9000000,
    });
});
app.get("/api/checkCredentials", (req, res) => {
    const loggedIn = req.cookies.email ? true : false;
    res.send({ loggedIn });
});
app.get("/api/getCoursePermissionsAndSettings", (req, res) => {
    res.send({});
});
app.get("/api/searchPublicActivities", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query.q;
    res.send({
        users: [], // TODO - this
        activities: yield (0, model_1.searchPublicActivities)(query),
    });
}));
app.get("/api/loadPromotedContent", (req, res) => {
    res.send({
        success: true,
        carouselData: {},
    });
});
app.get("/api/getActivityEditorData/:activityId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const activityId = Number(req.params.activityId);
    try {
        const editorData = yield (0, model_1.getActivityEditorData)(activityId);
        res.send(editorData);
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            res.sendStatus(404);
        }
        else {
            next(e);
        }
    }
}));
app.get("/api/getAllDoenetmlVersions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allDoenetmlVersions = yield (0, model_1.getAllDoenetmlVersions)();
    res.send(allDoenetmlVersions);
}));
app.get("/api/getActivityView/:docId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = Number(req.params.docId);
    try {
        const viewerData = yield (0, model_1.getActivityViewerData)(docId);
        res.send(viewerData);
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            res.sendStatus(404);
        }
        else {
            next(e);
        }
    }
}));
app.get("/api/getAssignmentEditorData/:assignmentId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const assignmentId = Number(req.params.assignmentId);
    try {
        const editorData = yield (0, model_1.getAssignmentEditorData)(assignmentId);
        res.send(editorData);
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            res.sendStatus(404);
        }
        else {
            next(e);
        }
    }
}));
app.get("/api/getAssignmentDataFromCode/:code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.params.code;
    const signedIn = req.cookies.email ? true : false;
    let assignmentData = yield (0, model_1.getAssignmentDataFromCode)(code, signedIn);
    let name;
    if (assignmentData.newAnonymousUser) {
        const anonymousUser = assignmentData.newAnonymousUser;
        // create a user with random name and email
        res.cookie("email", anonymousUser.email);
        res.cookie("userId", String(anonymousUser.userId));
        res.cookie("name", String(anonymousUser.name));
        name = anonymousUser.name;
    }
    else {
        name = req.cookies.name;
    }
    res.send(Object.assign({ name }, assignmentData));
}));
app.get("/api/loadPromotedContentGroups", (req, res) => {
    res.send({});
});
app.post("/api/saveDoenetML", (req, res) => {
    const body = req.body;
    const doenetML = body.doenetML;
    const docId = Number(body.docId);
    (0, model_1.updateDoc)({ docId, content: doenetML });
    res.send({});
});
app.post("/api/updateActivitySettings", (req, res) => {
    const body = req.body;
    const activityId = Number(body.activityId);
    const imagePath = body.imagePath;
    const name = body.name;
    // TODO - deal with learning outcomes
    const learningOutcomes = body.learningOutcomes;
    const isPublic = body.isPublic;
    (0, model_1.updateActivity)({
        activityId,
        imagePath,
        name,
        isPublic,
    });
    res.send({});
});
app.post("/api/updateDocumentSettings", (req, res) => {
    const body = req.body;
    const docId = Number(body.docId);
    const name = body.name;
    // TODO - deal with learning outcomes
    const learningOutcomes = body.learningOutcomes;
    const doenetmlVersionId = Number(body.doenetmlVersionId);
    (0, model_1.updateDoc)({
        docId,
        name,
        doenetmlVersionId,
    });
    res.send({});
});
app.post("/api/duplicateActivity", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const targetActivityId = Number(req.body.activityId);
    const loggedInUserId = Number(req.cookies.userId);
    let newActivityId = yield (0, model_1.copyPublicActivityToPortfolio)(targetActivityId, loggedInUserId);
    res.send({ newActivityId });
}));
app.post("/api/assignActivity", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const activityId = Number(req.body.activityId);
    const loggedInUserId = Number(req.cookies.userId);
    let assignmentId = yield (0, model_1.assignActivity)(activityId, loggedInUserId);
    res.send({ assignmentId, userId: loggedInUserId });
}));
app.post("/api/updateAssignmentName", (req, res) => {
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const name = body.name;
    (0, model_1.updateAssignment)({ assignmentId, name });
    res.send({});
});
app.post("/api/updateAssignmentSettings", (req, res) => {
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const imagePath = body.imagePath;
    const name = body.name;
    (0, model_1.updateAssignment)({
        assignmentId,
        imagePath,
        name,
    });
    res.send({});
});
app.post("/api/openAssignmentWithCode", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const closeAt = luxon_1.DateTime.fromISO(body.closeAt);
    const { classCode, codeValidUntil } = yield (0, model_1.openAssignmentWithCode)(assignmentId, closeAt);
    res.send({ classCode, codeValidUntil });
}));
app.post("/api/closeAssignmentWithCode", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    yield (0, model_1.closeAssignmentWithCode)(assignmentId);
    res.send({});
}));
app.post("/api/saveScoreAndState", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const assignmentId = Number(body.assignmentId);
    const docId = Number(body.docId);
    const docVersionId = Number(body.docVersionId);
    const loggedInUserId = Number(req.cookies.userId);
    const score = Number(body.score);
    const state = body.state;
    yield (0, model_1.saveScoreAndState)({
        assignmentId,
        docId,
        docVersionId,
        userId: loggedInUserId,
        score,
        state,
    });
    res.send({});
}));
app.get("/api/getAssignmentScoreData/:assignmentId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const assignmentId = Number(req.params.assignmentId);
    const loggedInUserId = Number(req.cookies.userId);
    try {
        const assignmentWithData = yield (0, model_1.getAssignmentScoreData)({
            assignmentId,
            ownerId: loggedInUserId,
        });
        res.send(assignmentWithData);
    }
    catch (e) {
        if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            res.sendStatus(404);
        }
        else {
            next(e);
        }
    }
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

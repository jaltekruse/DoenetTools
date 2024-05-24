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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssignmentScoreData = exports.saveScoreAndState = exports.getAssignment = exports.closeAssignmentWithCode = exports.openAssignmentWithCode = exports.assignActivity = exports.getAllRecentPublicActivities = exports.getIsAdmin = exports.getAllDoenetmlVersions = exports.updateUser = exports.getUserInfo = exports.createAnonymousUser = exports.createUser = exports.findOrCreateUser = exports.listUserAssignments = exports.listUserActivities = exports.searchPublicActivities = exports.getAssignmentDataFromCode = exports.getAssignmentEditorData = exports.getActivityViewerData = exports.getActivityEditorData = exports.createDocumentVersion = exports.copyPublicActivityToPortfolio = exports.getDoc = exports.getActivity = exports.updateAssignment = exports.updateDoc = exports.updateActivity = exports.deleteAssignment = exports.deleteDocument = exports.deleteActivity = exports.createActivity = void 0;
const client_1 = require("@prisma/client");
const cid_1 = require("./utils/cid");
const luxon_1 = require("luxon");
const prisma = new client_1.PrismaClient();
function createActivity(ownerId) {
    return __awaiter(this, void 0, void 0, function* () {
        let defaultDoenetmlVersion = yield prisma.doenetmlVersions.findFirstOrThrow({
            where: { default: true },
        });
        const activity = yield prisma.activities.create({
            data: {
                ownerId,
                name: "Untitled Activity",
                imagePath: "/activity_default.jpg",
                documents: {
                    create: [
                        {
                            content: "",
                            doenetmlVersionId: defaultDoenetmlVersion.versionId,
                            name: "Untitled Document",
                        },
                    ],
                },
            },
        });
        let activityId = activity.activityId;
        const activityWithDoc = yield prisma.activities.findUniqueOrThrow({
            where: { activityId },
            select: { documents: { select: { docId: true } } },
        });
        let docId = activityWithDoc.documents[0].docId;
        return { activityId, docId };
    });
}
exports.createActivity = createActivity;
function deleteActivity(activityId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.activities.update({
            where: { activityId },
            data: {
                isDeleted: true,
                documents: {
                    updateMany: {
                        where: {},
                        data: {
                            isDeleted: true,
                        },
                    },
                },
            },
        });
    });
}
exports.deleteActivity = deleteActivity;
function deleteDocument(docId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.documents.update({
            where: { docId },
            data: { isDeleted: true },
        });
    });
}
exports.deleteDocument = deleteDocument;
function deleteAssignment(assignmentId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.assignments.update({
            where: { assignmentId },
            data: {
                isDeleted: true,
            },
        });
    });
}
exports.deleteAssignment = deleteAssignment;
function updateActivity(_a) {
    return __awaiter(this, arguments, void 0, function* ({ activityId, name, imagePath, isPublic, }) {
        return yield prisma.activities.update({
            where: { activityId },
            data: {
                name,
                imagePath,
                isPublic,
            },
        });
    });
}
exports.updateActivity = updateActivity;
// TODO - access control
function updateDoc(_a) {
    return __awaiter(this, arguments, void 0, function* ({ docId, content, name, doenetmlVersionId, }) {
        return yield prisma.documents.update({
            where: { docId },
            data: {
                content: content,
                name,
                doenetmlVersionId,
            },
        });
    });
}
exports.updateDoc = updateDoc;
function updateAssignment(_a) {
    return __awaiter(this, arguments, void 0, function* ({ assignmentId, name, imagePath, }) {
        return yield prisma.assignments.update({
            where: { assignmentId },
            data: {
                name,
                imagePath,
            },
        });
    });
}
exports.updateAssignment = updateAssignment;
// TODO - access control
function getActivity(activityId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.activities.findUniqueOrThrow({
            where: { activityId, isDeleted: false },
            include: {
                documents: {
                    where: { isDeleted: false },
                },
            },
        });
    });
}
exports.getActivity = getActivity;
// TODO - access control
function getDoc(docId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.documents.findUniqueOrThrow({
            where: { docId, isDeleted: false },
        });
    });
}
exports.getDoc = getDoc;
// TODO - access control
function copyPublicActivityToPortfolio(origActivityId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        let origActivity = yield getActivity(origActivityId);
        if (!origActivity.isPublic) {
            throw Error("Cannot copy a non-public activity to portfolio");
        }
        let newActivity = yield prisma.activities.create({
            data: {
                name: origActivity.name,
                imagePath: origActivity.imagePath,
                ownerId: userId,
            },
        });
        let documentsToAdd = yield Promise.all(origActivity.documents.map((doc) => __awaiter(this, void 0, void 0, function* () {
            // For each of the original documents, create a document version (i.e., a frozen snapshot)
            // that we will link to when creating contributor history, below.
            let originalDocVersion = yield createDocumentVersion(doc.docId);
            // document to create with new activityId (to associate it with newly created activity)
            // ignoring the docId, lastEdited, createdAt fields
            const { docId: _ignoreDocId, lastEdited: _ignoreLastEdited, createdAt: _ignoreCreatedAt } = doc, docInfo = __rest(doc, ["docId", "lastEdited", "createdAt"]);
            docInfo.activityId = newActivity.activityId;
            return { docInfo, originalDocVersion };
        })));
        // TODO: When createManyAndReturn is rolled out,
        // (see: https://github.com/prisma/prisma/pull/24064#issuecomment-2093331715)
        // use that to give a list of the newly created docIds.
        yield prisma.documents.createMany({
            data: documentsToAdd.map((x) => x.docInfo),
        });
        // In lieu of createManyAndReturn, get a list of the docIds of the newly created documents.
        const newDocIds = (yield prisma.activities.findUniqueOrThrow({
            where: { activityId: newActivity.activityId },
            select: {
                documents: { select: { docId: true }, orderBy: { docId: "asc" } },
            },
        })).documents.map((docIdObj) => docIdObj.docId);
        // Create contributor history linking each newly created document
        // to the corresponding versioned document from origActivity.
        let contribHistoryInfo = newDocIds.map((docId, i) => ({
            docId,
            prevDocId: origActivity.documents[i].docId,
            prevDocVersion: documentsToAdd[i].originalDocVersion.version,
        }));
        yield prisma.contributorHistory.createMany({
            data: contribHistoryInfo,
        });
        // Create contributor history linking each newly created document
        // to the contributor history of the corresponding document from origActivity.
        // Note: we copy all history rather than using a linked list
        // due to inefficient queries necessary to traverse link lists.
        for (let [i, origDoc] of origActivity.documents.entries()) {
            const previousHistory = yield prisma.contributorHistory.findMany({
                where: {
                    docId: origDoc.docId,
                },
                orderBy: { timestamp: "desc" },
            });
            yield prisma.contributorHistory.createMany({
                data: previousHistory.map((hist) => ({
                    docId: newDocIds[i],
                    prevDocId: hist.prevDocId,
                    prevDocVersion: hist.prevDocVersion,
                    timestamp: hist.timestamp,
                })),
            });
        }
        return newActivity.activityId;
    });
}
exports.copyPublicActivityToPortfolio = copyPublicActivityToPortfolio;
// TODO - access control
function createDocumentVersion(docId) {
    return __awaiter(this, void 0, void 0, function* () {
        const doc = yield prisma.documents.findUniqueOrThrow({
            where: { docId, isDeleted: false },
            include: {
                activity: { select: { name: true } },
            },
        });
        // TODO: cid should really include the doenetmlVersion
        const cid = yield (0, cid_1.cidFromText)(doc.content || "");
        let docVersion = yield prisma.documentVersions.findUnique({
            where: { docId_cid: { docId, cid } },
        });
        if (!docVersion) {
            // TODO: not sure how to make an atomic operation of this with the ORM.
            // Should we write a raw SQL query to accomplish this in one query?
            const aggregations = yield prisma.documentVersions.aggregate({
                _max: { version: true },
                where: { docId },
            });
            const lastVersion = aggregations._max.version;
            const newVersion = lastVersion ? lastVersion + 1 : 1;
            docVersion = yield prisma.documentVersions.create({
                data: {
                    version: newVersion,
                    docId,
                    cid,
                    name: doc.name,
                    activityName: doc.activity.name,
                    doenetmlVersionId: doc.doenetmlVersionId,
                    content: doc.content,
                },
            });
        }
        return docVersion;
    });
}
exports.createDocumentVersion = createDocumentVersion;
// TODO - access control
function getActivityEditorData(activityId) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: add pagination or a hard limit in the number of documents one can add to an activity
        let activity = yield prisma.activities.findUniqueOrThrow({
            where: { activityId, isDeleted: false },
            include: {
                documents: {
                    include: {
                        doenetmlVersion: true,
                    },
                    // TODO: implement ability to allow users to order the documents within an activity
                    orderBy: { docId: "asc" },
                },
            },
        });
        return activity;
    });
}
exports.getActivityEditorData = getActivityEditorData;
// TODO - access control
// TODO: generalize this to multi-document activities
function getActivityViewerData(activityId) {
    return __awaiter(this, void 0, void 0, function* () {
        const activity = yield prisma.activities.findUniqueOrThrow({
            where: { activityId, isDeleted: false },
            include: {
                owner: { select: { userId: true, email: true, name: true } },
                documents: {
                    where: { isDeleted: false },
                    select: { docId: true, content: true },
                },
            },
        });
        const docId = activity.documents[0].docId;
        let doc = yield prisma.documents.findUniqueOrThrow({
            where: { docId, isDeleted: false },
            include: {
                contributorHistory: {
                    include: {
                        prevDoc: {
                            select: {
                                document: {
                                    select: {
                                        activity: {
                                            select: {
                                                activityId: true,
                                                name: true,
                                                owner: {
                                                    select: { userId: true, email: true, name: true },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        return {
            activity,
            doc,
        };
    });
}
exports.getActivityViewerData = getActivityViewerData;
// TODO - access control
function getAssignmentEditorData(assignmentId) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: add pagination or a hard limit in the number of documents one can add to an activity
        let assignment = yield prisma.assignments.findUniqueOrThrow({
            where: { assignmentId, isDeleted: false },
            include: {
                assignmentDocuments: {
                    select: {
                        docId: true,
                        docVersionId: true,
                        documentVersion: {
                            select: {
                                content: true,
                            },
                        },
                    },
                    orderBy: {
                        docId: "asc",
                    },
                },
            },
        });
        let stillOpen = false;
        if (assignment.codeValidUntil) {
            const endDate = luxon_1.DateTime.fromJSDate(assignment.codeValidUntil);
            stillOpen = luxon_1.DateTime.now() <= endDate;
        }
        return Object.assign(Object.assign({}, assignment), { stillOpen });
    });
}
exports.getAssignmentEditorData = getAssignmentEditorData;
function getAssignmentDataFromCode(code, signedIn) {
    return __awaiter(this, void 0, void 0, function* () {
        let assignment;
        try {
            assignment = yield prisma.assignments.findFirstOrThrow({
                where: {
                    classCode: code,
                    codeValidUntil: {
                        gte: luxon_1.DateTime.now().toISO(), // TODO - confirm this works with timezone stuff
                    },
                    isDeleted: false,
                },
                include: {
                    assignmentDocuments: {
                        select: {
                            docId: true,
                            docVersionId: true,
                            documentVersion: {
                                select: {
                                    content: true,
                                },
                            },
                        },
                        orderBy: {
                            docId: "asc",
                        },
                    },
                },
            });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                return {
                    assignmentFound: false,
                    newAnonymousUser: null,
                    assignment: null,
                };
            }
            else {
                throw e;
            }
        }
        let newAnonymousUser = signedIn ? null : yield createAnonymousUser();
        return { assignmentFound: true, newAnonymousUser, assignment };
    });
}
exports.getAssignmentDataFromCode = getAssignmentDataFromCode;
function searchPublicActivities(query) {
    return __awaiter(this, void 0, void 0, function* () {
        let query_words = query.split(" ");
        let activities = yield prisma.activities.findMany({
            where: {
                AND: query_words.map((qw) => ({ name: { contains: "%" + qw + "%" } })),
                isPublic: true,
                isDeleted: false,
            },
            include: {
                owner: true,
            },
        });
        return activities;
    });
}
exports.searchPublicActivities = searchPublicActivities;
function listUserActivities(ownerId, loggedInUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        const notMe = ownerId !== loggedInUserId;
        const activities = yield prisma.activities.findMany({
            where: { ownerId, isDeleted: false, isPublic: notMe ? true : undefined },
            include: { documents: { select: { docId: true, doenetmlVersion: true } } },
        });
        const publicActivities = activities.filter((activity) => activity.isPublic);
        const privateActivities = activities.filter((activity) => !activity.isPublic && !notMe);
        const user = yield prisma.users.findUniqueOrThrow({
            where: { userId: ownerId },
            select: { name: true },
        });
        return {
            publicActivities,
            privateActivities,
            name: user.name,
            notMe,
        };
    });
}
exports.listUserActivities = listUserActivities;
function listUserAssignments(ownerId, loggedInUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ownerId !== loggedInUserId) {
            return [];
        }
        const assignments = yield prisma.assignments.findMany({
            where: { ownerId, isDeleted: false },
        });
        const user = yield prisma.users.findUniqueOrThrow({
            where: { userId: ownerId },
            select: { name: true },
        });
        return {
            assignments,
            name: user.name,
        };
    });
}
exports.listUserAssignments = listUserAssignments;
function findOrCreateUser(email, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findUnique({ where: { email } });
        if (user) {
            return user;
        }
        else {
            return createUser(email, name);
        }
    });
}
exports.findOrCreateUser = findOrCreateUser;
function createUser(email, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma.users.create({ data: { email, name } });
        return result;
    });
}
exports.createUser = createUser;
function createAnonymousUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        const random_number = array[0];
        const name = ``;
        const email = `anonymous${random_number}@example.com`;
        const result = yield prisma.users.create({
            data: { email, name, anonymous: true },
        });
        return result;
    });
}
exports.createAnonymousUser = createAnonymousUser;
function getUserInfo(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findUniqueOrThrow({
            where: { email },
            select: { userId: true, email: true, name: true, anonymous: true },
        });
        return user;
    });
}
exports.getUserInfo = getUserInfo;
function updateUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ userId, name, }) {
        const user = yield prisma.users.update({
            where: { userId },
            data: { name },
        });
        return user;
    });
}
exports.updateUser = updateUser;
function getAllDoenetmlVersions() {
    return __awaiter(this, void 0, void 0, function* () {
        const allDoenetmlVersions = yield prisma.doenetmlVersions.findMany({
            where: {
                removed: false,
            },
            orderBy: {
                displayedVersion: "asc",
            },
        });
        return allDoenetmlVersions;
    });
}
exports.getAllDoenetmlVersions = getAllDoenetmlVersions;
function getIsAdmin(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findUnique({ where: { email } });
        let isAdmin = false;
        if (user) {
            isAdmin = user.isAdmin;
        }
        return isAdmin;
    });
}
exports.getIsAdmin = getIsAdmin;
function getAllRecentPublicActivities() {
    return __awaiter(this, void 0, void 0, function* () {
        const docs = yield prisma.activities.findMany({
            where: { isPublic: true, isDeleted: false },
            orderBy: { lastEdited: "desc" },
            take: 100,
            include: {
                owner: {
                    select: {
                        email: true,
                    },
                },
            },
        });
        return docs;
    });
}
exports.getAllRecentPublicActivities = getAllRecentPublicActivities;
function assignActivity(activityId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        let origActivity = yield getActivity(activityId);
        if (!(origActivity.isPublic || origActivity.ownerId === userId)) {
            throw Error("Activity not found");
        }
        let documentsVersionsToAdd = yield Promise.all(origActivity.documents.map((doc) => __awaiter(this, void 0, void 0, function* () {
            // For each of the original documents, create a document version (i.e., a frozen snapshot)
            // that we will link the assignment to.
            return yield createDocumentVersion(doc.docId);
        })));
        let newAssignment = yield prisma.assignments.create({
            data: {
                name: origActivity.name,
                activityId: origActivity.activityId,
                imagePath: origActivity.imagePath,
                ownerId: userId,
                assignmentDocuments: {
                    create: documentsVersionsToAdd.map((docVersion) => ({
                        documentVersion: {
                            connect: {
                                version_docId: {
                                    docId: docVersion.docId,
                                    version: docVersion.version,
                                },
                            },
                        },
                    })),
                },
            },
        });
        return newAssignment.assignmentId;
    });
}
exports.assignActivity = assignActivity;
function generateClassCode() {
    return ("00000" + Math.floor(Math.random() * 1000000)).slice(-6);
}
function openAssignmentWithCode(assignmentId, closeAt) {
    return __awaiter(this, void 0, void 0, function* () {
        let classCode = (yield prisma.assignments.findUniqueOrThrow({
            where: { assignmentId },
            select: { classCode: true },
        })).classCode;
        if (!classCode) {
            classCode = generateClassCode();
        }
        const codeValidUntil = closeAt.toJSDate();
        yield prisma.assignments.update({
            where: { assignmentId },
            data: {
                classCode,
                codeValidUntil,
            },
        });
        return { classCode, codeValidUntil };
    });
}
exports.openAssignmentWithCode = openAssignmentWithCode;
function closeAssignmentWithCode(assignmentId) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.assignments.update({
            where: { assignmentId },
            data: {
                codeValidUntil: null,
            },
        });
    });
}
exports.closeAssignmentWithCode = closeAssignmentWithCode;
function getAssignment(assignmentId, ownerId) {
    return __awaiter(this, void 0, void 0, function* () {
        let assignment = yield prisma.assignments.findUniqueOrThrow({
            where: {
                assignmentId,
                ownerId,
                isDeleted: false,
            },
            include: {
                assignmentDocuments: {
                    select: {
                        documentVersion: true,
                    },
                },
            },
        });
        return assignment;
    });
}
exports.getAssignment = getAssignment;
function saveScoreAndState(_a) {
    return __awaiter(this, arguments, void 0, function* ({ assignmentId, docId, docVersionId, userId, score, state, }) {
        // make sure have an assignmentScores record
        const assignmentScores = yield prisma.assignmentScores.upsert({
            where: { assignmentId_userId: { assignmentId, userId } },
            update: {},
            create: { assignmentId, userId },
        });
        // record score and state for this document
        yield prisma.documentState.upsert({
            where: {
                assignmentId_docVersionId_docId_userId: {
                    assignmentId,
                    docId,
                    docVersionId,
                    userId,
                },
            },
            update: {
                score,
                state,
            },
            create: {
                assignmentId,
                docId,
                docVersionId,
                userId,
                score,
                state,
            },
        });
        const assignmentScore = yield prisma.assignmentScores.findUniqueOrThrow({
            where: {
                assignmentId_userId: {
                    assignmentId,
                    userId,
                },
            },
            include: {
                documentState: true,
            },
        });
        // for now, make score be the maximum of the current score and the weighted averages of the scores from the documents
        const assignmentDocuments = yield prisma.assignments.findUniqueOrThrow({
            where: { assignmentId },
            select: { assignmentDocuments: { select: { docId: true } } },
        });
        const numDocuments = assignmentDocuments.assignmentDocuments.length;
        const currentScore = assignmentScore.score;
        const documentScores = assignmentScore.documentState.map((x) => x.score);
        const averageScore = documentScores.reduce((a, c) => a + c) / numDocuments;
        if (averageScore > currentScore) {
            yield prisma.assignmentScores.update({
                where: { assignmentId_userId: { assignmentId, userId } },
                data: {
                    score: averageScore,
                },
            });
        }
    });
}
exports.saveScoreAndState = saveScoreAndState;
function getAssignmentScoreData(_a) {
    return __awaiter(this, arguments, void 0, function* ({ assignmentId, ownerId, }) {
        const assignment = yield prisma.assignments.findUniqueOrThrow({
            where: { assignmentId, ownerId, isDeleted: false },
            select: {
                name: true,
                assignmentScores: {
                    select: {
                        user: {
                            select: { name: true, userId: true },
                        },
                        score: true,
                    },
                    orderBy: { user: { name: "asc" } },
                },
            },
        });
        return assignment;
    });
}
exports.getAssignmentScoreData = getAssignmentScoreData;

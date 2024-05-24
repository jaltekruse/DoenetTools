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
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const model_1 = require("./model");
const luxon_1 = require("luxon");
const EMPTY_DOC_CID = "bafkreihdwdcefgh4dqkjv67uzcmw7ojee6xedzdetojuzjevtenxquvyku";
// create an isolated user for each test, will allow tests to be run in parallel
function createTestUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const username = "vitest-" + new Date().toJSON() + "@vitest.test";
        const user = yield (0, model_1.findOrCreateUser)(username, "vitest user");
        return user;
    });
}
(0, vitest_1.test)("New user has an empty portfolio", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createTestUser();
    const userId = user.userId;
    const docs = yield (0, model_1.listUserActivities)(userId, userId);
    (0, vitest_1.expect)(docs).toStrictEqual({
        publicActivities: [],
        privateActivities: [],
        name: "vitest user",
        notMe: false,
    });
}));
(0, vitest_1.test)("Update user name", () => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield createTestUser();
    const userId = user.userId;
    (0, vitest_1.expect)(user.name).eq("vitest user");
    user = yield (0, model_1.updateUser)({ userId, name: "New name" });
    (0, vitest_1.expect)(user.name).eq("New name");
    const userInfo = yield (0, model_1.getUserInfo)(user.email);
    (0, vitest_1.expect)(userInfo.name).eq("New name");
}));
(0, vitest_1.test)("New activity starts out private, then delete it", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createTestUser();
    const userId = user.userId;
    const { activityId } = yield (0, model_1.createActivity)(userId);
    const activityContent = yield (0, model_1.getActivityEditorData)(activityId);
    (0, vitest_1.expect)(activityContent).toStrictEqual({
        activityId: vitest_1.expect.any(Number),
        ownerId: vitest_1.expect.any(Number),
        name: "Untitled Activity",
        createdAt: vitest_1.expect.any(Date),
        lastEdited: vitest_1.expect.any(Date),
        imagePath: "/activity_default.jpg",
        isPublic: false,
        isDeleted: false,
        documents: [
            {
                docId: vitest_1.expect.any(Number),
                activityId: vitest_1.expect.any(Number),
                content: "",
                createdAt: vitest_1.expect.any(Date),
                lastEdited: vitest_1.expect.any(Date),
                name: "Untitled Document",
                isDeleted: false,
                doenetmlVersionId: 2,
                doenetmlVersion: {
                    versionId: 2,
                    displayedVersion: "0.7",
                    fullVersion: "0.7.0-alpha1",
                    default: true,
                    deprecated: false,
                    removed: false,
                    deprecationMessage: "",
                },
            },
        ],
    });
    const docs = yield (0, model_1.listUserActivities)(userId, userId);
    (0, vitest_1.expect)(docs.privateActivities.length).toBe(1);
    (0, vitest_1.expect)(docs.publicActivities.length).toBe(0);
    yield (0, model_1.deleteActivity)(activityId);
    yield (0, vitest_1.expect)((0, model_1.getActivityEditorData)(activityId)).rejects.toThrow("No activities found");
    const docsAfterDelete = yield (0, model_1.listUserActivities)(userId, userId);
    (0, vitest_1.expect)(docsAfterDelete.privateActivities.length).toBe(0);
    (0, vitest_1.expect)(docsAfterDelete.publicActivities.length).toBe(0);
}));
(0, vitest_1.test)("listUserActivities returns both public and private documents for a user", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId: publicActivityId } = yield (0, model_1.createActivity)(ownerId);
    const { activityId: privateActivityId } = yield (0, model_1.createActivity)(ownerId);
    // Make one activity public
    yield (0, model_1.updateActivity)({ activityId: publicActivityId, isPublic: true });
    const userDocs = yield (0, model_1.listUserActivities)(ownerId, ownerId);
    (0, vitest_1.expect)(userDocs).toMatchObject({
        publicActivities: vitest_1.expect.arrayContaining([
            vitest_1.expect.objectContaining({
                activityId: publicActivityId,
            }),
        ]),
        privateActivities: vitest_1.expect.arrayContaining([
            vitest_1.expect.objectContaining({
                activityId: privateActivityId,
            }),
        ]),
    });
}));
(0, vitest_1.test)("Test updating various activity properties", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createTestUser();
    const userId = user.userId;
    const { activityId } = yield (0, model_1.createActivity)(userId);
    const activityName = "Test Name";
    yield (0, model_1.updateActivity)({ activityId, name: activityName });
    const activityContent = yield (0, model_1.getActivityEditorData)(activityId);
    const docId = activityContent.documents[0].docId;
    (0, vitest_1.expect)(activityContent.name).toBe(activityName);
    const content = "Here comes some content, I made you some content";
    yield (0, model_1.updateDoc)({ docId, content });
    const activityContent2 = yield (0, model_1.getActivityEditorData)(activityId);
    (0, vitest_1.expect)(activityContent2.documents[0].content).toBe(content);
    const activityViewerContent = yield (0, model_1.getActivityViewerData)(activityId);
    (0, vitest_1.expect)(activityViewerContent.activity.name).toBe(activityName);
    (0, vitest_1.expect)(activityViewerContent.doc.content).toBe(content);
}));
(0, vitest_1.test)("deleteActivity marks a activity and document as deleted and prevents its retrieval", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createTestUser();
    const userId = user.userId;
    const { activityId, docId } = yield (0, model_1.createActivity)(userId);
    // activity can be retrieved
    yield (0, model_1.getActivity)(activityId);
    yield (0, model_1.getActivityViewerData)(activityId);
    yield (0, model_1.getActivityEditorData)(activityId);
    yield (0, model_1.getDoc)(docId);
    const deleteResult = yield (0, model_1.deleteActivity)(activityId);
    (0, vitest_1.expect)(deleteResult.isDeleted).toBe(true);
    // cannot retrieve activity
    yield (0, vitest_1.expect)((0, model_1.getActivity)(activityId)).rejects.toThrow("No activities found");
    yield (0, vitest_1.expect)((0, model_1.getActivityViewerData)(activityId)).rejects.toThrow("No activities found");
    yield (0, vitest_1.expect)((0, model_1.getActivityEditorData)(activityId)).rejects.toThrow("No activities found");
    yield (0, vitest_1.expect)((0, model_1.getDoc)(docId)).rejects.toThrow("No documents found");
}));
(0, vitest_1.test)("updateDoc updates document properties", () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createTestUser();
    const userId = user.userId;
    const { activityId, docId } = yield (0, model_1.createActivity)(userId);
    const newName = "Updated Name";
    const newContent = "Updated Content";
    yield (0, model_1.updateActivity)({ activityId, name: newName });
    yield (0, model_1.updateDoc)({
        docId,
        content: newContent,
    });
    const activityViewerContent = yield (0, model_1.getActivityViewerData)(activityId);
    (0, vitest_1.expect)(activityViewerContent.activity.name).toBe(newName);
    (0, vitest_1.expect)(activityViewerContent.doc.content).toBe(newContent);
}));
(0, vitest_1.test)("copyPublicActivityToPortfolio copies a public document to a new owner", () => __awaiter(void 0, void 0, void 0, function* () {
    const originalOwnerId = (yield createTestUser()).userId;
    const newOwnerId = (yield createTestUser()).userId;
    const { activityId, docId } = yield (0, model_1.createActivity)(originalOwnerId);
    // cannot copy if not yet public
    yield (0, vitest_1.expect)((0, model_1.copyPublicActivityToPortfolio)(activityId, newOwnerId)).rejects.toThrow("Cannot copy a non-public activity to portfolio");
    // Make the activity public before copying
    yield (0, model_1.updateActivity)({ activityId, isPublic: true });
    const newActivityId = yield (0, model_1.copyPublicActivityToPortfolio)(activityId, newOwnerId);
    const newActivity = yield (0, model_1.getActivity)(newActivityId);
    (0, vitest_1.expect)(newActivity.ownerId).toBe(newOwnerId);
    (0, vitest_1.expect)(newActivity.isPublic).toBe(false);
    const activityData = yield (0, model_1.getActivityViewerData)(newActivityId);
    const contribHist = activityData.doc.contributorHistory;
    (0, vitest_1.expect)(contribHist.length).eq(1);
    (0, vitest_1.expect)(contribHist[0].prevDocId).eq(docId);
    (0, vitest_1.expect)(contribHist[0].prevDocVersion).eq(1);
}));
(0, vitest_1.test)("copyPublicActivityToPortfolio remixes correct versions", () => __awaiter(void 0, void 0, void 0, function* () {
    const ownerId1 = (yield createTestUser()).userId;
    const ownerId2 = (yield createTestUser()).userId;
    const ownerId3 = (yield createTestUser()).userId;
    // create activity 1 by owner 1
    const { activityId: activityId1, docId: docId1 } = yield (0, model_1.createActivity)(ownerId1);
    const activity1Content = "<p>Hello!</p>";
    yield (0, model_1.updateActivity)({ activityId: activityId1, isPublic: true });
    yield (0, model_1.updateDoc)({ docId: docId1, content: activity1Content });
    // copy activity 1 to owner 2's portfolio
    const activityId2 = yield (0, model_1.copyPublicActivityToPortfolio)(activityId1, ownerId2);
    const activity2 = yield (0, model_1.getActivity)(activityId2);
    (0, vitest_1.expect)(activity2.ownerId).toBe(ownerId2);
    (0, vitest_1.expect)(activity2.documents[0].content).eq(activity1Content);
    // history should be version 1 of activity 1
    const activityData2 = yield (0, model_1.getActivityViewerData)(activityId2);
    const contribHist2 = activityData2.doc.contributorHistory;
    (0, vitest_1.expect)(contribHist2.length).eq(1);
    (0, vitest_1.expect)(contribHist2[0].prevDocId).eq(docId1);
    (0, vitest_1.expect)(contribHist2[0].prevDocVersion).eq(1);
    // modify activity 1 so that will have a new version
    const activity1ContentModified = "<p>Bye</p>";
    yield (0, model_1.updateDoc)({ docId: docId1, content: activity1ContentModified });
    // copy activity 1 to owner 3's portfolio
    const activityId3 = yield (0, model_1.copyPublicActivityToPortfolio)(activityId1, ownerId3);
    const activity3 = yield (0, model_1.getActivity)(activityId3);
    (0, vitest_1.expect)(activity3.ownerId).toBe(ownerId3);
    (0, vitest_1.expect)(activity3.documents[0].content).eq(activity1ContentModified);
    // history should be version 2 of activity 1
    const activityData3 = yield (0, model_1.getActivityViewerData)(activityId3);
    const contribHist3 = activityData3.doc.contributorHistory;
    (0, vitest_1.expect)(contribHist3.length).eq(1);
    (0, vitest_1.expect)(contribHist3[0].prevDocId).eq(docId1);
    (0, vitest_1.expect)(contribHist3[0].prevDocVersion).eq(2);
}));
// TODO:
// create activity
// remix that activity
// remix the remixed activity
(0, vitest_1.test)("searchPublicActivities returns activities matching the query", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    // Make the document public and give it a unique name for the test
    const uniqueName = "UniqueNameForSearchTest";
    yield (0, model_1.updateActivity)({ activityId, name: uniqueName, isPublic: true });
    const searchResults = yield (0, model_1.searchPublicActivities)(uniqueName);
    (0, vitest_1.expect)(searchResults).toEqual(vitest_1.expect.arrayContaining([
        vitest_1.expect.objectContaining({
            name: uniqueName,
        }),
    ]));
}));
(0, vitest_1.test)("findOrCreateUser finds an existing user or creates a new one", () => __awaiter(void 0, void 0, void 0, function* () {
    const email = `unique-${Date.now()}@example.com`;
    const name = "vitest user";
    const user = yield (0, model_1.findOrCreateUser)(email, name);
    (0, vitest_1.expect)(user.userId).toBeTypeOf("number");
    // Attempt to find the same user again
    const sameUser = yield (0, model_1.findOrCreateUser)(email, name);
    (0, vitest_1.expect)(sameUser).toStrictEqual(user);
}));
(0, vitest_1.test)("getAllDoenetmlVersions retrieves all non-removed versions", () => __awaiter(void 0, void 0, void 0, function* () {
    const allVersions = yield (0, model_1.getAllDoenetmlVersions)();
    (0, vitest_1.expect)(allVersions).toBeInstanceOf(Array);
    // there should be at least one version
    (0, vitest_1.expect)(allVersions.length).toBeGreaterThan(0);
    // Ensure none of the versions are marked as removed
    allVersions.forEach((version) => {
        (0, vitest_1.expect)(version.removed).toBe(false);
    });
}));
(0, vitest_1.test)("deleteActivity prevents a document from being retrieved", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    yield (0, model_1.deleteActivity)(activityId);
    yield (0, vitest_1.expect)((0, model_1.getActivity)(activityId)).rejects.toThrow("No activities found");
}));
(0, vitest_1.test)("updateActivity does not update properties when passed undefined values", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    const originalActivity = yield (0, model_1.getActivity)(activityId);
    yield (0, model_1.updateActivity)({ activityId });
    const updatedActivity = yield (0, model_1.getActivity)(activityId);
    (0, vitest_1.expect)(updatedActivity).toEqual(originalActivity);
}));
(0, vitest_1.test)("assign an activity", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    const activity = yield (0, model_1.getActivity)(activityId);
    yield (0, model_1.updateActivity)({ activityId, name: "Activity 1" });
    yield (0, model_1.updateDoc)({
        docId: activity.documents[0].docId,
        content: "Some content",
    });
    const assignmentId = yield (0, model_1.assignActivity)(activityId, ownerId);
    const assignment = yield (0, model_1.getAssignment)(assignmentId, ownerId);
    (0, vitest_1.expect)(assignment.activityId).eq(activityId);
    (0, vitest_1.expect)(assignment.name).eq("Activity 1");
    (0, vitest_1.expect)(assignment.assignmentDocuments.length).eq(1);
    (0, vitest_1.expect)(assignment.assignmentDocuments[0].documentVersion.content).eq("Some content");
    // changing name and content of activity does not change assignment
    yield (0, model_1.updateActivity)({ activityId, name: "Activity 1a" });
    yield (0, model_1.updateDoc)({
        docId: activity.documents[0].docId,
        content: "Some amended content",
    });
    const updatedActivity = yield (0, model_1.getActivity)(activityId);
    (0, vitest_1.expect)(updatedActivity.name).eq("Activity 1a");
    (0, vitest_1.expect)(updatedActivity.documents[0].content).eq("Some amended content");
    const unchangedAssignment = yield (0, model_1.getAssignment)(assignmentId, ownerId);
    (0, vitest_1.expect)(unchangedAssignment.name).eq("Activity 1");
    (0, vitest_1.expect)(unchangedAssignment.assignmentDocuments[0].documentVersion.content).eq("Some content");
}));
(0, vitest_1.test)("cannot assign other user's private activity", () => __awaiter(void 0, void 0, void 0, function* () {
    const ownerId1 = (yield createTestUser()).userId;
    const ownerId2 = (yield createTestUser()).userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId1);
    const activity = yield (0, model_1.getActivity)(activityId);
    yield (0, model_1.updateActivity)({ activityId, name: "Activity 1" });
    yield (0, model_1.updateDoc)({
        docId: activity.documents[0].docId,
        content: "Some content",
    });
    yield (0, vitest_1.expect)((0, model_1.assignActivity)(activityId, ownerId2)).rejects.toThrow("Activity not found");
    // can create assignment if activity is made public
    yield (0, model_1.updateActivity)({ activityId, isPublic: true });
    const assignmentId = yield (0, model_1.assignActivity)(activityId, ownerId2);
    const assignment = yield (0, model_1.getAssignment)(assignmentId, ownerId2);
    (0, vitest_1.expect)(assignment.activityId).eq(activityId);
    (0, vitest_1.expect)(assignment.name).eq("Activity 1");
    (0, vitest_1.expect)(assignment.assignmentDocuments.length).eq(1);
    (0, vitest_1.expect)(assignment.assignmentDocuments[0].documentVersion.content).eq("Some content");
}));
(0, vitest_1.test)("open and close assignment with code", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    const activity = yield (0, model_1.getActivity)(activityId);
    yield (0, model_1.updateActivity)({ activityId, name: "Activity 1" });
    yield (0, model_1.updateDoc)({
        docId: activity.documents[0].docId,
        content: "Some content",
    });
    const assignmentId = yield (0, model_1.assignActivity)(activityId, ownerId);
    let assignment = yield (0, model_1.getAssignment)(assignmentId, ownerId);
    (0, vitest_1.expect)(assignment.classCode).eq(null);
    (0, vitest_1.expect)(assignment.codeValidUntil).eq(null);
    // open assignment generates code
    let closeAt = luxon_1.DateTime.now().plus({ days: 1 });
    const { classCode } = yield (0, model_1.openAssignmentWithCode)(assignmentId, closeAt);
    assignment = yield (0, model_1.getAssignment)(assignmentId, ownerId);
    (0, vitest_1.expect)(assignment.classCode).eq(classCode);
    (0, vitest_1.expect)(assignment.codeValidUntil).eqls(closeAt.toJSDate());
    let assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, true);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(true);
    (0, vitest_1.expect)(assignmentData.assignment.assignmentId).eq(assignmentId);
    (0, vitest_1.expect)(assignmentData.assignment.classCode).eq(classCode);
    (0, vitest_1.expect)(assignmentData.assignment.codeValidUntil).eqls(closeAt.toJSDate());
    (0, vitest_1.expect)(assignmentData.assignment.assignmentDocuments[0].documentVersion.content).eq("Some content");
    yield (0, model_1.closeAssignmentWithCode)(assignmentId);
    assignment = yield (0, model_1.getAssignment)(assignmentId, ownerId);
    (0, vitest_1.expect)(assignment.classCode).eq(classCode);
    (0, vitest_1.expect)(assignment.codeValidUntil).eqls(null);
    assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, true);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(false);
    (0, vitest_1.expect)(assignmentData.assignment).eq(null);
    // get same code back if reopen
    closeAt = luxon_1.DateTime.now().plus({ weeks: 3 });
    const { classCode: classCode2 } = yield (0, model_1.openAssignmentWithCode)(assignmentId, closeAt);
    (0, vitest_1.expect)(classCode2).eq(classCode);
    assignment = yield (0, model_1.getAssignment)(assignmentId, ownerId);
    (0, vitest_1.expect)(assignment.classCode).eq(classCode);
    (0, vitest_1.expect)(assignment.codeValidUntil).eqls(closeAt.toJSDate());
    assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, true);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(true);
    (0, vitest_1.expect)(assignmentData.assignment.assignmentId).eq(assignmentId);
    (0, vitest_1.expect)(assignmentData.assignment.classCode).eq(classCode);
    (0, vitest_1.expect)(assignmentData.assignment.codeValidUntil).eqls(closeAt.toJSDate());
    // Open with past date.
    // Currently, says assignment is not found
    // TODO: if we want students who have previously joined the assignment to be able to reload the page,
    // then this should still retrieve data those students.
    closeAt = luxon_1.DateTime.now().plus({ seconds: -7 });
    yield (0, model_1.openAssignmentWithCode)(assignmentId, closeAt);
    assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, true);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(false);
    (0, vitest_1.expect)(assignmentData.assignment).eq(null);
}));
(0, vitest_1.test)("open and delete assignment with code", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    const activity = yield (0, model_1.getActivity)(activityId);
    yield (0, model_1.updateActivity)({ activityId, name: "Activity 1" });
    yield (0, model_1.updateDoc)({
        docId: activity.documents[0].docId,
        content: "Some content",
    });
    const assignmentId = yield (0, model_1.assignActivity)(activityId, ownerId);
    // open assignment generates code
    let closeAt = luxon_1.DateTime.now().plus({ days: 1 });
    const { classCode } = yield (0, model_1.openAssignmentWithCode)(assignmentId, closeAt);
    let assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, true);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(true);
    (0, vitest_1.expect)(assignmentData.assignment.assignmentId).eq(assignmentId);
    (0, vitest_1.expect)(assignmentData.assignment.classCode).eq(classCode);
    (0, vitest_1.expect)(assignmentData.assignment.codeValidUntil).eqls(closeAt.toJSDate());
    // Delete assignment.
    yield (0, model_1.deleteAssignment)(assignmentId);
    yield (0, vitest_1.expect)((0, model_1.getAssignment)(assignmentId, ownerId)).rejects.toThrow("No assignments found");
    // Getting deleted assignment by code fails
    assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, true);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(false);
    (0, vitest_1.expect)(assignmentData.assignment).eq(null);
}));
(0, vitest_1.test)("create anonymous users", () => __awaiter(void 0, void 0, void 0, function* () {
    // create an anonymous user
    const user1 = yield (0, model_1.createAnonymousUser)();
    (0, vitest_1.expect)(user1.anonymous).eq(true);
    // create another anonymous user
    const user2 = yield (0, model_1.createAnonymousUser)();
    (0, vitest_1.expect)(user2.anonymous).eq(true);
    (0, vitest_1.expect)(user1.userId).not.eq(user2.userId);
}));
(0, vitest_1.test)("assignment data with code create anonymous user when not signed in", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    const activity = yield (0, model_1.getActivity)(activityId);
    yield (0, model_1.updateActivity)({ activityId, name: "Activity 1" });
    yield (0, model_1.updateDoc)({
        docId: activity.documents[0].docId,
        content: "Some content",
    });
    const assignmentId = yield (0, model_1.assignActivity)(activityId, ownerId);
    // open assignment generates code
    let closeAt = luxon_1.DateTime.now().plus({ days: 1 });
    const { classCode } = yield (0, model_1.openAssignmentWithCode)(assignmentId, closeAt);
    let assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, false);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(true);
    // created new anonymous user since weren't logged in
    const newUser1 = assignmentData.newAnonymousUser;
    (0, vitest_1.expect)(newUser1.anonymous).eq(true);
    // don't get new user if assignment is closed
    yield (0, model_1.closeAssignmentWithCode)(assignmentId);
    assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, false);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(false);
    (0, vitest_1.expect)(assignmentData.newAnonymousUser).eq(null);
    // reopen and get another user if load again when not logged in
    closeAt = luxon_1.DateTime.now().plus({ weeks: 3 });
    yield (0, model_1.openAssignmentWithCode)(assignmentId, closeAt);
    assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, false);
    (0, vitest_1.expect)(assignmentData.assignmentFound).eq(true);
    const newUser2 = assignmentData.newAnonymousUser;
    (0, vitest_1.expect)(newUser2.anonymous).eq(true);
    (0, vitest_1.expect)(newUser2.userId).not.eq(newUser1.userId);
}));
(0, vitest_1.test)("get assignment data from anonymous users", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId, docId } = yield (0, model_1.createActivity)(ownerId);
    yield (0, model_1.updateActivity)({ activityId, name: "Activity 1" });
    yield (0, model_1.updateDoc)({
        docId,
        content: "Some content",
    });
    const assignmentId = yield (0, model_1.assignActivity)(activityId, ownerId);
    // open assignment generates code
    let closeAt = luxon_1.DateTime.now().plus({ days: 1 });
    const { classCode } = yield (0, model_1.openAssignmentWithCode)(assignmentId, closeAt);
    let assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, false);
    let newUser1 = assignmentData.newAnonymousUser;
    newUser1 = yield (0, model_1.updateUser)({
        userId: newUser1.userId,
        name: "Zoe Zaborowski",
    });
    const userData1 = { userId: newUser1.userId, name: newUser1.name };
    yield (0, model_1.saveScoreAndState)({
        assignmentId,
        docId,
        docVersionId: 1,
        userId: newUser1.userId,
        score: 0.5,
        state: "document state 1",
    });
    let assignmentWithScores = yield (0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId,
    });
    (0, vitest_1.expect)(assignmentWithScores).eqls({
        name: "Activity 1",
        assignmentScores: [{ score: 0.5, user: userData1 }],
    });
    // new lower score ignored
    yield (0, model_1.saveScoreAndState)({
        assignmentId,
        docId,
        docVersionId: 1,
        userId: newUser1.userId,
        score: 0.2,
        state: "document state 2",
    });
    assignmentWithScores = yield (0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId,
    });
    (0, vitest_1.expect)(assignmentWithScores).eqls({
        name: "Activity 1",
        assignmentScores: [{ score: 0.5, user: userData1 }],
    });
    // new higher score used
    yield (0, model_1.saveScoreAndState)({
        assignmentId,
        docId,
        docVersionId: 1,
        userId: newUser1.userId,
        score: 0.7,
        state: "document state 3",
    });
    assignmentWithScores = yield (0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId,
    });
    (0, vitest_1.expect)(assignmentWithScores).eqls({
        name: "Activity 1",
        assignmentScores: [{ score: 0.7, user: userData1 }],
    });
    // second user opens assignment
    assignmentData = yield (0, model_1.getAssignmentDataFromCode)(classCode, false);
    let newUser2 = assignmentData.newAnonymousUser;
    newUser2 = yield (0, model_1.updateUser)({
        userId: newUser2.userId,
        name: "Arya Abbas",
    });
    const userData2 = { userId: newUser2.userId, name: newUser2.name };
    // assignment scores still unchanged
    assignmentWithScores = yield (0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId,
    });
    (0, vitest_1.expect)(assignmentWithScores).eqls({
        name: "Activity 1",
        assignmentScores: [{ score: 0.7, user: userData1 }],
    });
    // save state for second user
    yield (0, model_1.saveScoreAndState)({
        assignmentId,
        docId,
        docVersionId: 1,
        userId: newUser2.userId,
        score: 0.3,
        state: "document state 4",
    });
    // second user's score shows up first due to alphabetical sorting
    assignmentWithScores = yield (0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId,
    });
    (0, vitest_1.expect)(assignmentWithScores).eqls({
        name: "Activity 1",
        assignmentScores: [
            { score: 0.3, user: userData2 },
            { score: 0.7, user: userData1 },
        ],
    });
}));
(0, vitest_1.test)("can't get assignment data if other user", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const otherUser = yield createTestUser();
    const otherUserId = otherUser.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    const assignmentId = yield (0, model_1.assignActivity)(activityId, ownerId);
    yield (0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId,
    });
    yield (0, vitest_1.expect)((0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId: otherUserId,
    })).rejects.toThrow("No assignments found");
}));
(0, vitest_1.test)("can't get assignment data if deleted", () => __awaiter(void 0, void 0, void 0, function* () {
    const owner = yield createTestUser();
    const ownerId = owner.userId;
    const { activityId } = yield (0, model_1.createActivity)(ownerId);
    const assignmentId = yield (0, model_1.assignActivity)(activityId, ownerId);
    yield (0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId,
    });
    yield (0, model_1.deleteAssignment)(assignmentId);
    yield (0, vitest_1.expect)((0, model_1.getAssignmentScoreData)({
        assignmentId,
        ownerId,
    })).rejects.toThrow("No assignments found");
}));

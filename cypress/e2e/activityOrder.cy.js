describe('empty spec', () => {

  const userId = "cyuserId";
  const studentUserId = "cyStudentUserId";
  const courseId = "sharedTestCourseId1";

  beforeEach(() => {
    cy.signin({ userId });
    cy.createCourse({ userId, courseId, studentUserId });
  });

  it('passes', () => {
    cy.visit('/');

  })
})
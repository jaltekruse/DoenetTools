<?php

function permissionsAndSettingsForOneCourseFunction($conn, $userId, $courseId)
{
    //TODO: is this safe?
    $sql = "SELECT
    c.courseId, 
    c.label,
    c.isPublic,
    c.image,
    c.color,
    c.defaultRoleId,
    cr.roleId,
    cr.label as roleLabel,
    cr.isIncludedInGradebook,
    cr.canViewContentSource,
    cr.canEditContent,
    cr.canPublishContent,
    cr.canViewUnassignedContent,
    cr.canProctor,
    cr.canViewAndModifyGrades,
    cr.canViewActivitySettings,
    cr.canModifyActivitySettings,
    cr.canModifyCourseSettings,
    cr.canViewUsers,
    cr.canManageUsers,
    cr.isAdmin,
    cr.dataAccessPermission,
    cr.isOwner
    FROM course_role AS cr
    LEFT JOIN course_user as cu
    ON cu.roleId = cr.roleId
    RIGHT JOIN course as c
    ON c.courseId = cu.courseId
    WHERE c.courseId = '$courseId'
    AND cu.userId = '$userId'
    AND c.isDeleted = '0'
    ORDER BY c.id DESC
    ";

    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $permissionsAndSettings = $result->fetch_assoc();
    } else {
        return false;
    }

    return $permissionsAndSettings;
}

?>

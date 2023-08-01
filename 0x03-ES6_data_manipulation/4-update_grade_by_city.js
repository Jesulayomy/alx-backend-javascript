export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (listStudents instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}

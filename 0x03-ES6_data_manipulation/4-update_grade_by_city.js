export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((student) => student.location === city)
    .map((student) => {
      for (const newGrade of newGrades) {
        if (student.id === newGrade.studentId) {
          return { ...student, grade: newGrade.grade };
	}
      }
      return { ...student, grade: 'N/A' };
    });
}

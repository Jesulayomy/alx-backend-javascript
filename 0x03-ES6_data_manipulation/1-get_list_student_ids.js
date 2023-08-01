export default function getListStudentIds(listStudents) {
  if (listStudents instanceof Array) return listStudents.map((student) => student.id);
  return [];
}

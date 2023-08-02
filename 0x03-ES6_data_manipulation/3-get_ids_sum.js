export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((sum, std) => sum + std.id, 0);
}

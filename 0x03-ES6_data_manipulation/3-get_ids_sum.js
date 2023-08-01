export default function getStudentIdsSum(listStudents) {
  let total = 0
  return listStudents.map((student) => student.id)
    .reduce((sum, id) => sum + id, total);
}

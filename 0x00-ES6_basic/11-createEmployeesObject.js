export default function createEmployeesObject(departmentName, employees) {
  const workers = {
    [`${departmentName}`]: [...employees],
  };
  return workers
}

const employees = [
  {
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA",
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA",
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA",
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB",
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB",
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB",
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC",
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC",
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC",
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD",
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD",
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD",
  },
];

export function getEmployees() {
  return employees;
}
export function saveEmployees(employee) {
  console.log("Recieved ", employee);
  let employeeInDb = employees.filter((e) => e.id === employee[0].id);
  employeeInDb[0].fullName = employee[0].fullName;
  employeeInDb[0].designation = employee[0].designation;

  return employeeInDb[0];
}

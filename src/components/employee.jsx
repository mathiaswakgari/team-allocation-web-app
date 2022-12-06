import Card from "./card";
import Maleprofile from "../images/maleProfile.jpg";
import Femaleprofile from "../images/femaleProfile.jpg";
import { Link } from "react-router-dom";
const Employee = ({ employee }) => {
  return (
    <Link to={`employees/${employee.id}`}>
      <Card
        key={employee.id}
        employee={employee}
        profile={employee.gender === "male" ? Maleprofile : Femaleprofile}
      />
    </Link>
  );
};
export function employeeDetail({ employee }) {
  return employee.name;
}
export default Employee;

import { getEmployees } from "./employeesData";
import { useState } from "react";
import SelectInput from "./common/selectInput";
import card from "./card";
import { saveEmployees } from "./employeesData";

const CardForm = (props) => {
  const [data, setData] = useState(
    getEmployees().filter((item) => item.id === Number(props.match.params.id))
  );

  function mapToViewModel(card) {
    return {
      fullname: card.fullname,
      designation: card.designation,
      gender: card.gender,
      teamName: card.teamName,
    };
  }
  const doEdit = (e) => {
    e.preventDefault();
    console.log(e.target.fullName);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(data);
    saveEmployees(data);
  };
  const handleChange = (e) => {
    //console.log(e.target.value);
    const Edata = [...data];
    const index = e.target.name;
    //console.log(index);
    Edata[0][index] = e.target.value;
    setData(Edata);
    //console.log("Data", data);
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        className="form-control"
        type="text"
        id="fullName"
        placeholder={data[0].fullName}
        onChange={handleChange}
        name="fullName"
        //defaultValue={data[0].fullName}
      />
      <label htmlFor="designation">Designation</label>
      <input
        className="form-control"
        name="designation"
        type="text"
        id="designation"
        placeholder={data[0].designation}
        onChange={handleChange}
        //defaultValue={data[0].designation}
      />
      <label htmlFor="gender">Gender</label>
      <input
        className="form-control"
        type="text"
        name="gender"
        id="gender"
        placeholder={data[0].gender}
        disabled={true}
        //defaultValue={data[0].gender}
      />
      <label htmlFor="team">Team</label>
      <SelectInput teamSelection={data[0].teamName} disabled={true} />

      <button
        className="btn btn-primary btn-large
       mt-5"
        type="submit"
      >
        Edit
      </button>
    </form>
  );
};

export default CardForm;

const card = ({ employee, profile }) => {
  return (
    <div
      style={{ cursor: "pointer", color: "black" }}
      key={employee.id}
      className="card m-2"
    >
      <img src={profile} alt="profile" className="card-img-top" />
      <div key={employee.id} id={employee.id} className="card-body">
        <h6 className="card-title">Full Name: {employee.fullName}</h6>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
};
export default card;

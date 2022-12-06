import React, { useState } from "react";
import Maleprofile from "../images/maleProfile.jpg";
import Femaleprofile from "../images/femaleProfile.jpg";
import Card from "./card";
import SelectInput from "./common/selectInput";
import { getEmployees } from "./employeesData";
import SearchBox from "./common/searchBar";
import CardsFound from "./cardsFound";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { Link, NavLink } from "react-router-dom";
import Employee from "./employee";

const Employees = () => {
  const [teamSelection, setTeamSelection] = useState("");
  const [employees, setEmployees] = useState(getEmployees());
  const [query, setQuery] = useState("");
  const [onAPage, setonAPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (e) => {
    setTeamSelection(e.currentTarget.value);
    setQuery("");
    setCurrentPage(1);
  };
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setTeamSelection("");
  };
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  let filtered = employees;
  if (teamSelection === "" && query)
    filtered = employees.filter((employee) =>
      employee.fullName.toLowerCase().startsWith(query.toLowerCase())
    );
  else if (teamSelection)
    filtered = employees.filter(
      (employee) => employee.teamName === teamSelection
    );

  const paginated = paginate(filtered, currentPage, onAPage);

  return (
    <main className="container">
      <CardsFound filtered={paginated} />
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-12">
          <SelectInput
            handleChange={handleChange}
            teamSelection={teamSelection}
          />
          <SearchBox onChange={handleSearch} value={query} />
          <div className=" cards">
            {paginated.map((employee) => (
              <Employee employee={employee} key={employee.id} />
            ))}
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        itemsCount={filtered.length}
        onAPage={onAPage}
        onPageChange={onPageChange}
      />
    </main>
  );
};
export default Employees;

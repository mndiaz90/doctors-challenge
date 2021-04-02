import React from "react";
import SearchContainer from "../SearchContainer/SearchContainer";
import DoctorsTable from "../DoctorsTable/DoctorsTable";

const App = () => {
    return <>
        <div className="row">
            <h2>Doctors</h2>
        </div>
        <SearchContainer />
        <DoctorsTable />
    </>

}

export default App;

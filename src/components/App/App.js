import React, { useEffect, useState } from "react";
import { getDoctorsList } from "./App.util"
import SearchContainer from "../SearchContainer/SearchContainer";
import DoctorsTable from "../DoctorsTable/DoctorsTable";

const App = (props) => {
    const [doctorsList, setDoctorsList] = useState([]);

    useEffect(() => {
        getDoctorsList(props.doctorsTable).then((doctors) => setDoctorsList(doctors));
    }, [])

    return <>
        <div className="row">
            <h2>Doctors</h2>
        </div>
        <SearchContainer />
        <DoctorsTable doctors={doctorsList} />
    </>

}

export default App;

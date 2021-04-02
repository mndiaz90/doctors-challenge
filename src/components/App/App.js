import React, { useEffect, useState } from "react";
import { getDoctorsList } from "./App.util"
import SearchContainer from "../SearchContainer/SearchContainer";
import DoctorsTable from "../DoctorsTable/DoctorsTable";

const App = (props) => {
    const [doctorsList, setDoctorsList] = useState([]);
    const [selected, setSelected] = useState("all");

    let filteredDoctors = doctorsList.filter((doctor) => {
        return selected === "all" ? true : doctor.available == true
    })

    useEffect(() => {
        getDoctorsList(props.doctorsTable).then((doctors) => setDoctorsList(doctors));
    }, [])

    const onChangeSelect = (event) => {
        setSelected(event.target.value)
    }

    return <>
        <div className="row">
            <h2>Doctors</h2>
        </div>
        <SearchContainer onChangeSelect={onChangeSelect} />
        <DoctorsTable doctors={filteredDoctors} />
    </>
}

export default App;

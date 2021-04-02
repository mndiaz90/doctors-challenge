import React, { useEffect, useState } from "react";
import { getDoctorsList } from "./App.util"
import SearchContainer from "../SearchContainer/SearchContainer";
import DoctorsTable from "../DoctorsTable/DoctorsTable";

const App = (props) => {
    const [doctorsList, setDoctorsList] = useState([]);
    const [selected, setSelected] = useState("all");
    const [inputSearch, setInputSearch] = useState("");

    let filteredDoctors = doctorsList.filter((doctor) => {
        return (doctor.name.toLowerCase().includes(inputSearch.toLowerCase().trim())
            || doctor.upin.includes(inputSearch.trim()))
            && (selected === "all" ? true : doctor.available == true)
    })

    useEffect(() => {
        getDoctorsList(props.doctorsTable).then((doctors) => setDoctorsList(doctors));
    }, [])

    const onChangeSelect = (event) => {
        setSelected(event.target.value)
    }

    const onChangeInput = (event) => {
        setInputSearch(event.target.value)
    }

    const updateDoctors = (modifiedDoctor)=>{
        let newListDoctors = [...doctorsList]
        const doctorIndex = newListDoctors.findIndex((doctor => doctor.upin == modifiedDoctor.upin));

        newListDoctors[doctorIndex].available = modifiedDoctor.available;
        setDoctorsList(newListDoctors);
    }

    return <>
        <div className="row">
            <h2>Doctors</h2>
        </div>
        <SearchContainer onChangeSelect={onChangeSelect} onChangeInput={onChangeInput} />
        <DoctorsTable doctors={filteredDoctors} updateDoctors = {updateDoctors} />
    </>
}

export default App;

import React, { createContext, useEffect, useState } from "react";
import { getDoctorsList } from "../components/App/App.util";

export const DoctorContext = createContext({});

export function DoctorsProvider({ props, children }) {
    const [doctorsList, setDoctorsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState("all");
    const [inputSearch, setInputSearch] = useState("");

    const filteredDoctors = doctorsList.filter((doctor) => {
        return (doctor.name.toLowerCase().includes(inputSearch.toLowerCase().trim())
            || doctor.upin.includes(inputSearch.trim()))
            && (selected === "all" ? true : doctor.available == true)
    })

    useEffect(() => {
        getDoctorsList(props.doctorsTable).then((doctors) => {
            if (doctors) {
                setDoctorsList(doctors);
                setLoading(false);
            }
        });
    }, [])

    const onChangeSelect = (event) => {
        setSelected(event.target.value);
    }

    const onChangeInput = (event) => {
        setInputSearch(event.target.value);
    }

    const updateDoctors = (modifiedDoctor) => {
        let newListDoctors = [...doctorsList];
        const doctorIndex = newListDoctors.findIndex((doctor => doctor.upin == modifiedDoctor.upin));

        newListDoctors[doctorIndex].available = modifiedDoctor.available;
        setDoctorsList(newListDoctors);
    }
    return (
        <DoctorContext.Provider
            value={{
                filteredDoctors,
                updateDoctors,
                loading,
                onChangeSelect,
                onChangeInput
            }}>
            {children}
        </DoctorContext.Provider>
    )
}

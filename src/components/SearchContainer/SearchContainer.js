import React, { useContext } from "react";
import { DoctorContext } from "../../context/DoctorContext";

const SearchContainer = () => {
    const { onChangeInput, onChangeSelect } = useContext(DoctorContext);
    return <>
        <div className="row">
            <div className="column column-20" style={{ marginTop: '6px' }}>
                Filter by:
            </div>
            <div className="column column-20">
                <select defaultValue="all" id="availabilityFilterSelect" onChange={onChangeSelect}>
                    <option value="all" >All Doctors</option>
                    <option value="available">Available Doctors</option>
                </select>
            </div>
            <div id="searchContainer">
                <input type="text" placeholder="Search by name or upin" onChange={onChangeInput} />
            </div>
        </div>
    </>
}

export default SearchContainer

import React from "react"

const SearchContainer = (props) => {
    return <>
        <div className="row">
            <div className="column column-20">
                Filter by:
            </div>
            <div className="column column-20">
                <select defaultValue="all" id="availabilityFilterSelect" onChange={props.onChangeSelect}>
                    <option value="all" >All Doctors</option>
                    <option value="available">Available Doctors</option>
                </select>
            </div>
            <div id="searchContainer">
                <input type="text" placeholder="Search by name or upin" onChange={props.onChangeInput} />
            </div>
        </div>
    </>
}

export default SearchContainer

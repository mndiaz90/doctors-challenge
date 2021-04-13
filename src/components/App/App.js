import React, { useContext } from "react";

import SearchContainer from "../SearchContainer/SearchContainer";
import DoctorsTable from "../DoctorsTable/DoctorsTable";
import loadingGif from '../../../public/images/loading.gif';
import { DoctorsProvider, DoctorContext } from "../../context/DoctorContext";

const App = (props) => {
    const { loading } = useContext(DoctorContext);
    return <>
        <div className="row">
            <h2>Doctors</h2>
        </div>
        <DoctorsProvider props={props}>
            <SearchContainer />
            {
                loading ? <div className="divLoading">
                    <img src={loadingGif} alt="loading..." />
                </div> : <DoctorsTable />
            }
        </DoctorsProvider>
    </>
}

export default App;

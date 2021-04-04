import "./index.css";
import React from "react";
import { render } from "react-dom";
import getDoctorsTable from "./index.util"
import App from "./components/App/App";

render(
    <App doctorsTable={getDoctorsTable()} />,
    document.querySelector(".main-container")
);

document.getElementsByClassName("main-container")[0].style.display = 'block';

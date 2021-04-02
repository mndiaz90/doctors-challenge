function getDoctorsTable() {
    const doctorRows = document.getElementsByTagName("tbody")[0].rows;
    let doctorsTable = [];

    for (var i = 0; i < doctorRows.length; i++) {
        var td = doctorRows[i].getElementsByTagName("td");
        doctorsTable.push({
            upin: doctorRows[i].getAttribute('data-upin'),
            name: td[0].innerText,
            zipcode: td[1].innerText,
            city: td[2].innerText,
        });
    }

    return doctorsTable;
}

export default getDoctorsTable;

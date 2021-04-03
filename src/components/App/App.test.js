import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import doctorsTable from "../../../tests/DataMock/DoctorsTable"
import doctorsResponse from "../../../tests/DataMock/DoctorsResponse"
import App from "./App";

let container = null;

beforeEach(async () => {
  container = document.createElement("div");
  document.body.appendChild(container);

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(doctorsResponse)
    })
  );

  await act(async () => {
    render(<App doctorsTable={doctorsTable} />, container);
  });
});

afterEach(() => {
  if (global.fetch != undefined) {
    global.fetch.mockClear();
    delete global.fetch;
  }

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders each doctor on the right table row", () => {
  const doctorTr = container.querySelector("[data-upin='202029']");
  const doctorUpinTd = doctorTr.querySelector(":first-child")
  const doctorNameTd = doctorTr.querySelector(":nth-child(2)")
  const doctorZipCodeTd = doctorTr.querySelector(":nth-child(3)")
  const doctorCityTd = doctorTr.querySelector(":nth-child(4)")

  expect(doctorUpinTd.textContent).toBe("202029");
  expect(doctorNameTd.textContent).toBe("John Doe");
  expect(doctorZipCodeTd.textContent).toContain("92037");
  expect(doctorCityTd.textContent).toContain("La Jolla");
});

it("filters available doctors", async () => {
  const filterSelect = container.querySelector("#availabilityFilterSelect");

  fireEvent.change(filterSelect, { target: { value: 'available' } });

  const toggleButtons = await screen.findAllByRole('button')
  expect(toggleButtons).toHaveLength(6)
});

it("filters all doctors", async () => {
  const filterSelect = container.querySelector("#availabilityFilterSelect");

  fireEvent.change(filterSelect, { target: { value: 'all' } });

  const toggleButtons = await screen.findAllByRole('button')
  expect(toggleButtons).toHaveLength(8)
});

it("filters by doctor name", () => {
  const inputSearch = container.querySelector("#searchContainer > input");
  fireEvent.change(inputSearch, { target: { value: 'Liz' } });

  const tbody = container.querySelector("tbody");
  expect(tbody.children).toHaveLength(1)

  const doctorTr = tbody.querySelector(":first-child");
  const doctorUpinTd = doctorTr.querySelector(":first-child")
  const doctorNameTd = doctorTr.querySelector(":nth-child(2)")
  const doctorZipCodeTd = doctorTr.querySelector(":nth-child(3)")
  const doctorCityTd = doctorTr.querySelector(":nth-child(4)")

  expect(doctorUpinTd.textContent).toBe("910291");
  expect(doctorNameTd.textContent).toBe("Liz Redfield");
  expect(doctorZipCodeTd.textContent).toContain("92015");
  expect(doctorCityTd.textContent).toContain("San Diego");
});

it("filters by UPIN", () => {
  const inputSearch = container.querySelector("#searchContainer > input");
  fireEvent.change(inputSearch, { target: { value: '982170' } });

  const tbody = container.querySelector("tbody#doctors");
  expect(tbody.children).toHaveLength(1)

  const doctorTr = tbody.querySelector(":first-child");
  const doctorUpinTd = doctorTr.querySelector(":first-child")
  const doctorNameTd = doctorTr.querySelector(":nth-child(2)")
  const doctorZipCodeTd = doctorTr.querySelector(":nth-child(3)")
  const doctorCityTd = doctorTr.querySelector(":nth-child(4)")

  expect(doctorUpinTd.textContent).toBe("982170");
  expect(doctorNameTd.textContent).toBe("Kevin Lamkin");
  expect(doctorZipCodeTd.textContent).toContain("92015");
  expect(doctorCityTd.textContent).toContain("San Diego");
});

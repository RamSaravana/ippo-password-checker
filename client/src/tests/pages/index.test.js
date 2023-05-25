import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Homepage from "../../pages/home/index";

describe("test suite for passwordmeter", () => {
  it("check header presence", () => {
    render(<Homepage />);
    let container = screen.getByTestId("password-container");
    expect(container).toBeInTheDocument();
  });
});

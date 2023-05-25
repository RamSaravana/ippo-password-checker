import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Header from "../../pages/home/header";

describe("test suite for passwordmeter", () => {
  it("check header presence", () => {
    render(<Header />);
    let header = screen.getByTestId("main-header");
    expect(header).toBeInTheDocument();
  });
});

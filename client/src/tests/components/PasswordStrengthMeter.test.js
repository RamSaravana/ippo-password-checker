import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";
import axios from "axios";

jest.mock("axios");

describe("test suite for passwordmeter", () => {
  it("check mandatory elements presence", () => {
    render(<PasswordStrengthMeter />);
    let username = screen.getByTestId("username");
    expect(username).toBeInTheDocument();
    let password = screen.getByTestId("password");
    expect(password).toBeInTheDocument();
    let show = screen.getByTestId("show-password");
    expect(show).toBeInTheDocument();
    const submitButton = screen.queryByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
    const progressBar = screen.getByTestId("progress-bar");
    expect(progressBar).toBeInTheDocument();
  });
  it("toggle password visibility", () => {
    render(<PasswordStrengthMeter />);
    const showbutton = screen.queryByTestId("show-password");
    fireEvent.click(showbutton);
    expect(screen.getByTestId("password").type).toBe("text");
  });
  it("handle submit", () => {
    render(<PasswordStrengthMeter />);
    const submitButton = screen.queryByTestId("submit-button");
    fireEvent.click(submitButton);
  });
  it("progress bar", () => {
    render(<PasswordStrengthMeter />);
    const password = screen.queryByTestId("password");
    fireEvent.change(password, { target: { value: "Ram@123" } });
    const progressBar = screen.getByTestId("progress-bar");
    expect(screen.getByTestId("progress-bar").classList.contains("w-100")).toBe(
      true
    );
  });
  it("save password", async () => {
    const url = "http://localhost:5000/auth";
    const data = {
      password: "Neela@145",
      username: "default",
      _id: "646f0c407cdf9a2907ca9514",
      __v: 0,
    };
    await axios.post.mockImplementation((url) =>
      Promise.resolve({ status: 200, data })
    );
  });
});

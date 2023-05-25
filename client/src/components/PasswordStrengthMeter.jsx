import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { verifyPassword, progressPercentage } from "../utils/utils";
import * as authService from '../service/authService';

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");

  const [hidePassword, setHidePassword] = useState(true);

  const handleSubmit = () => {
    if (password !== null && password !== "") {
      authService.savePassword(password)
    }
  };

  const handlePassword = (password) => {
    let passAttributes = verifyPassword(password);

    setPassword(password);
    let percentage = (passAttributes.verifiedList.length / 5) * 100;
    let progressRange = progressPercentage(percentage)
    setProgress(progressRange);
    setMessage(passAttributes.strength);
  };

  const getActiveColor = (type) => {
    if (type === "Strong") return "#8BC926";
    if (type === "Medium") return "#FEBD01";
    return "#FF0054";
  };

  return (
    <div className="card-body">
      <div className="input-container">
        <div className="input-box">
          <Form.Group className="mb-3" data-testid={`username`}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Disabled input"
              value="default"
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              data-testid={`password`}
              value={password}
              onChange={({ target }) => {
                handlePassword(target.value);
              }}
              type={hidePassword ? "password" : "text"}
              className="input"
              placeholder="Enter Password"
              name='toggle-password'
            />
          </Form.Group>

          <Button
            className="toggle-btn button_primary"
            data-testid={`show-password`}
            onClick={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <span
              className="material-icons eye-icon"
            >
              Show
            </span>
          </Button>
          <Button onClick={handleSubmit} className={'button_primary'} data-testid={`submit-button`} >Submit</Button>
        </div>

        <div className="progress" data-testid={`progress`}>
          <div data-testid={`progress-bar`} className={`progress-bar w-${progress.toString().replace('%','')}`} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      {password.length !== 0 ? (
        <p className="message" style={{ color: getActiveColor(message) }}>
          Your password is {message}
        </p>
      ) : null}
    </div>
  );
};

export default PasswordStrengthMeter;

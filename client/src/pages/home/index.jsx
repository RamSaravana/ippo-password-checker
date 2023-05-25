import React from "react";
// import { useState } from "react";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";

const HomePage = () => {
  return (
    <div className="container" data-testid={`password-container`}>
      <PasswordStrengthMeter />
    </div>
  );
};

export default HomePage;

import { useRef, useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    setOtp(newOtp);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      inputRefs.current[index - 1].focus();
      setOtp(newOtp);
    }
  };

  return (
    <div className="App">
      <h2>OTP Verification</h2>
      <p>Enter the 4-digit OTP you have received</p>
      <div className="otp-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            className="otp-input"
            type="text"
            maxLength={1}
            value={digit}
            autoFocus={index === 0}
            ref={(ref) => (inputRefs.current[index] = ref)}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;

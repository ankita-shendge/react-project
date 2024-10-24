import React, { useState, useEffect } from "react";

function SignupButton() {
  const [signup, setSignUp] = useState(false);

  const handleSignup = () => {
    setSignUp(true);
  };

  useEffect(() => {
    if (signup) {
      window.open(
        "https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F"
      );
    }
  }, [signup]);

  return (
    <>
      <button onClick={handleSignup}>Sign Up</button>
    </>
  );
}

export default SignupButton;

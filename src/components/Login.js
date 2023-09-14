import React, { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = loginData;

    const userCredentials = {
        email,
        password,
      };

      fetch("/src/users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
            alert("Login successful!");
        })
        .catch((error) => {
          console.error("Error during login:", error);
          alert("Login failed. Please check your email and password.");
        });
    };

    return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
    
    export default Login;

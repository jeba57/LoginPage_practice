/*import { useState } from "react";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    aadhar: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      console.error(error);
      alert("Error registering user");

    }
  };

  return (

    <div className="container">

      <h2>User Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="number"
          name="aadhar"
          placeholder="Aadhar Number"
          onChange={handleChange}
        />

        <button type="submit">Register</button>

      </form>

    </div>

  );
}

export default Register;

*/



import { useState } from "react";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    aadhar: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      console.error(error);
      alert("Error registering user");

    }
  };

  return (

    <div className="container">

      <h2
        onMouseEnter={(e) => e.target.classList.add("h2-glow")}
        onMouseLeave={(e) => e.target.classList.remove("h2-glow")}
      >
        User Register
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="text"
          name="aadhar"
          placeholder="Aadhar Number"
          maxLength="12"
          onChange={handleChange}
        />

        <button type="submit">Register</button>

      </form>

    </div>

  );
}

export default Register;


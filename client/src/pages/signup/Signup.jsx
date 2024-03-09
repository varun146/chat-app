// package imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

//files import
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I am clicked");
    console.log(inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96">
      <div className="w-full p-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-center text-3xl text-gray-800 font-semibold">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
          <div>
            <input
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              type="text"
              placeholder="Full Name"
              className="w-full text-sm input input-bordered focus:outline-none"
            />
          </div>
          <div>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              type="text"
              placeholder="Username"
              className="w-full text-sm input input-bordered focus:outline-none"
            />
          </div>
          <div>
            <input
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              placeholder="Password"
              className="w-full text-sm input input-bordered focus:outline-none"
            />
          </div>
          <div>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="Confirm Password"
              className="w-full text-sm input input-bordered focus:outline-none"
            />
          </div>

          {/*props are passed to update the gender value */}
          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <Link to="/login">Already have an account?</Link>
          <div>
            <button disabled={loading} className="btn btn-block btn-bordered">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-ip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-700 text-center">
          Login
        </h1>
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered  focus:outline-none h-10"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-bordered  focus:outline-none h-10"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup">{"Don't"} have an account?</Link>
          <div>
            <button className="btn btn-block btn-active btn-bordered">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

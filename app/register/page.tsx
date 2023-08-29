"use client";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.table({ name, email, pass });
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e: any) => {
    setPass(e.target.value);
  };
  return (
    <>
      <h1 className="text-3xl text-center mt-6">Register</h1>
      <div className="mx-6 mt-6 lg:mx-auto lg:w-2/3">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-3 p-4 border rounded border-gray-400"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter Name"
            required
          />
          <input
            className="w-full mb-3  p-4 border rounded border-gray-400"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email"
            required
          />
          <input
            className="w-full p-4 border rounded border-gray-400"
            type="password"
            value={pass}
            onChange={handlePassChange}
            placeholder="Enter Password"
            required
          />

          <button
            className="w-full p-4 mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

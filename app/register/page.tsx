"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("kashif");
  const [email, setEmail] = useState("k@gmail.com");
  const [password, setPassword] = useState("123456789");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        name,
        email,
        password,
      };
      await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, data);
      // console.table({ name, email, password });
      toast.success("Registeration Successfull. Pleas Login");
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e: any) => {
    setPassword(e.target.value);
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
            value={password}
            onChange={handlePassChange}
            placeholder="Enter Password"
            required
          />

          <button
            className="w-full p-4 mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
            type="submit"
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
          <p>
            Already have an account?{"       "}
            <Link className="text-blue-700" href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;

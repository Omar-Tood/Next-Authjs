"use client"
import { login } from "@/actions/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";

const LoginGithub = () => {
  return (
    <div
      onClick={() => login("github")}
      className="w-full gap-4 hover:cursor-pointer mt-6 h-15 p-4 bg-pink-600 rounded-md"
    >
      <FaGithub className="text-white" />
      <p className="text-white">Login with Github</p>
    </div>
  );
};

export default LoginGithub;

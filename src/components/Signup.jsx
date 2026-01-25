import React, { useState } from "react"
import authService from "../appwrite/auth"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../store/authSlice"
import { Button, Input, Logo } from "./index"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")

  const create = async (data) => {
    setError("")
    try {
      const account = await authService.createAccount(data)
      if (account) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(login(userData))
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="
          mx-auto w-full max-w-lg
          rounded-xl
          px-3 py-2
          border border-black/10
          bg-gray-100
          h-full
        "
      >
        {/* Logo */}
        <div className="flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold leading-tight">
          Create your account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-600 mt-6 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(create)} className="mt-5">
          <div className="flex flex-col text-center items-center">

            <Input
              label="Full Name:"
              className="px-2 py-1"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />

            <Input
              label="Email:"
              type="email"
              className="px-2 py-1"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password:"
              type="password"
              className="px-2 py-1"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />

            <Button
              type="submit"
              bgColor="bg-amber-500"
              className="w-[50%] m-4"
            >
              Create Account
            </Button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup

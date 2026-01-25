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
            <div className="mx-auto w-full max-w-lg rounded-xl border border-black/10 bg-gray-100 px-10 py-14 min-h-[60vh]">

                {/* Logo */}
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Create your account
                </h2>

                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

                {/* Error */}
                {error && (
                    <p className="mt-8 text-center text-red-600">
                        {error}
                    </p>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(create)} className="mt-8">
                    <div className="flex flex-col items-center gap-5 text-center">

                        <Input
                            label="Full Name:"
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />

                        <Input
                            label="Email:"
                            type="email"
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
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button
                            type="submit"
                            bgColor="bg-amber-500"
                            className="w-[50%]  mb-4"
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

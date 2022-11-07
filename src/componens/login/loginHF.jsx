import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",

    });
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    Login
                </div>
                <input {...register("login", {
                    required: "Email is requier field!",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter valid email!",
                    },

                })}
                    placeholder="login" />
                {errors?.login && (
                    <div style={{ color: "red" }}>{errors.login.message}</div>
                )}
            </div>
            <div>
                <div>
                    Password
                </div>
                <input type="password" {...register("password", {
                    required: "Password is requier field!",
                })}
                    placeholder="password" />
                {errors?.password && (
                    <div style={{ color: "red" }}>{errors.password.message}</div>
                )}
            </div>
            <div>
                <input type="checkbox"  {...register('rememberMe', {})} /> remember me
            </div>
            <input type="submit" />
        </form>
    );
}

export default Login;

import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Navigate } from "react-router-dom"

const Login = (props) => {
    const { register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: "onChange",

    });
    const onSubmit = data => {
        console.log(data)
        reset()
        props.login(data.email, data.password, data.rememberMe)
    };
    if (props.isAuth) {
        return <Navigate to={"/profile/26415"} />
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    Login
                </div>
                <input {...register("email", {
                    required: "Email is requier field!",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter valid email!",
                    },

                })}
                    placeholder="email" />
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
            <input type="submit" disabled={!isValid} />
        </form>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);

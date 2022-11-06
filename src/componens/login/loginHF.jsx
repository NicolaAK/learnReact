import React from "react";
import { useForm } from "react-hook-form";

const Login = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    Login
                </div>
                <input {...register("login", { required: true, })} />
            </div>
            <div>
                <div>
                    Password
                </div>
                <input {...register("password", { required: true, })} />
            </div>
            <div>
                <input type="checkbox"  {...register('rememberMe', {})} /> remember me
            </div>
            <input type="submit" />
        </form>
    );
}

export default Login;

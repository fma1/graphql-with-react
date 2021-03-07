import React, { useState } from 'react';
import AuthForm from "./AuthForm";
import mutation from '../mutations/Login';
import { useMutation } from "@apollo/client";

const LoginForm = () => {
    const [login] = useMutation(mutation);
    const [errors, setErrors] = useState([]);

    const onSubmit = (email, password) => {
        login({variables: {email, password}})
            .then(() => {})
            .catch(res =>
                setErrors(res.graphQLErrors.map(error => error.message)))
     }

    return (
        <div>
            <h3>Login</h3>
            <AuthForm onSubmit={onSubmit} errors={errors} />
        </div>
    );
};

export default LoginForm;
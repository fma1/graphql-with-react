import React, { useState } from 'react';
import AuthForm from "./AuthForm";
import mutation from '../mutations/Signup';
import { useMutation } from "@apollo/client";
import query from "../queries/CurrentUser";

const SignupForm = () => {
    const [signup] = useMutation(mutation);
    const [errors, setErrors] = useState([]);

    const onSubmit = (email, password) => {
        signup({
            variables: {email, password},
            refetchQueries: [{query}],
            awaitRefetchQueries: true
        })
            .then(() => {})
            .catch(res =>
                setErrors(res.graphQLErrors.map(error => error.message)))
     }

    return (
        <div>
            <h3>Signup</h3>
            <AuthForm onSubmit={onSubmit} errors={errors} />
        </div>
    );
};

export default SignupForm;
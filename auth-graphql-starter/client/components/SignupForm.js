import React, { useState } from 'react';
import AuthForm from "./AuthForm";
import mutation from '../mutations/Signup';
import { useMutation } from "@apollo/client";
import query from "../queries/CurrentUser";
import { useHistory } from "react-router";

const SignupForm = () => {
    const [signup] = useMutation(mutation);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmit = (email, password) => {
        signup({
            variables: {email, password},
            refetchQueries: [{ query }],
            awaitRefetchQueries: true
        })
            .then(() => history.push('/dashboard'))
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
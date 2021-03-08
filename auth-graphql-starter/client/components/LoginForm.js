import React, { useState } from 'react';
import AuthForm from "./AuthForm";
import mutation from '../mutations/Login';
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import query from "../queries/CurrentUser";

const LoginForm = () => {
    const [login] = useMutation(mutation);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmit = (email, password) => {
        /*
         * refetchQueries and awaitRefetchQueries is important here
         * b/c normally the promise will return as soon as the mutation
         * succeeds but this forces refetching of the CurrentQuery user
         * and waiting for it
         */
        login({
            variables: { email, password },
            refetchQueries: [{ query }],
            awaitRefetchQueries: true
        })
            .then(() => history.push('/dashboard'))
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
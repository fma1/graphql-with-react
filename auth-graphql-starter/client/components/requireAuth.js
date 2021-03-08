import React from 'react';
import { useQuery } from "@apollo/client";
import query from "../queries/CurrentUser";
import { Redirect } from "react-router";

const requireAuth = WrappedComponent => props => {
    const { loading, error, data } = useQuery(query);

    if (loading) {
        return <div>Loading..</div>
    } else if (error || !data.user) {
        return <Redirect to="/login" />
    } else {
        return <WrappedComponent {...props} />
    }
};

export default requireAuth;
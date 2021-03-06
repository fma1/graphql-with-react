import React from 'react';
import CurrentUser from '../queries/CurrentUser';
import { useQuery } from "@apollo/client";

const Header = () => {
    const { loading, error, data } = useQuery(CurrentUser);

    return (
        <div>
        </div>
    );
};

export default Header;
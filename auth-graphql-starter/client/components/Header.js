import React from 'react';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const RenderButtons = () => {
    // TODO: deal with error and data
    /*
    console.dir(data) output:
    Object
        user:
            email: "test@test.com"
            id: "6043dfd61ad4653808390bd5"
            __typename: "UserType"
            __proto__: Object
        __proto__: Object
     */
    const { loading, error, data } = useQuery(query);
    const [logout] = useMutation(mutation);

    const onLogoutClick = () => {
        logout({
            refetchQueries: [{query}],
            awaitRefetchQueries: true
        }).then(() => {});
    };

    if (loading) {
        return <li><a onClick={() => onLogoutClick()}>Logout</a></li>
    } else {
        return (
            <div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </div>
        );
    }
};

const Header = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to='/' className="brand-logo left">
                    Home
                </Link>
                <ul className="right">
                    <RenderButtons />
                </ul>
            </div>
        </nav>
    );
};

export default Header;
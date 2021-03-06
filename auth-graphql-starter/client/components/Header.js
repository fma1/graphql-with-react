import React from 'react';
import CurrentUser from '../queries/CurrentUser';
import { useQuery } from "@apollo/client";

const Header = () => {
    const { loading, data } = useQuery(CurrentUser);

    /*
    return (
        <nav>
            <div className='nav-wrapper'>
                loading ? <div /> :
                data ? { console.dir(data) } <div>Logout</div>
            </div>
        </nav>
    );
     */
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
    if (loading) return <div />;
    else {
        console.dir(data);
        return <div>Logout</div>;
    }
};

export default Header;
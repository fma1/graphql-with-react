import React from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
{
  songs {
    title
  }
}
`;

const SongList = () => {
    const {
        data,
        loading,
        error,
    } = useQuery(query);

    if (loading) return (<div>Loading...</div>);
    else if (error) return (<p>ERROR: {error.message}</p>);
    else if (!data) return (<p>Not found</p>);
    else {
        console.dir(data);
        return (
            data.songs.map((song, idx) => <li key={idx}>{song.title}</li>)
        );
    }
};

export default SongList;
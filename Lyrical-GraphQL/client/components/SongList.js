import React from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
{
  songs {
    id,
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
        return (<ul className="collection-item">
                    {data.songs.map(song => <li key={song.id} className="collection-item">{song.title}</li>)}
                </ul>);
    }
};

export default SongList;
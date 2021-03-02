import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';

const SongList = () => {
    const {
        data,
        loading,
        error,
    } = useQuery(query);

    if (loading) return (<div>Loading...</div>);
    else if (error) return (<p>ERROR: {error.message}</p>);
    else if (!data) return (<p>Not found</p>);
    else return <div>
                    <ul className='collection'>
                        {data.songs.map(song => <li key={song.id} className='collection-item'>{song.title}</li>)}
                    </ul>
                    <Link to='/songs/new' className='btn-floating btn-large red right'>
                        <i className='material-icons'>add</i>
                    </Link>
                </div>;
};

export default SongList;
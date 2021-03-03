import React from 'react';
import {gql, useMutation, useQuery} from '@apollo/client';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';

const SongList = () => {
    const mutation = gql`
    mutation DeleteSong($id: ID) {
      deleteSong (id: $id) {
        title
      }
    }
    `;

    const {
        data,
        loading,
        error,
    } = useQuery(query);
    const [deleteSong] = useMutation(mutation);

    const onSongDelete = (id) => {
        deleteSong({
            variables: { id },
            refetchQueries: [{ query }],
            awaitRefetchQueries: true
        })
    }

    if (loading) return (<div>Loading...</div>);
    else if (error) return (<p>ERROR: {error.message}</p>);
    else if (!data) return (<p>Not found</p>);
    else return <div>
                    <ul className='collection'>
                        {data.songs.map(({ id, title }) => <li key={id} className='collection-item'>
                            {title}
                            <i
                                className="material-icons"
                                onClick={() => onSongDelete(id)}
                            >
                                delete
                            </i>
                        </li>)}
                    </ul>
                    <Link to='/songs/new' className='btn-floating btn-large red right'>
                        <i className='material-icons'>add</i>
                    </Link>
                </div>;
};

export default SongList;
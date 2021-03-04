import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import query from '../queries/fetchSongs';

const SongCreate = () => {
    const mutation = gql`
    mutation AddSong($title: String) {
      addSong (title: $title) {
        title
      }
    }
    `;

    const [title, setTitle] = useState('');
    const [addSong] = useMutation(mutation);
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addSong({
            variables: { title },
            refetchQueries: [{ query }],
            awaitRefetchQueries: true
        }).then(() => history.push('/'));
    }

    return (<div>
                <Link to='/'>Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={handleSubmit}>
                    <label>Song Title:</label>
                    <input value={title} onChange={evt => setTitle(evt.target.value)}/>
                    <input type='submit' value='submit' />
                </form>
            </div>);
}

export default SongCreate;
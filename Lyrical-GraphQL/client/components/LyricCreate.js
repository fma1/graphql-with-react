import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const LyricCreate = ({ songId }) => {
    const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
      addLyricToSong (content: $content, songId: $songId) {
        id
        lyrics {
            content
        }
      }
    }
    `;

    const [content, setContent] = useState('');
    const [addLyricToSong] = useMutation(mutation);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addLyricToSong({
            variables: { content, songId }
        }).then(() => {
            console.log('hello');
            setContent('');
        })
    }

    return (<div>
                <form onSubmit={handleSubmit}>
                    <label>Add a Lyric</label>
                    <input
                        value={content}
                        onChange={evt => setContent(evt.target.value)}
                    />
                    <input type='submit' value='submit' />
                </form>
            </div>);
}

export default LyricCreate;
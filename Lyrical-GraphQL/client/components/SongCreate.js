import React from 'react';
import { gql} from '@apollo/client';

const query = gql`
{
  songs {
    id,
    title
  }
}
`;

const SongCreate = () =>
    <div>
        <h3>Create a New Song</h3>
        <form>

        </form>
    </div>;

export default SongCreate;
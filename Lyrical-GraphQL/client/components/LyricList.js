import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery, useMutation } from '@apollo/client';
import fetchSong from '../queries/fetchSong';

const mutation = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id,
            likes
        }
    }
`

const LyricList = ({ lyrics }) => {
    const params = useParams();
    const {
        data
    } = useQuery(fetchSong, {
        variables: { id: params.id }
    });
    const [likeSong] = useMutation(mutation);

    const onLike = (id, likes) => {
        likeSong({
            variables: {id},
            optimisticResponse: {
                __typeName: 'Mutation',
                likeLyric: {
                    id: id,
                    __typeName: 'LyricType',
                    // can change to + 12 to see optimistic updates are safe
                   likes: likes + 1
                }
            }
        }).then(() => {})
     }

    const contentDiv = !data ? <div />
                            : <ul className='collection'>
                                {lyrics.map(({id, content, likes}) =>
                                    <li
                                        key={id}
                                        className='collection-item'
                                    >
                                        {content}
                                        <div className='vote-box'>
                                            <i
                                                className='material-icons'
                                                onClick={() => onLike(id, likes)}
                                            >
                                                thumb_up
                                            </i>
                                            {likes}
                                        </div>
                                    </li>)}
                              </ul>

    return <div>
                {contentDiv}
            </div>
};

export default LyricList;
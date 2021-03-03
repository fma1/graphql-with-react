import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import fetchSong from '../queries/fetchSong';

const LyricList = ({ lyrics }) => {
    const params = useParams();
    const {
        data
    } = useQuery(fetchSong, {
        variables: { id: params.id }
    });

    const contentDiv = !data ? <div />
                            : <ul className='collection'>
                                {lyrics.map(({id, content}) =>
                                    <li
                                        key={id}
                                        className='collection-item'
                                    >
                                        {content}
                                    </li>)}
                              </ul>

    return <div>
                {contentDiv}
            </div>
};

export default LyricList;
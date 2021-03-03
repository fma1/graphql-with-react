import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import fetchSong from '../queries/fetchSong';
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = () => {
    const params = useParams();
    const {
        data,
        loading,
        error,
    } = useQuery(fetchSong, {
        variables: { id: params.id }
    });

    const contentDiv = (loading) ? <div>Loading...</div>
                            : error ? <p>ERROR: {error.message}</p>
                            : !data ? (<p>Not found</p>)
                            : <div>
                                <h3>{data.song.title}</h3>
                                <LyricList lyrics={data.song.lyrics} />
                                <LyricCreate songId={params.id} />
                              </div>;

    return <div>
                <Link to='/'>Back</Link>
                {contentDiv}
            </div>
};

export default SongDetail;
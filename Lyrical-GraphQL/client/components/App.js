import React from "react";
import { Route} from "react-router-dom";
import SongList from "./SongList";
import SongCreate from "./SongCreate";

export default function App() {
    return (
        <div>
            { /* Route components are rendered if the path prop matches the current URL */}
            <Route exact path="/"><SongList /></Route>
            <Route path="/song/new"><SongCreate /></Route>
        </div>
    );
}
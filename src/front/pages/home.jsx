import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1> HOME PAGE </h1>
            <Link to="/settings">SETTINGS</Link>
            <br></br>
            <Link to="/selection">SELECTION</Link>

            <br></br>

            <button onClick={async () => {
                const response = await window.versions.ping()
                console.log(response) // prints out 'pong'
            }
            }>TEST</button>
        </div>
    )
}

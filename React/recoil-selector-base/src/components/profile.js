import React from 'react';
import { useRecoilState } from 'recoil';
import { usernameState } from '../store';


export const Profile = () => {
    const [username, setUsername] = useRecoilState(usernameState);
    return (
        <div>
            <h2>Profile:</h2>
            <p>{username}</p>
            <input type='text' value={username} onChange={event => setUsername(event.target.value)} />
        </div>
    );
}
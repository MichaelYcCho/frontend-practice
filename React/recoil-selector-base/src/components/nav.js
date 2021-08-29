import React from 'react';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../store';


export const Nav = () => {
    const username = useRecoilValue(usernameState);

    return (
        <div className="nav">
            <p>{username}</p>
        </div>
    );
}
import React from 'react';
import { Profile } from './profile'
import { Count } from './counter'

export const Body = () => {
    return (
        <div className="body">
            <Profile />
            <Count />
        </div>
    );
}
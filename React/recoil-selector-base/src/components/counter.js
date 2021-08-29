import React from 'react';
import { selector, useRecoilValue } from 'recoil';
import { usernameState } from '../store';



const countState = selector({
    key: 'count',
    get: ({ get }) => {
        const username = get(usernameState);
        console.log('흠', username);

        return username.length;
    },
})


export const Count = () => {
    const count = useRecoilValue(countState);

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
}

import { atom, selector } from 'recoil';

export const getToken = () => {
    const access_token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null;
    const refresh_token = localStorage.getItem('refresh_token') ? localStorage.getItem('refresh_token') : null;
    const isLoggedIn = access_token ? true : false;

    const return_data = {
        access_token,
        refresh_token,
        isLoggedIn
    }

    return return_data
}

export const logOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    window.location.href = '/';
}

export const userState = atom({
    key: 'users',
    default: getToken()
});

/*
export const userLoginState = selector({
    key: 'countTitleState',
    get: ({ get }) => {
        return `현재 저장된 값은 ${get(userState)}`;
    },
    set: ({ set }, token) => { // 2번째 파라미터 에는 추가로 받을 인자
        console.log('setSelector Test')
        set(userState, token); // setter에 token 삽입
    },
});
*/
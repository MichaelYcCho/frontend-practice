import React from "react";
import axios from "axios";

import {LoginAxiosInstance} from 'api'
import { logOut } from 'recoil/userRecoil'
import UserProfilePresenter from "./UserProfilePresenter";


export const UserProfile = () => {
    const BASE_URL = 'http://127.0.0.1:8000/api/v1';
    const REFRESH_TOKEN = 'refresh_token';

    // 최초 에러에 대해서 refresh 토큰 발급 시도
    try {
        // 성공했다면 api.js의 interceptors를 통해 access토큰 재발급
        // refresh 토큰을 통한 access토큰 발급 실패시 로그아웃 처리및 로그인 페이지로
        LoginAxiosInstance.get('/accounts/profile')
        .then(response => {
            const {data} = response;
           console.log(data)          
        }).catch(() => {
            const refreshToken = localStorage.getItem(REFRESH_TOKEN);
            axios({
                method: 'post',
                url: `${BASE_URL}/accounts/token/refresh/`,
                data: { refresh: refreshToken },
            })
            .catch(() => {
                alert('로그인 세션이 만료되었습니다.')
                logOut()
                window.location.href = `/accounts/login`
            })
        });

    } catch (e) {
        console.error('API Connect Failed')
        console.log(e.response);
        console.log(e.response.data);
        console.log(e.response.message);
    }

    return (

        <UserProfilePresenter />


    )

}

export default UserProfile




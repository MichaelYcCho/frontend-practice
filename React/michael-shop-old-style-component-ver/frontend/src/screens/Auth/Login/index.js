
import React, { useState, useEffect } from "react";
import LoginPresenter from "./LoginPresenter";
import AxiosInstance from 'api'
import { useRecoilState } from "recoil";
import { userState } from "recoil/userRecoil";


export const Login = ({ location, history }) => {

    const [userInfo, setUserInfo] = useRecoilState(userState)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorType, setErrorType] = useState("")
    const [error, setError] = useState("");

    const redirect = location.search ? location.search.split('=')[1] : '/'


    useEffect(() => {
        if (userInfo.access_token) {
            window.location = redirect
        }
    }, [userInfo, redirect])

    const isFormValid = () => {
        if (email === "" || password === "") {
            alert("All fields are required.");
            return false;
        }

        return true;
    };
    const handleSubmit = async () => {
        if (!isFormValid()) {
            return;
        }
        const formData = { email, password }
        try {
            const { status, data } = await AxiosInstance.post(
                '/accounts/login', formData);
            if (status === 200) {
                const { access, refresh } = data;
                setUserInfo({ 'access_token': access, 'refresh_token': refresh, 'isLoggedIn': true });
                localStorage.setItem('access_token', access);
                localStorage.setItem('refresh_token', refresh);
            }
        } catch (e) {
            const status_code = e.response.status;
            if (status_code === 401) {
                setErrorType('invalid')
                setError('유효하지않은 이메일 또는 패스워드입니다')
            } else {
                alert('API Connect Failed')
            }
        } finally {
            //setLoading(false);
        }

    };

    return (
        <LoginPresenter
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            setError={setError}
            errorType={errorType}
            setErrorType={setErrorType}
            handleSubmit={handleSubmit}
        />

    )
}

export default Login
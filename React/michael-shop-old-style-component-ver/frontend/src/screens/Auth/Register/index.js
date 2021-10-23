
import React, { useState } from "react";
import RegisterPresenter from './RegisterPresenter'
import AxiosInstance from 'api'

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [toggleAuthInput, setToggleAuthInput] = useState(false)
    const [errorType, setErrorType] = useState("")
    const [error, setError] = useState("");

    const onClick = () => {
        alert('아직 개발되지 않은 기능입니다')
        //setToggleAuthInput(true) //!toggleAuthInput
    }

    const isFormValid = () => {
        if (
            email === "" ||
            password === "" ||
            confirmPassword === "" ||
            firstName === "" ||
            lastName === "" ||
            phoneNumber === ""
        ) {
            setErrorType('blank')
            setError("All fields are required")
            return false;
        }
        return true;
    }

    const handleSubmit = async () => {
        if (!isFormValid()) {
            return;
        }
        //setLoading(true);
        try {
            const { status, data } = await AxiosInstance.post(
                "/accounts/register", {
                email,
                password,
                confirm_password: confirmPassword,
                first_name: firstName,
                last_name: lastName,
                phone: phoneNumber,

            });
            if (status === 201) {
                alert("Account created. Sign in, please.");
                //location Login
                window.location.href = "/accounts/login"

                //navigate("SignIn", { email, password });
            } else if (status === 202) {
                if (data.email) {
                    setErrorType("email")
                    setError(data.email[0])
                }
            }
        } catch (e) {
            const status_code = e.response.status;
            if (status_code === 400) {
                if (e.response.data.email) {
                    setErrorType('email')
                    setError(e.response.data.email)
                }
                if (e.response.data.password) {
                    setErrorType('password')
                    setError(e.response.data.password)
                }
            } else {
                alert('API Connect Failed')
            }
            //alert("The email is taken");
        } finally {
            //setLoading(false);
        }
    };

    return (
        <RegisterPresenter
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            toggleAuthInput={toggleAuthInput}
            onClick={onClick}
            handleSubmit={handleSubmit}
            error={error}
            errorType={errorType}
        />
    )
}

export default Register
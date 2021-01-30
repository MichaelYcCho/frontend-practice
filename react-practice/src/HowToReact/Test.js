import React, { useState, useEffect } from 'react';

const Test = () => {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log("useEffect 실행")
        console.log(`Effect 실행 후 가진 name값은 ${name}`)
        return () => {
            console.log("정리를 합시다 ")
            console.error(`정리하기전에 가진 name값은 ${name}`)
        }
    })

    const onChangeName = event => {
        setName(event.target.value);
    }

    const onChangeNickname = event => {
        setNickname(event.target.value);
    }

    return (
        <>
            <p>
                <input value={name} onChange={onChangeName} placeholder="name" />
                현재 이름: {name}
            </p>
            <p>
                <input value={nickname} onChange={onChangeNickname} placeholder="nickname" />
                현재 닉네임: {nickname}
            </p>
        </>
    )
}

export default Test;
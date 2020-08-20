import React, { useState, useEffect, useCallback } from 'react';

class App1 extends React.Component {
    state = {
        value1: 0,
        value2: 0,
    };

    onClick = () => {
        this.setState({ value1: 10 })
    }

    render() {
        const { value2 } = this.state
        return (
            <div>
                App1
                <hr />
                {this.state.value1}
                <hr />
                {value2}
                <button onClick={this.onClick}></button>
            </div>
        );
    }
}

function PostDeatailComponent({ post }) {
    const { title, content } = post;
    return (
        <div>
            <h1>{title}</h1>
            {content}
        </div>
    )
}

function PostDetail({ postId }) {
    const [post, setPost] = useState();

    useEffect(() => {
        setPost({ title: '포스팅제목', content: `포스팅 내용 ... : ${postId}` });
        return () => {
            //unmount시에 호출
        };

    }, [postId]);

    return <div>
        <h1>Post # {postId}</h1>
        {!post && "로딩중..."}
        {post && <PostDeatailComponent post={post} />}
    </div>
}

function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(interval)
        };
    }, []);
    return <div>현재 시간은 {date.toISOString().slice(11, 19)} 입니다.</div>

}



function App2() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value, setValue] = useState({ value1: 255, value2: 254 });
    const [postId, setPostId] = useState(1);

    useEffect(() => { }); //render시에 호출
    useEffect(() => {
        console.log('mount');
    }, []); //mount 시에만 호출 (즉 초기화할때)

    useEffect(() => {
        console.log('changeValue : ', value)
    }, [value]); //value가 변경될시에 호출

    const onClick = useCallback(() => {
        // setValue({ ...value, value1: 10 });
        setValue((prevState) => ({ ...prevState, value1: 10 }));
    }, []);


    return (
        <div>
            <Clock />
            App2
            <hr />
            {value1}
            <hr />
            {JSON.stringify(value)}
            <button onClick={onClick}>click</button>
            <hr />
            <button onClick={() => setPostId(100)}>100번글보기</button>
            <PostDetail postId={postId} />
            <br />
            {value.value2}
        </div>
    );
}

export default App2;
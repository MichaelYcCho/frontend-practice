import React, { useState } from 'react';

const Test = () => {
    const [contents, setContents] = useState([
        { id: 1, text: '1번 게시물' },
        { id: 2, text: '2번 게시물' },
        { id: 3, text: '3번 게시물' }
    ]);

    const [text, setText] = useState('');
    const [nextId, setNextId] = useState(contents.length + 1);


    const onChange = e => setText(e.target.value);
    const onClick = () => {
        const newContent = contents.concat({
            id: nextId,
            text
        });
        setNextId(nextId + 1)
        setContents(newContent);
        setText('');
    }

    const contentList = contents.map(content => <li key={content.id}>{content.text}</li>);

    return (
        <>
            <input value={text} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <ul>{contentList}</ul>
        </>
    )
}

export default Test;
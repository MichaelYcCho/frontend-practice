import React, {useState} from 'react';

const Test = () => {
    const [contents, setContents] = useState([
        { id: 1, text: '1번 게시물'},
        { id: 2, text: '2번 게시물'},
        { id: 3, text: '3번 게시물'}
    ]);
    
    const [text, setText] = useState('');
    const [nextId, setNextId] = useState(4); 
    
    const contentList = contents.map(content => <li key={content.id}>{content.text}</li>);
    return <ul>{contentList}</ul>
}




export default Test;
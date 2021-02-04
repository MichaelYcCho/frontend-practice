import React, { useState, useEffect } from 'react';
import './App.css';

const useTitle = initalTitle => {
    const [title, setTitle] = useState(initalTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title"); // <title> 추출 
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle
}

const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000)
    return (
        <div className="App">

        </div>
    );
}

export default App;

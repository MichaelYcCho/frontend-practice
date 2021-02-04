import React, { useState } from 'react';
import './App.css';

const content = [
    {
        tab: "Section 1",
        content: "This is Section 1"
    },
    {
        tab: "Section 2",
        content: "This is Section 2"
    }
];

const useTabs = (initialTab, allTabs) => {
    const [currnetIndex, setCurrentIndex] = useState(initialTab);

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        currentItem: allTabs[currnetIndex],
        changeItem: setCurrentIndex
    };
}


const App = () => {

    const { currentItem, changeItem } = useTabs(0, content);
    //useTabs 있는 필드명과 동일한 놈은 담아진다 전역변수이름으로 사용할수있다. 순서 상관없다

    return (
        <div className="App">
            {content.map((section, index) => (
                <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div> {currentItem.content}</div>
        </div>
    );
}

export default App;

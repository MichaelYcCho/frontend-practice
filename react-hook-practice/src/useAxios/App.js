import React from 'react';

import useAxios from './useAxios';

const App = () => {
    const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
    console.log(loading, data, error);
    console.log(JSON.stringify.data);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1>Hello</h1>
            <button onClick={refetch}>refetch</button>
        </div>
    );
}

export default App;

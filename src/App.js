import React from "react";

//props.fav 또는 {fav}
function Food({ fav }) {
  return <h3> I love {fav} </h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>

      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="chichken" />
      <Food fav="fish" />
    </div>
  );
  // food component에 fav라는 이름의 property를 kimchi라는 value로 준것이다.
}

export default App;

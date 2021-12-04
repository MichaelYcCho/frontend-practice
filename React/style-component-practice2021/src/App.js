import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-raduis: 15px;
`;

const Link = styled(Btn)`
`;

function App() {
  return (
    <Father>
      <Btn >Log In</Btn>
      <Btn as="a" > Log in</Btn>
    </Father>
  );
}

export default App;
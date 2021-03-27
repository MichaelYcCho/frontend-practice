import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

function App() {
  return (
    <Container>
      <span role="img" aria-label="clock">
        ⏰
    </span>
    </Container>
  )
}

export default App;



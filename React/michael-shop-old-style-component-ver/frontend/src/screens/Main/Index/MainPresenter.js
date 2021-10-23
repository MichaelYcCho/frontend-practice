import styled from "styled-components";
import MainBackground from 'assets/videos/MainBackground.mp4'

import Products from 'screens/Main/Products';
import { productData, productDataTwo } from 'screens/Main/Products/data';
import Feature from 'screens/Feature';
import Footer from 'screens/Footer';


export const MainContainer = styled.div`

  height: 100vh;
  background-position: center;
  background-size: cover;

  video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const MainContent = styled.div`
  height: calc(90vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const MainItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const MainH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 4rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  color: #fff;
`;

export const MainP = styled.p`
  font-size: clamp(2rem, 2.5vw, 2.5rem);
  margin-bottom: 2rem;
`;

export const MainBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

const MainPresenter = () =>{

return (
  <MainContainer>
      <MainContent>
          <MainItems>
              <video muted autoPlay loop>
                  <source src={MainBackground} type="video/mp4" />
              </video>
              <MainH1>Find Your Style</MainH1>
              <MainP>Attractive Ever</MainP>
              <MainBtn>Click</MainBtn>
          </MainItems>
      </MainContent>
        <Products heading='Choose your favorite' data={productData} />
      <Feature />
        <Products heading='Recommand for You' data={productDataTwo} />
      <Footer />
  </MainContainer>
)
}

export default MainPresenter;
import React from 'react'
import styled from "styled-components";

import SideFilter from './SideFilter';
import Product from "./Product";

const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SectionHeader = styled.h1`
  color: #fff;
  height: 10%;
  font-size: 2rem;
  padding : 40px 48px 30px 48px;
`;


export default function ProductPresenger({products}) {
    return (
      <>
    <SectionHeader>Header</SectionHeader>
    <SideFilter />
    <Container>
      {products.map(product => (
        <Product key={product.pk} product={product} />
      ))}
    </Container>
            
        </>
    )
}


import React from 'react';
import ProductsPresenter from './ProductsPresenter';

const Products = ({ heading, data }) => {
    return (
        <ProductsPresenter heading={heading} data={data} />
    );
};

export default Products;
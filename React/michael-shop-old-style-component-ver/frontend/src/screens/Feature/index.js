import React from 'react';
import { FeatureContainer, FeatureButton } from 'screens/Feature/FeatureContainer';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Find Your Style</h1>
            <p>Make Your Own Fashion</p>
            <FeatureButton>Buying Now</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;
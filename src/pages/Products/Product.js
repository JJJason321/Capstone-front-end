import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data';
import { InfoSection } from '../../components/';

const Product = () => {
    return (
        <>
          
          <InfoSection {... homeObjTwo} />
          <InfoSection {... homeObjThree} />
          <InfoSection {... homeObjFour} />  
        </>
    )
}

export default Product

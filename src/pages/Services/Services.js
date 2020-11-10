import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data';
import { InfoSection } from '../../components/';

const Service = () => {
    return (
        <>
          <h1>service</h1>
          <InfoSection {... homeObjFour} />  
        </>
    )
}

export default Service

import React, { useState, useEffect } from "react";
// import { Route } from 'react-router.dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  console.log(colorList, 'BubblePage.js, line 11, ColorList retrieved?')
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(response => {
        setColorList(response.data)
      })
      .catch(error =>
        console.log(error.data,
          'BubblePage.js, line 21, error fetching ColorListist'))
  }, []); //dependency array!

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

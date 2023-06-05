import React from 'react';

import './App.css';
import { Button } from '@mui/material';
import ImageList from './ImageList/ImageList';
import Accordion from './Accordion/Accordion';
import Card from './Card/Card';


function App() {
  return (
   <div>
<h1> Welcome </h1>
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<br></br>
<ImageList />
<br></br>
<Accordion />
<br></br>
<Card />


   </div>
  );
}

export default App;

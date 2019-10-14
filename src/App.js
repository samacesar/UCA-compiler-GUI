import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import DndTest from './Dnd/DndTest';
import Toolbox from './Components/Toolbox';
import SiFunc from './Components/OperatorSi';
import ParaFunc from './Components/OperatorPara';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function App() {

  return (
    <div className="App">

        <Navigation/>
        <Toolbox />
        <SiFunc></SiFunc>
        <DndTest />

    </div>
        

  );
}

export default App;

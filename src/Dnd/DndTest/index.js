import React from 'react';
import styled from 'styled-components';
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import ValSet from '../../Components/ValuesSetter';
import SiFunc from '../../Components/OperatorSi';
import ParaFunc from '../../Components/OperatorPara';
import {selectedOperator} from '../../Components/Toolbox';

const Wrapper = styled.div `
    width: 80%;
    margin-left: 15%;
    margin-right: auto;
    padding: 32px;
    display: flex;
`;

const Item = styled.div `
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 3px;
`;
const droppableStyleGen = {
    backgroundColor: '#555',
    width: '150px',
    height: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '25px',
};
const droppableStyle = {
    backgroundColor: '#555',
    width: '200px',
    height: '200px',
    marginLeft: '25px',
    marginTop: '25px',
};


export default class DndText extends React.Component {
    render(){
        return <div><Wrapper>
        <Droppable id="block generator" style={droppableStyleGen}>
            <Draggable id="item1" style={{ margin: '8px' }}><Item>Bloque creado</Item></Draggable>
        </Droppable>
        </Wrapper>
        <Wrapper>
        <Droppable id="dr2" style={droppableStyle}></Droppable>
        <Droppable id="dr3" style={droppableStyle}></Droppable>
        <Droppable id="dr4" style={droppableStyle}></Droppable>
        <Droppable id="dr5" style={droppableStyle}></Droppable>
        <Droppable id="dr6" style={droppableStyle}></Droppable>
        <Droppable id="dr1" style={droppableStyle}></Droppable>

          </Wrapper>
          </div>
    }
}
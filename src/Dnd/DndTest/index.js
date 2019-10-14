import React from 'react';
import styled from 'styled-components';
import Draggable from '../Draggable';
import Droppable from '../Droppable';
import ValSet from '../../Components/ValuesSetter';
import SiFunc from '../../Components/OperatorSi';
import ParaFunc from '../../Components/OperatorPara';


import {selectedOperator} from '../../Components/Toolbox';

const Wrapper = styled.div `
    width: 100%;
    margin-left: 15%;
    padding: 32px;
    display: flex;
`;

const Item = styled.div `
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 3px;
`;

const droppableStyle = {
    backgroundColor: '#555',
    width: '200px',
    height: '200px',
    marginLeft: '25px',
    marginTop: '25px',
};


export default class DndText extends React.Component {
    render(){
        return <Wrapper>
            <Droppable id="dr1" style={droppableStyle}>
                <Draggable id="item1" style={{ margin: '8px' }}><Item>Procedimiento</Item></Draggable>
            </Droppable>
              </Wrapper>
    }
}
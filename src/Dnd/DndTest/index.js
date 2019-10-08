import React from 'react';
import styled from 'styled-components';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

const Wrapper = styled.div `
    width: 100%;
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
    marginLeft: '25%',
    marginTop: '5%',
};

const droppableStyle2 = {
    backgroundColor: '#555',
    width: '200px',
    height: '200px',
    marginLeft: '5%',
    marginTop: '5%',
};

export default class DndText extends React.Component {
    render(){
        return <Wrapper>
            <Droppable id="dr1" style={droppableStyle}>
                <Draggable id="item1" style={{ margin: '8px' }}><Item>Procedimiento</Item></Draggable>
            </Droppable>
            <Droppable id="dr2" style={droppableStyle2}>
            </Droppable>
              </Wrapper>
    }
}

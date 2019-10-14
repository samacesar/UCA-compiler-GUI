import React from 'react';
import { relative } from 'path';
import { selectedOperator, operatorPile } from './Toolbox';
let varSet = "";
const divi = {
  position: 'relative',
};

class divigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onValClick = this.onValClick.bind(this);
    this.myRef = React.createRef();
    this.myValName = React.createRef();
    this.myValue = React.createRef();
  }
  setVariable = () => {
    varSet = selectedOperator + " "+ this.myValName.current.value+ " := "+this.myValue.current.value + " ; "+"\r\n";
    operatorPile.push(varSet);
    alert(varSet);
  }

    render() {
        return <div 
        style={divi}>
          <div>
        Nombre de su variable { selectedOperator } &nbsp;
        <input ref={this.myValName} type="text" name="varname" ></input> &nbsp;
        Valor de su variable { selectedOperator } &nbsp;
        <input ref={this.myValue} type="text" name="varvalue" ></input> &nbsp;
        <button ref={this.myRef} value="123" type="button" class="btn btn-success" onClick={this.setVariable}>ACEPTAR</button>
       </div>
       </div>;
    }
}

export default divigation;
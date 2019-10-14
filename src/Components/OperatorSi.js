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
    this.myRef = React.createRef();
    this.var1 = React.createRef();
    this.var2 = React.createRef();
    this.optSelected = React.createRef();
    this.retVar = React.createRef();
  }
  setVariable = () => {
    varSet = selectedOperator + " ( "+ this.var1.current.value+ " "+ this.optSelected.current.value+" "+this.var2.current.value+" ) { ";
    operatorPile.push(varSet);
    /*varSet =  array de acciones por hacer*/
    varSet = "RET "+this.retVar.current.value+" ; }"
    operatorPile.push(varSet);

    alert(varSet);
  }

    render() {
        return <div 
        style={divi}>
          <div>
        SI &nbsp;
        <input ref={this.var1} type="text" name="var1" ></input> &nbsp;
        <select ref={this.optSelected}> &nbsp;
        <option value=" > "> mayor que </option>
          <option value=" < "> menor que </option>
          <option value=" = "> igual que </option>
        </select> &nbsp;
        <input ref={this.var2} type="text" name="var2" ></input>
        <button ref={this.add} value="123" type="button" class="btn btn-success" onClick={this.setVariable}>NUEVA SENTENCIA</button>
       </div>
       Retorna &nbsp; <input ref={this.retVar} type="text" name="returnVar" ></input> &nbsp;
       <button ref={this.myRef} value="123" type="button" class="btn btn-success" onClick={this.setVariable}>ACEPTAR</button>
       </div>;
    }
}

export default divigation;
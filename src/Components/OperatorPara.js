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
    this.initVar = React.createRef();
    this.endVar = React.createRef();
    this.incrementVar = React.createRef();
    this.retVar = React.createRef();
  }
  setVariable = () => {
    varSet = selectedOperator + " ( "+ this.initVar.current.value+ " , "+ this.endVar.current.value+" , "+this.incrementVar.current.value+" ) { ";
    operatorPile.push(varSet);
    /*varSet =  array de acciones por hacer*/
    //operatorPile.push(varSet);
    varSet = "RET "+this.retVar.current.value+" ; }"
    operatorPile.push(varSet);

    alert(varSet);
  }

    render() {
        return <div 
        style={divi}>
          <div>
        PARA &nbsp;
        <input ref={this.initVar} type="text" name="var1" ></input> &nbsp; Llegar a: &nbsp;
        <input ref={this.endVar} type="text" name="var2" ></input> &nbsp; Incrementando en: &nbsp;
        <input ref={this.incrementVar} type="text" name="var2" ></input> &nbsp;
        <button ref={this.add} value="123" type="button" class="btn btn-success" onClick={this.setVariable}>NUEVA SENTENCIA</button>
       </div>
       Retorna &nbsp; <input ref={this.retVar} type="text" name="returnVar" ></input> &nbsp;
       <button ref={this.myRef} value="123" type="button" class="btn btn-success" onClick={this.setVariable}>ACEPTAR</button>
       </div>;
    }
}

export default divigation;
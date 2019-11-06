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
      showPara: false,
    };
    this.onParaClick = this.onParaClick.bind(this);
    this.myRef = React.createRef();
    this.initVar = React.createRef();
    this.endVar = React.createRef();
    this.incrementVar = React.createRef();
    this.retVar = React.createRef();
  }
  onParaClick() {
    this.setState({
      showPara: true,
    })
  }
  setVariable = () => {
    varSet = "\r\n"+selectedOperator + "("+ this.initVar.current.value+ ","+ this.endVar.current.value+","+this.incrementVar.current.value+"){";
    operatorPile.push(varSet);
    /*varSet =  array de acciones por hacer*/
    //operatorPile.push(varSet);
    varSet ="\n" +"ESCR "+this.retVar.current.value+";}"+"\n";
    operatorPile.push(varSet);
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
       Escribir &nbsp; <input ref={this.retVar} type="text" name="returnVar" ></input> &nbsp;
       <button ref={this.myRef} value="123" type="button" class="btn btn-success" onClick={this.setVariable}>ACEPTAR</button>
       </div>;
    }
}

export default divigation;
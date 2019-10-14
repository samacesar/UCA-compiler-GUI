import React from 'react';
import { relative } from 'path';
import SiFunc from './OperatorSi';
import { selectedOperator, operatorPile } from './Toolbox';
let varSet = "";

const divi = {
  position: 'relative',
  backgroundColor: 'Gainsboro '
};

class divigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onSiClick = this.onSiClick.bind(this);
    this.myRef = React.createRef();
    this.var1 = React.createRef();
    this.var2 = React.createRef();
    this.optSelected = React.createRef();
    this.retVar = React.createRef();
  }
  onSiClick() {
    this.setState({
      showComponent: true,
    })
  }
  setVariable = () => {
    varSet = "\r\n"+selectedOperator + " ( "+ this.var1.current.value+ " "+ this.optSelected.current.value+" "+this.var2.current.value+" ) {"+"\r\n";
    operatorPile.push(varSet);
    alert(operatorPile[0]);
    varSet="";
    varSet = "RET "+this.retVar.current.value+" ; }"+"\r\n";
    operatorPile.push(varSet);
  }

    render() {
        return <div 
        style={divi}>
          
        SI &nbsp;
        <input ref={this.var1} type="text" name="var1" ></input> &nbsp;
        <select ref={this.optSelected}> &nbsp;
        <option value=" > "> mayor que </option>
          <option value=" < "> menor que </option>
          <option value=" = "> igual que </option>
        </select> &nbsp;
        <input ref={this.var2} type="text" name="var2" ></input> 
        <div><br></br><button ref={this.add} value="123" type="button" class="btn btn-success" onClick={this.setVariable}> AÑADIR SENTENCIA</button></div><br></br>
      <div>Retorna &nbsp; <input ref={this.retVar} type="text" name="returnVar" ></input> &nbsp;
       <button ref={this.myRef} value="123" type="button" class="btn btn-success" onClick={this.setVariable}>ACEPTAR</button> </div>
       {this.state.showComponent ?
        <SiFunc /> :
        null
        }
       </div>;
       
     }
    }


export default divigation;
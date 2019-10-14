import React from 'react';
import '../App.css'
import ValSet from './ValuesSetter';
import SiFunc from './OperatorSi';
import ParaFunc from './OperatorPara';

export let operatorPile = [];
export let arrayPosition = 0;
export let selectedOperator = "none";

operatorPile[0]="INICIO";

class Toolbox extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
          showComponent: false,
        };
        
        this.constOperator = React.createRef();
        this.entOperator = React.createRef();
        this.flotOperator = React.createRef();
        this.cadOperator = React.createRef();
        this.boolOperator = React.createRef();
        this.paraFuncion = React.createRef();
        this.siFuncion = React.createRef();
      }

 
      constPush = () => {
        selectedOperator = this.constOperator.current.value;
        arrayPosition+=1;
      }
      entPush = () => {
        selectedOperator = this.entOperator.current.value;
        arrayPosition+=1;
        alert(operatorPile[0]+operatorPile[1]+operatorPile[2])
      }
      flotPush = () => {
        selectedOperator = this.flotOperator.current.value;
        arrayPosition+=1;
        alert(operatorPile[0]+operatorPile[1]+operatorPile[2])
      }
      cadPush = () => {
        selectedOperator = this.cadOperator.current.value;
        arrayPosition+=1;
        alert(operatorPile[0]+operatorPile[1]+operatorPile[2])
      }
      boolPush = () => {
        selectedOperator = this.boolOperator.current.value;
        arrayPosition+=1;
        alert(operatorPile[0]+operatorPile[1]+operatorPile[2])
      }
      paraPush = () => {
        selectedOperator = this.paraFuncion.current.value;
        arrayPosition+=1;
        alert(operatorPile[0]+operatorPile[1]+operatorPile[2])
      }
      siPush = () => {
        selectedOperator = this.siFuncion.current.value;
        arrayPosition+=1;
        this.setState({
          showComponent: true,
        })
      }

    render() {
        return <div>
        {this.state.showComponent ?
          <SiFunc /> :
          null
          }
        <div class="w3-sidebar w3-light-grey w3-bar-block">
            <br></br>
            <p className="h3">Bloques</p>
            <div>        <br></br>
            <button ref={this.constOperator} value="CONST"  onClick={this.constPush} type="button" className="btn btn-info btn-lg">CONST</button>
            </div>
            <div>        <br></br>
            <button ref={this.entOperator} onClick={this.entPush} type="button" value="ENT" className="btn btn-info btn-lg">ENT</button>
            </div>
            <div>        <br></br>
            <button ref={this.flotOperator} onClick={this.flotPush} type="button" value="FLOT" className="btn btn-info btn-lg">FLOT</button>
            </div>
            <div>        <br></br>
            <button ref={this.cadOperator} value="CAD" onClick={this.cadPush} type="button" className="btn btn-info btn-lg">CAD</button>
            </div>
            <div>        <br></br>
            <button ref={this.boolOperator} value="BOOL" onClick={this.boolPush} type="button" className="btn btn-info btn-lg">BOOL</button>
            </div>
            <br></br>
            <div>    
            <button ref={this.paraFuncion} value="PARA" onClick={this.paraPush}type="button" className="btn btn-warning btn-lg">PARA</button>
            </div>
            <div>        
            <br></br>
            <div>    
            <button  ref={this.siFuncion} value="SI" type="button" onClick={this.siPush} className="btn btn-warning btn-lg">SI</button>
            </div>
            <div>        
             <br></br>
             <button type="button" className="btn btn-primary btn-lg">HACER</button>
            </div>         
            <br></br>
            <button type="button" className="btn btn-primary btn-lg">LECT</button>
            </div>
            <div>       
            <br></br>
            <button type="button" className="btn btn-primary btn-lg">ESCR</button>
            </div>
        </div>    
      </div>;
      
    }
}
export default Toolbox;
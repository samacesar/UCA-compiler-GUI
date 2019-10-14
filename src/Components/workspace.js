import React from 'react';
import styled from 'styled-components';
import ValSet from './ValuesSetter';

class Workspace extends React.Component {
    render () {
        return   <div>
            {this.state.showComponent ?
           <ValSet /> :
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

export default Workspace;
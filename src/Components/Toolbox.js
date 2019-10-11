import React from 'react';
import '../App.css'
export let operatorPile = [];


class Toolbox extends React.Component {
    
    constructor(props) {
        super(props);
        this.operator = React.createRef();
      }

      downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([this.myRef.current.value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        alert(this.myRef.current.value);
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }
 
      pushToPile = () => {
        operatorPile.push(this.operator);
        alert(operatorPile[0]+operatorPile[1]+operatorPile[2])
      }

    render() {
        return <div class="w3-sidebar w3-light-grey w3-bar-block">
            <br></br>
            <p className="h3">Bloques</p>
            <div>        <br></br>
            <button ref={this.operator} value="CONST \r\n JEJE"  onClick={this.pushToPile} type="button" className="btn btn-info btn-lg">CONST</button>
            </div>
            <div>        <br></br>
            <button value={this.operator} onClick={this.pushToPile} type="button" value="ENT" className="btn btn-info btn-lg">ENT</button>
            </div>
            <div>        <br></br>
            <button value={this.operator} onClick={this.pushToPile} type="button" value="FLOT" className="btn btn-info btn-lg">FLOT</button>
            </div>
            <div>        <br></br>
            <button type="button" className="btn btn-info btn-lg">CAR</button>
            </div>
            <div>        <br></br>
            <button type="button" className="btn btn-info btn-lg">BOOL</button>
            </div>
            <div>        <br></br>
            <button type="button" className="btn btn-primary btn-lg">HACER</button>
            </div>
            <div>        <br></br>
            <button type="button" className="btn btn-warning btn-lg">PARA</button>
            </div>
            <div>        
            <br></br>
            <button type="button" className="btn btn-warning btn-lg">SI</button>
            </div>
            <div>                
            <br></br>
            <button type="button" className="btn btn-primary btn-lg">LECT</button>
            </div>
            <div>       
            <br></br>
            <button type="button" className="btn btn-primary btn-lg">ESCR</button>
            </div>
      </div>;
    }
}
export default Toolbox;
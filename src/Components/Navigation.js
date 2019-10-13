import React from 'react';
import { relative } from 'path';
import {Toolbox, operatorPile} from './Toolbox';

const navi = {
  backgroundColor: 'black',
  position: 'relative',
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  downloadTxtFile = () => {
    const element = document.createElement("a");
    let codigo = operatorPile[0]+"\r\n"+operatorPile[1]+"\r\n"+operatorPile[2]
    const file = new Blob([codigo], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Auriga.txt";
    alert(this.myRef.current.value);
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

    render() {
        return <div 
        style={navi}>
          <nav>
        <a href="" className="text-white">
          AURIGA compiler
        </a>
        <button ref={this.myRef} value="123" type="button" class="btn btn-success" onClick={this.downloadTxtFile}>COMPILAR</button>
       </nav>
       </div>;
    }
}

export default Navigation;
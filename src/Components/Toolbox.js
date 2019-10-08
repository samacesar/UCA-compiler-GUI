import React from 'react';
import '../App.css'

class Toolbox extends React.Component {
    render() {
        return <div class="w3-sidebar w3-light-grey w3-bar-block">
            <br></br>
            <br></br>
            <p className="h3">Bloques</p>
            <div>        <br></br>
            <button type="button" className="btn btn-primary btn-lg">Procedimiento</button>
            </div>
            <div>        
            <br></br>
            <button type="button" className="btn btn-warning btn-lg">Entrada / Salida</button>
            </div>
            <div>       
            <br></br>
            <button type="button" className="btn btn-warning btn-lg">Decision</button>
            </div>
      </div>;
    }
}

export default Toolbox;
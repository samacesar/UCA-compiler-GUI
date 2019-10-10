import React from 'react';
import '../App.css'

class Toolbox extends React.Component {
    render() {
        return <div class="w3-sidebar w3-light-grey w3-bar-block">
            <br></br>
            <br></br>
            <p className="h3">Bloques</p>
            <div>        <br></br>
            <button type="button" className="btn btn-info btn-lg">CONST</button>
            </div>
            <div>        <br></br>
            <button type="button" className="btn btn-info btn-lg">ENT</button>
            </div>
            <div>        <br></br>
            <button type="button" className="btn btn-info btn-lg">FLOT</button>
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
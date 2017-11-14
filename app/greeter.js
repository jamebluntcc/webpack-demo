// Greeter.js
import React, {Component} from 'react';
import config from './config.json';

class Greeter extends Component{
    render(){
        return(
            <div>
            {config.greeter}
            </div>
        );
    }
}

export default Greeter

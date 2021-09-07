
import React , { Component } from "react";

class App extends Component {
    state = {
        name : "Pragya",
        roll : "102"
    };
    render(){
        return  <div>
            <h1>hello, {this.state.name}</h1>
            <h2>roll no.- {this.state.roll}</h2>
        </div>;

    }
    
}

export default App;
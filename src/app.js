
import React , { Component } from "react";

class App extends Component {
    render() {
        return <h1>hello {this.props.name} and roll no.is {this.props.roll}</h1>;
    }
}

export default App;
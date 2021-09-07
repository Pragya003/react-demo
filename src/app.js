
import React , { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {hello: "JavaTpoint"};  
        this.changeState = this.changeState.bind(this)
        console.log("APP-Constructor Called");
        console.log(props);

        
    }
    
    render(){
        console.log("APP- Rendered");
        return (  
            <div>  
                <h1>ReactJS component's Lifecycle</h1>  
                <h3>Hello {this.state.hello}</h3>  
                <button onClick = {this.changeState}>Click Here!</button>          
            </div>  
         );  

    }

    componentWillMount() {  
        console.log('Component Will MOUNT!')  
     }  
     componentDidMount() {  
        console.log('Component Did MOUNT!')  
     }
     changeState(){  
        this.setState({hello:"All!!- Its a great reactjs tutorial."});  
     }  
    
}

export default App;
import React from "react";


class Greet extends React.Component{
    
    render(){
        const {name,age}=this.props;
        return(
            <div>
                <h1>Greet For {name}</h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}


export default Greet
import React from "react";

function Welcome(props){
    const {name,age}=props;
    return(
        <div>
            <h1>Welcome {name} --{age}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Welcome
import React,{useState} from "react";
import CounterComponent from "./Counter";

function Foo(props){
  const [initialValue,setinitialValues]=useState(5);
  const handleIncrement=()=>{
    setinitialValues(initialValue+1);
  };
  return(
    <h3>
      this is {props.componentName}  <br /> <br />
      Initial Value: {initialValue} <br /> <br />
      <button onClick={()=> handleIncrement()}> Increment</button> &nbsp;
        <button >Decrement</button> &nbsp;
        <button >Reset</button> &nbsp; <br /> <br />
        <CounterComponent componentName="classComponent"/>
    </h3>
  );
}

export default Foo;

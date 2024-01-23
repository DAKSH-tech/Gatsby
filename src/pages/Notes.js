import React,{useEffect} from "react";
import Header from '../Component/Header';

const Notes = () => {
    const data = "Notes/";
    useEffect(()=>{
        console.log = console.warn = console.error = () => {};
    },[]);
    return (
        <>
        <Header data={data} />
        <img src="https://placekitten.com/800/600" alt="A kitten" className="w-20 h-20"/>
        <p>Hi this for everyone</p>
        </>
  );
};

export default Notes;

import React,{useRef,useEffect, useState} from 'react'
import VIDEO from "./Video.mp4"
const RefExamples = () => {
    const[play,setPlay]=useState(true);
    const eleRef=useRef();
    const videoref=useRef();
    console.log(videoref);
    useEffect(()=>{
        eleRef.current.style.color="teal";
        eleRef.current.innerText="React ref"
    });
    let playORpause=()=>{
        if(play == true){
            videoref.current.play();
            console.log(play);
            setPlay(false);
            
        }else{
            videoref.current.pause();
            console.log(play);
            setPlay(true);
            
        }
    }

  return (
    <div>
      <h1 ref={eleRef}>RefExamples</h1>
      <video src={VIDEO} ref={videoref} onClick={playORpause}></video>
    </div>
  )
}

export default RefExamples

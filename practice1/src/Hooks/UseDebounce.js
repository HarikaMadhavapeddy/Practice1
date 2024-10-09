import React, { useEffect, useState } from 'react'

export default function UseDebounce(input) {
    const [debounce, setDebounce] = useState("");
    useEffect(() => {
        console.log('useEffect',input.length);
        let timer;
        if(input.length>2){
            timer=setTimeout(()=>{
                setDebounce(input);
                console.log(`Request sent for ${input}`);
            },300);
        }
        return (timer)=>{
            clearTimeout(timer);
        }
        
        }, [input]);
  return debounce;
}

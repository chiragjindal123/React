import React, {useState} from 'react';

export default function Star({starcount=5}){

    const [starvalue, setStarvalue] = useState();
    const [hovervalue, setHovervalue] = useState(0);
    console.log(hovervalue);

    return(
        <div className="container">
            {new Array(starcount).fill(0).map((value,index)=>{
                return (
                    <span key={index} className={hovervalue==0 && index<starvalue  || index<hovervalue? "gold":""}
                     onClick={() => setStarvalue(index+1)}  
                     onMouseEnter={() => setHovervalue(index+1)}
                     onMouseLeave={() => setHovervalue(0)}>
                        &#9733;
                    </span>
                );
            })}
        </div>
    );

}
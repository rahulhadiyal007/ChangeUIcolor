import React, { useState } from "react";


export const InputComponent= ({getcolor})=>{

   

        const handlechangecolor = (e) =>{
            const { value } = e.target;
             getcolor(value);
        }

    return(
        <div>
            <input  className="form-control"
             placeholder="Enter Color name" 
             onChange={handlechangecolor}
                
             />
            
        </div>
    );

}
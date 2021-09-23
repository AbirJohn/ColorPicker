import React, { useState } from 'react';
import {SketchPicker } from 'react-color';
import './color.css'


export default function Color() {

    const [Color , setColor] = useState ("lightblue");


    const pickerStyle={
            default:{
                picker:{
                    position: "absolute",
                    top:"98px"
                },
            }
        }   

    return (
        <div style={{background:Color}}  className="container color-itam ">
            <SketchPicker styles={pickerStyle} color={Color}  onChange={ (updateColor)=> setColor(updateColor.hex)}            />
            <button className="btn"> Open Picker</button>
        </div>
    )
}

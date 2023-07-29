import React from "react";
import Meditate2 from "../assets/meditate2.jpg"
import Meditate3 from "../assets/meditate3.jpg"
function FirstPanel(){

/* ver como mover la foto sobre la seccion amarilla y moverla apropiadamente */

    return(
        <div className="flex flex-row lg:h-screen h-64 w-full lg:mb-0 mb-16">
            <div className="h-full w-5/12">
                <div className="lg:pl-24 lg:py-20 px-4 py-12 absolute lg:h-full lg:w-1/2 h-1/3 w-1/2">
                    <img src={Meditate2} className="h-full w-full"/>
                </div>
            </div>
            
            <div className="lg:h-full h-80 w-7/12  lg:pl-36 lg:py-44 py-24 px-8 bg-yellow-200">
                <div className="lg:h-full lg:w-2/3 mx-auto">
                    <img src={Meditate3} className="lg:h-full lg:w-full"/>
                </div>
            </div>
        </div>
    )
}

export default FirstPanel;
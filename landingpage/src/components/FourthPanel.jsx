import React from "react";
import Text from "./Text";
import Meditate8 from "../assets/meditate8.jpg"
import Meditate9 from "../assets/meditate9.jpg"

function FourthPanel(){

    const firstLine = "We’re passionate about what we do, but we’re equally passionate about improving who we are."
    const secondLine = "We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other. Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices."

    return(
        <div>
            <Text FirstLine={firstLine} SecondLine={secondLine}></Text>
            <div className="flex flex-row w-full lg:h-screen h-64">
                <div className="w-1/6 h-full ">
                    <div className="lg:py-40">
                        <img src={Meditate8} className="lg:h-1/2 lg:w-1/3 absolute lg:left-24 h-36 w-36 mt-12 left-6" />
                    </div>
                </div>
                <div className="w-4/6 h-full bg-purple-300">
                    
                </div>
                <div className="w-1/6 h-full">
                    <div className="lg:py-20">
                        <img src={Meditate9} className="lg:h-3/4 lg:w-2/5 absolute lg:right-0 right-2 mt-8 h-48 w-48" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthPanel;
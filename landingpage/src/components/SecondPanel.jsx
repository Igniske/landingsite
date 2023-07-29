import React from "react";
import Text from "./Text"
import Meditate4 from "../assets/meditate4.jpg"
import Meditate5 from "../assets/meditate5.jpg"
import Meditate6 from "../assets/meditate6.jpg"

function SecondPanel(){

    const firstLine = "We are more than 350 people from 30 different countries divided between our headquarters in Buenos Aires and our offices in Los Angeles and Tokyo."
    const secondLine = "Most of us are active meditators, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future meditating culture."
    return(
        <div>
            <div>
                <Text FirstLine={firstLine} SecondLine={secondLine}></Text>
            </div>
            <div>
                <div className="flex flex-row lg:h-screen h-64 w-full">
                    <div className="h-full w-7/12 bg-green-200">
                        <div className="w-full h-1/2">
                            <img src={Meditate4} className="w-1/2  mx-auto py-8" />
                        </div>
                        <div className="w-full h-1/2">
                            <img src={Meditate5} className="w-1/2  mx-auto py-8" />
                        </div>
                    </div>
                    <div className="h-full w-5/12">
                        <div className="lg:h-full lg:py-24 w-2/5 py-8 absolute lg:right-32 right-6">
                            <img className="w-full lg:h-full h-48" src={Meditate6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPanel;
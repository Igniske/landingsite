import React from "react";
import Text from "./Text"

function Video(){

    const firstLine = "Meditating isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
    const secondLine = "We feel the same way about making YangYin products. The driving force behind YangYin is our passion for what we make, and the people we make it for."

    return(
        <div className="lg:w-full w-screen">
            <Text FirstLine={firstLine} SecondLine={secondLine}></Text>
                <div className="lg:px-96 px-6 ">
                    {/*<video width="500" height="400" controls >
                        <source src="https://www.youtube.com/watch?v=thcEuMDWxoI" type="video/mp4"/>
    </video>*/}
                    <div className="text-lg font-thin"> Why YangYin</div>
                </div>
        </div>
    )
}

export default Video;
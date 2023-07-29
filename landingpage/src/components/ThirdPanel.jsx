import React from "react";
import Text from "./Text"
import Meditate7 from "../assets/meditate7.jpg";

function ThirdPanel(){

    const firstLine = "We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
    const secondLine = "Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."

    return(
        <div>
            <Text FirstLine={firstLine} SecondLine={secondLine}></Text>
            <div className="w-4/5 h-full m-auto">
                <img src={Meditate7} className=""/>
            </div>
        </div>
    )
}

export default ThirdPanel;
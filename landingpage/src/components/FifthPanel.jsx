import React from "react";
import Text from "./Text"
import Meditate10 from "../assets/meditate10.jpg"

function FifthPanel(){

    const firstLine = "We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
    const secondLine = "If you're joining us in Buenos Aires, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."

    return(
        <div>
            <Text FirstLine={firstLine} SecondLine={secondLine}></Text>
            <div className="lg:h-screen w-full">
                <div className="flex lg:flex-row flex-col h-5/6 w-5/6 bg-blue-300 mx-auto">
                    <div className="lg:h-auto lg:w-1/2 w-full">
                        <img src={Meditate10} className="lg:h-full lg:w-full w-fit h-full" />
                    </div>
                    <div className="h-fit lg:w-1/2 lg:m-auto py-6 lg:py-0 lg:text-justified text-left lg:text-2xl text-lg: font-bold">
                        <div className="lg:px-28 px-8">
                            <div>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</div>
                            <div className="mt-8 text-blue-800">See lastest jobs{" >"} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthPanel;
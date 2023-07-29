import React from "react";

function Text( {FirstLine, SecondLine}){

    return(
        <div className="lg:py-24 py-12">
            <div className="w-1/2 m-auto text-justify">
                <div className="font-semibold lg:text-3xl text-2xl lg:leading-snug mb-4">{FirstLine}</div>
                <div className="font-thin lg:text-xl text-lg ">{SecondLine}</div>
            </div>
        </div>
    )
}

export default Text;
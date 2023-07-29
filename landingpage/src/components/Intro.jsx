import React from "react";
import Meditate1 from "../assets/meditate1.jpg"
import Text from "./Text"
function Intro(){

    const firstLine = "We make Live, Learn and Progress — unique meditation techniques. With these practices, our community of users creates amazing things."
    const SecondLine ="YangYin was founded in 1995 and released the first version of Live in 2006. Our products are used by a community of dedicated meditation masters from across the world."

    return(
        <div className="pt-16">
            <div className="lg:h-screen">
            <img className="lg:w-10/12 lg:h-5/6 mx-auto object-center object-cover w-2/3 h-96" src={Meditate1} alt="Image"/>
        </div>
        <Text FirstLine={firstLine} SecondLine={SecondLine}></Text>
        </div>
    )
}

export default Intro;
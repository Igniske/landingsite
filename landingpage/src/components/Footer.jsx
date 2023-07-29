import React, { useState } from "react";
import FBIcon from "../assets/bxl-facebook-square.svg"
import TWIcon from "../assets/bxl-twitter.svg"
import YTIcon from '../assets/bxl-youtube.svg'
import IGIcon from "../assets/bxl-instagram-alt.svg"
import YangYin from "../assets/yinyang.svg"
function Footer(){
    const [inputValue, setInputValue] = useState("");
    const [inputIsFocused, setInputIsFocused] = useState(false)

    const handleChange = (event) => {
        setInputValue(event.target.value)
    };

    const handleInputFocus = () =>{
        setInputIsFocused(true)
    };

    const handleInputBlur = () =>{
        if (inputValue === ""){
            setInputIsFocused(false);
        }
    }

    return(
        <>
        <div className="h-screen lg:flex hidden border-t-2 w-full border-gray-400">
            <div className="flex flex-col mx-auto w-5/6 h-full">
                <div className="h-1/6">
                    <div className="text-6xl font-bold">YangYin</div>
                </div>
                <div className="h-2/6">
                    <div className="flex h-full flex-row">
                        <div className="w-3/12 h-full">
                            <div className="lg:flex flex-col text-2xl space-y-2">
                                <div className="h-1/4 w-full my-1">
                                    <div>Register Live {" >"} </div>                   
                                </div>
                                <div className="h-1/4 w-full my-1">
                                    <div>About YangYin {" >"} </div> 
                                </div>
                                <div className="h-1/4 w-full my-1">
                                    <div>Jobs {" >"} </div> 
                                </div>
                                <div className="flex flex-row w-full h-full  space-x-0 ">
                                    <img src={FBIcon} className="h-16 w-1/4"/>
                                    <img src={TWIcon} className="h-16 w-1/4"/>
                                    <img src={YTIcon} className="h-16 w-1/4"/>
                                    <img src={IGIcon} className="h-16 w-1/4"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/12 h-full text-md space-y-1 pl-20 text-justified">
                            <div className="h-1/6 w-full font-bold">
                                <div>Education</div>
                            </div>
                            <div className="h-1/6 w-full ">
                                <div>Offers for students and teachers {" >"}</div>
                            </div>
                            <div className="h-1/6 w-full ">
                                <div>YangYin for Classroom {" >"}</div>
                            </div>
                            <div className="h-1/6 w-full ">
                                <div>YangYin for Colleges and Universities {" >"}</div>
                            </div>
                        </div>
                        <div className="w-5/12 h-full">
                            <div className="h-1/6 w-full font-bold">
                                <div>Sign up to our newsletter</div>
                            </div>
                            <div className="h-2/6 w-full ">
                                <div>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</div>
                            </div>
                            <div className="h-2/6 w-full">
                                <div className="h-2/3 w-full flex flex-row">
                                    <input className="bg-gray-200 w-3/4" 
                                        type="text"
                                        value={inputValue}
                                        onChange={handleChange}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        placeholder={(inputIsFocused ? "" : "   Email Address")}
                                        
                                    />
                                    <button 
                                    className="bg-blue-900 w-1/4 text-white text-2xl"
                                    >Sign up
                                    
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-2/6">
                    <div className="flex h-full flex-row">
                        <div className="w-3/12 h-full text-md space-y-1 text-justified">
                                <div className="h-1/6 w-full font-bold">
                                    <div>Community</div>
                                </div>
                                <div className="h-1/6 w-full ">
                                    <div>Find YangYin User Groups {" >"}</div>
                                </div>
                                <div className="h-1/6 w-full ">
                                    <div>Find Certified Training {" >"}</div>
                                </div>
                                <div className="h-1/6 w-full ">
                                    <div>Become a Certified Trainer {" >"}</div>
                                </div>
                        </div>
                        <div className="w-4/12 flex flex-col pl-20 h-full text-md text-justified">
                            <div className="h-1/6 w-full font-bold">
                                <div>Language and Location</div>
                            </div>
                            <div className="flex flex-row space-x-1">
                                <div>
                                    <select className="bg-gray-200 w-28">
                                        <option value="option1">Argentina</option>
                                        <option value="option2">United States</option>
                                        <option value="option3">Germany</option>
                                    </select>
                                </div>
                                <div>
                                    <select className="bg-gray-200 w-40">
                                        <option value="option1">Español</option>
                                        <option value="option2">English</option>
                                        <option value="option3">Deutsche</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-1/6 w-full">
                    <div className="flex flex-row w-2/3">
                        <div >
                            <ul className="flex flex-row space-x-3 text-sm">
                                <li>Contact</li>
                                <li>Us Press</li>
                                <li>Resources Legal</li>
                                <li>Info Privacy</li>
                                <li>Policy Cookie</li>
                                <li>Settings</li> 
                                <li>Imprint</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row w-1/3">
                        <img src={YangYin} className="h-8 w-8"/>
                        <div>Made in Argentina</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:hidden flex flex-col space-y-4 w-full h-screen">
            <div className="text-4xl ml-8 font-bold">
                YangYin
            </div>
            <div className="w-full px-8 mx-auto space-y-6 h-1/6">
                <div className="h-1/6 w-full font-bold">
                    <div>Sign up to our newsletter</div>
                </div>
                <div className="h-1/6 text-sm w-full ">
                    <div>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</div>
                </div>
                <div className="h-2/6 w-full">
                    <div className="h-2/3 w-full flex flex-row">
                        <input className="bg-gray-200 w-3/4" 
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            placeholder={(inputIsFocused ? "" : "   Email Address")}
                            
                        />
                        <button 
                        className="bg-blue-900 w-1/4 text-white text-xl"
                        >Sign up
                        
                        </button>
                    </div>
                </div>
                </div>
                <div className="w-1/2 ml-8 h-1/6">
                    <div className="lg:flex flex-col space-y-2">
                        <div className="h-1/4 w-full my-1">
                            <div>Register Live {" >"} </div>                   
                        </div>
                        <div className="h-1/4 w-full my-1">
                            <div>About YangYin {" >"} </div> 
                        </div>
                        <div className="h-1/4 w-full my-1">
                            <div>Jobs {" >"} </div> 
                        </div>
                        <div className="flex flex-row w-full h-full  space-x-0 ">
                            <img src={FBIcon} className="h-12 w-1/4"/>
                            <img src={TWIcon} className="h-12 w-1/4"/>
                            <img src={YTIcon} className="h-12 w-1/4"/>
                            <img src={IGIcon} className="h-12 w-1/4"/>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col ml-8 w-full text-md space-y-6 h-fit">
                        <div className="w-full font-bold">
                            <div>Language and Location</div>
                        </div>
                        <div className="flex flex-row space-x-1">
                            <div>
                                <select className="bg-gray-200 w-28">
                                    <option value="option1">Argentina</option>
                                    <option value="option2">United States</option>
                                    <option value="option3">Germany</option>
                                </select>
                            </div>
                            <div>
                                <select className="bg-gray-200 w-28">
                                    <option value="option1">Español</option>
                                    <option value="option2">English</option>
                                    <option value="option3">Deutsche</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-8 h-1/6 w-full">
                    <div className="flex flex-col w-2/3">
                        <div >
                            <ul className="flex flex-col space-y-4 text-sm">
                                <li>Contact</li>
                                <li>Us Press</li>
                                <li>Resources Legal</li>
                                <li>Info Privacy</li>
                                <li>Policy Cookie</li>
                                <li>Settings</li> 
                                <li>Imprint</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row mt-6 w-1/3">
                        <img src={YangYin} className="h-8 w-8"/>
                        <div>Made in Argentina</div>
                    </div>
                </div>
                    
                
            
            
        </div>
        </>
    )
}

export default Footer;
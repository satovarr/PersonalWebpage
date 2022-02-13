import { getLocationOrigin } from "next/dist/shared/lib/utils";
import React, {useEffect} from "react";

function Skills() {

    useEffect(() => {
        let reached = false
        window.addEventListener('scroll', () => {
            //import this
                if (Math.ceil(window.scrollY * 4) > window.innerHeight && !reached) {
                    reached = true;
                    const langsItem = document.querySelector(".langs");
                    const langulItem = document.querySelector(".skills-box ul");
                    const langulliItem = document.querySelectorAll(".skills-box ul li");

                    console.log(langulliItem)
                    langsItem.style.top = "calc(120vh)";
                    langsItem.style.left = 100 + "px";
                    langsItem.style.height = 60 + "vh";
                    langsItem.style.width = 15 + "vw";
                    langsItem.style.padding = 30 + "px";

                    langulItem.style["flex-direction"] = "column";
                    langulItem.style.height = "100%";

                    langulliItem.forEach((item) => item.style.margin = '0 auto');


            }    
        })
        
    });

    return(
    <>
        <div className='skills-box'>
            <div className="langs">
                <ul>
                    <li><img src="/python-icon.svg"></img>
                            <div className="frameworks" id="python-tab">
                            <h1>python</h1>
                        </div></li>
                        <li><img src="/javascript-icon.svg"></img>
                            <div className="frameworks" id="js-tab">
                            <h1>js</h1>
                        </div></li>
                        <li><img src="/go-icon.svg"></img>
                            <div className="frameworks" id="go-tab">
                            <h1>go</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
};

export default Skills;
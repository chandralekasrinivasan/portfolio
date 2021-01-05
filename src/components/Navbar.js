import { useEffect, useState } from "react";
import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = ()=>{
    const [active, setActive]= useState(''); 

    useEffect(() =>{
        let currentURL = window.location.href;
        console.log(currentURL);
        if(currentURL.endsWith('/aboutme'))
            setActive('About Me');
        else if(currentURL.endsWith('/skills'))
            setActive('Skills');
        else if(currentURL.endsWith('/projects'))
            setActive('Projects');
    }, [active])

    return(
        <div className="navbar">
            <div className="navbar_active">
                {active}
            </div>
            <div className="navbar_items">
                {active !== 'About Me' &&  
                <Link to="/aboutme"><div className="navbar_item" onClick={()=>setActive('About Me')}>About Me</div></Link>
                }
                {active !== 'Skills' && 
                <Link to="/skills"><div className="navbar_item" onClick={()=>setActive('Skills')}>Skills</div></Link>
                }
                {active !== 'Projects' &&
                <Link to="/projects"><div className="navbar_item" onClick={()=>setActive('Projects')}>Projects</div></Link>
                }
            </div>
        </div>
    );
}

export default Navbar;
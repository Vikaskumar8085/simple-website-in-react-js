import React from "react";
import { NavLink } from "react-router-dom";
import Edit from "./Edit";
import Coyright from "./Coyright";
import View from "./View";
import Sea from "./Sea"
import Footer from "./Footer";
class Layout extends React.Component{
    render(){
        return (<>
        <header>
        <nav>
        <ul>
            <li>
                <NavLink to="/" id="navid">Home</NavLink>
            </li>
            <li>
           
                <NavLink to="" id="navid">About</NavLink>
            </li>
          
            <li>
                <NavLink to="" id="navid">Team</NavLink>
            </li>
            <li>
                <NavLink to="" id="navid">Contact Us</NavLink>
            </li>
          
        </ul>
        </nav>
        
        </header>
        <Edit/>
        <View/>
        <Sea/>
        <Footer/>
        <Coyright/>
       
        
        
        </>)
    }
}
export default Layout;
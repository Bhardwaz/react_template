import './Navbar.css';
function Navbar(){
    return(
        <>
           <nav className="navContainer">
              <ul className="navBar">
                <li className="navItem"> Home </li> 
                <li className="navItem"> Services</li>
                <li className="navItem"> Contact Us </li>
                <li className="navItem"> Available 24*7 </li>  
              </ul>
           </nav>
        </>
    )
}
export default Navbar
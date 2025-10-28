import {Link, Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <>
<nav>
<ul>
<li><Link to="/">Home</Link></li>
 <li><Link to="/About">About</Link></li>
<li><Link to="/Contact">Contact</Link></li>
</ul>
</nav>

<Outlet/>
</>
    );
};
 
export default Navigation;
import { useState } from "react";
import menuData from "../data.js";
import Menu from "./Menu";
 

const MenuList = () => {
  const [menu, setMenu] = useState(menuData);
 
  return (
    <section className="menuBody">
      <div className="titelh2">
        <h2>Our Menu</h2>
      </div>
 
      <div className="section-center">
        {menu.map((item) => (
          <Menu key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
 
export default MenuList;
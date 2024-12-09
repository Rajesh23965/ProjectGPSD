import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaHome, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import SubMenue from "./SubMenue";

const Navbar = ({ base }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [menuData, setMenuData] = useState([]);
  const [subMenueOpen, setSubMenueOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchMenudata = async () => {
      try {
        const response = await axios.get(`${base}/get-front-menu-details`);
        setMenuData(response.data.menu);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMenudata();
  }, [base]);

  const handleNavToggle = () => setNavOpen(!navOpen);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setNavOpen(false);
  };

  const handleSubMenueToggle = (menuId) => {
    if (isMobile) {
      setSubMenueOpen(subMenueOpen === menuId ? null : menuId);
    } else {
      setSubMenueOpen(menuId);
    }
  };

  const handleSubMenueClose = () => {
    if (!isMobile) {
      setSubMenueOpen(null);
    }
  };

  const getSubMenu = (parentId) => {
    return menuData.filter((menu) => menu.parent_id === parentId);
  };

  return (
    <nav className="bg-[#115404] p lg:p- flex-col md:flex-row justify-between sticky top-0 z-50 lg:ml-8 lg:mr-8 border-b-4 border-[#407d22]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white uppercase font-bold text-center">
        <Link to='/' className="">
        
        <FaHome className="flex items-center mt-2 ml-5 " size={40}/>
        </Link>
          {menuData.length > 0 &&
            menuData
              .filter((menu) => menu.parent_id === "0")
              .map((menu) => (
                <li
                  key={menu.id_menu}
                  onMouseEnter={() => handleSubMenueToggle(menu.id_menu)}
                  onMouseLeave={handleSubMenueClose}
                  className="relative border-2 border-transparent hover:border-white transition duration-300 ease-in-out rounded-md p-2"
                >
                  <Link
                    to={
                      menu.url_menu === "#"
                        ? "/"
                        : `/${
                            menu.content_type == 1
                              ? `page?id=${menu.content_id}`
                              : menu.content_type == 2
                              ? `post?id=${menu.content_id}`
                              : menu.content_type == 3
                              ? `category?id=${menu.content_id}`
                              : menu.content_type == 4
                              ? `get-employee-list=${menu.content_id}`
                              : menu.content_type == 4
                              ? `/${menu.url_menu}`
                              : ""
                          }`
                    }
                    onClick={() => handleTabClick(menu.label_menu)}
                    className="flex items-center px-4 py-2  rounded-md"
                  >
                     
                    {menu.label_menu}
                    {menu.has_child === "1" && (
                      <FaAngleDown className="ml-1" size={16} />
                    )}
                  </Link>

                  {/* Render Submenu */}
                  {menu.has_child === "1" && (
                    <SubMenue
                      isOpen={subMenueOpen === menu.id_menu}
                      links={getSubMenu(menu.id_menu).map((subMenu) => ({
                        label_menu: subMenu.label_menu,
                        url_menu: subMenu.url_menu,
                        content_type: subMenu.content_type,
                        content_id: subMenu.content_id,
                      }))}
                      handleTabClick={handleTabClick}
                    />
                  )}
                </li>
              ))}
        </ul>

        {/* Mobile menu toggle */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={handleNavToggle}
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile menu content */}
      {navOpen && (
        <ul className="md:hidden text-white space-y-4 p-4 uppercase font-bold">
          <Link to='/' className="w-full">
        
        <FaHome className=" flex items-center mt-2 " size={40}/>
        </Link>
          {menuData.length > 0 &&
            menuData
              .filter((menu) => menu.parent_id === "0")
              .map((menu) => (
                <li
                  key={menu.id_menu}
                  className="relative border-2 border-transparent hover:border-white transition duration-300 ease-in-out rounded-md p-2"

                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => handleSubMenueToggle(menu.id_menu)}
                  >
                    <Link
                      to={
                        menu.url_menu === "#"
                          ? "/"
                          : `/${
                              menu.content_type == 1
                                ? `page?id=${menu.content_id}`
                                : menu.content_type == 2
                                ? `post?id=${menu.content_id}`
                                : menu.content_type == 3
                                ? `category?id=${menu.content_id}`
                                : menu.content_type == 4
                                ? `get-employee-list=${menu.content_id}`
                                : menu.content_type == 4
                                ? `/${menu.url_menu}`
                                : ""
                            }`
                      }
                      className="flex items-center py-2"
                    >
                      {menu.label_menu === "Home" && <FaHome className="mr-2" />}
                      {menu.label_menu}
                    </Link>

                    {/* Show submenu toggle icon */}
                    {menu.has_child === "1" && (
                      <FaAngleDown className="ml-1" size={16} />
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {menu.has_child === "1" && subMenueOpen === menu.id_menu && (
                    <SubMenue
                      isOpen={subMenueOpen === menu.id_menu}
                      links={getSubMenu(menu.id_menu).map((subMenu) => ({
                        label_menu: subMenu.label_menu,
                        url_menu: subMenu.url_menu,
                        content_type: subMenu.content_type,
                        content_id: subMenu.content_id,
                      }))}
                      handleTabClick={handleTabClick}
                    />
                  )}
                </li>
              ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

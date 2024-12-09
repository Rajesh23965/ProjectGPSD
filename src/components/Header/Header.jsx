import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = ({ base }) => {
  const [headerInfo, setHeaderInfo] = useState([]);
  const [data, setData] = useState({
    facebook: "",
    twitter: "",
    youtube: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base}/get-front-header-details`);
        setHeaderInfo(response.data.header);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchTopbarData = async () => {
      try {
        const response = await axios.get(`${base}/get-front-topbar-details`);
        const topbarData = response.data.topbar[0];
        setData({
          facebook: topbarData.facebook,
          twitter: topbarData.twitter,
          youtube: topbarData.youtube,
        });
      } catch (error) {
        console.error("Error fetching topbar data:", error);
      }
    };
    fetchTopbarData();
  }, []);

  if (!headerInfo.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4 lg:px-10 mt-4 mb-4">
      {headerInfo.map((head, index) => (
        <React.Fragment key={index}>
          {/* Logo Section */}
          <Link to='/'>
            <img
              src={`${base}/assets/uploads/${head.left_logo}`}
              alt="Logo"
              className="h-32"
            />
          </Link>

          {/* Office Info */}
          <Link to='/'>
            <div className="text-center md:text-center">
              <p className="text-[#407d22] font-bold text-lg md:text-xl lg:text-2xl xl:text-2xl">
                {head.nirdeshnalaya}
              </p>
              <p className="text-[#115404] font-bold text-md md:text-lg lg:text-xl xl:text-3xl">
                {head.office_name}
              </p>
              <p className="text-[#407d22] font-bold text-sm md:text-base lg:text-lg xl:text-xl">
                {head.office_location}
              </p>
            </div>
          </Link>

          {/* Social Icons */}
          <div className="lg:flex hidden flex-col gap-4 md:gap-0 lg:gap-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <Link to={data.twitter} target="_blank" className="flex items-center gap-2 justify-end">
              <span className="text-lg">Twitter</span>
              <FaTwitter size={22} className=" hover:text-[#1DA1F2] text-[#115404] transition-transform duration-300 transform hover:scale-110" />
            </Link>
            <Link to={data.facebook} target="_blank"  className="flex items-center gap-2 justify-end">
            <span className="text-lg">Facebook</span>
              <FaFacebook size={22} className="hover:text-[#1877F2] text-[#115404]  transition-transform duration-300 transform hover:scale-110" />
            </Link>
            <Link to={data.youtube} target="_blank"  className="flex items-center gap-2 justify-end">
            <span className="text-lg ">YouTube</span>
              <FaYoutube size={22} className="hover:text-[#FF0000] text-[#115404] transition-transform duration-300 transform hover:scale-110" />
            </Link>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Header;

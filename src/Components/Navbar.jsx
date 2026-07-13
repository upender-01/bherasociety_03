import React, { useState } from "react";
import Logo from "../assets/images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },

    {
      name: "ProgramsServices",
      href: "#programs",
      dropdown: [
        { name: "Eye Care", href: "/" },
        { name: "Mobile Camps", href: "/" },
        { name: "Old Age Homes", href: "/" },
      ],
    },

    {
      name: "HospitalFacilities",
      href: "#facilities",
    },

    {
      name: "ImpactStories",
      href: "#impact",
      dropdown: [
        { name: "Case Studies", href: "/" },
        { name: "Testimonials", href: "/" },
      ],
    },

    {
      name: "Photo Gallery",
      href: "/gallery",
    },

    {
      name: "Videos",
      href: "/",
    },

    {
      name: "Get Involved",
      href: "#get-involved",
      dropdown: [
        { name: "Donate Info", href: "/donate" },
        { name: "Volunteer", href: "/" },
      ],
    },

    {
      name: "Contact Us",
      href: "/contactus",
    },
  ];

  const handleNavigation = (e, href) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: href } });
      } else {
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    } else {
      navigate(href);
    }

    setIsOpen(false);
    setMobileDropdown(null);
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between space-x-4 items-center h-20">
          {/* Logo */}
               <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}   // Place your logo in public/logo.png
                alt="Bhera Society Logo"
                className="h-14 w-auto object-contain rounded-2xl"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {/* Parent Link */}
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className=" text-gray-200 font-medium text-sm xl:text-base py-2 relative transition-colors duration-300 hover:text-emerald-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full " >{item.name} </a>) : (
                  <Link
                    to={item.href}
                    className="
                      text-gray-200 font-medium text-sm xl:text-base py-2 relative transition-colors duration-300 hover:text-emerald-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full
                    "
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdown(null);
                    }}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      mt-4
                      w-56
                      opacity-0
                      invisible
                      translate-y-2
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      bg-gray-900
                      rounded-2xl
                      transition-all
                      duration-300
                      z-50
                    "
                  >
                    <div
                      className="
                        bg-black/80
                        backdrop-blur-xl
                        border
                        border-white/10
                        rounded-xl
                        shadow-2xl
                        overflow-hidden
                        p-2
                      "
                    >
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.href}
                          className="
                            block
                            px-4
                            py-3
                            text-sm
                            text-gray-300
                            rounded-lg
                            hover:bg-emerald-500/20
                            hover:text-emerald-300
                            hover:translate-x-1
                            transition-all
                            duration-200
                          "
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/donate"
              className="
                relative
                inline-flex
                items-center
                justify-center
                p-0.5
                overflow-hidden
                text-sm
                font-bold
                text-white
                rounded-full
                bg-gradient-to-r
                from-emerald-500
                to-teal-600
              "
            >
              <span
                className="
                  px-6
                  py-2
                  bg-gray-900
                  rounded-full
                  transition-all
                  hover:bg-transparent
                "
              >
                Donate Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
 {/* Mobile Menu */}
<div
  className={`lg:hidden bg-black/90 backdrop-blur-xl overflow-hidden transition-all duration-500 ${
    isOpen ? "max-h-screen py-4" : "max-h-0"
  }`}
>
  <div className="px-4">
    {navItems.map((item, index) => (
      <div key={index}>
        {item.dropdown ? (
          <>
            <button
              onClick={() =>
                setMobileDropdown(
                  mobileDropdown === index ? null : index
                )
              }
              className="
                w-full
                flex
                justify-between
                items-center
                py-3
                text-left
                text-gray-200
                font-semibold
                border-b
                border-white/10
                hover:text-emerald-400
              "
            >
              {item.name}

              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileDropdown === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {mobileDropdown === index && (
              <div className="pl-6 py-2 space-y-1">
                {item.dropdown.map((dropItem, dropIndex) => (
                  <Link
                    key={dropIndex}
                    to={dropItem.href}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdown(null);
                    }}
                    className="
                      block
                      py-2
                      text-gray-400
                      hover:text-emerald-300
                      hover:translate-x-2
                      transition-all
                      duration-300
                    "
                  >
                    {dropItem.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : item.href.startsWith("#") ? (
          <button
            onClick={(e) => handleNavigation(e, item.href)}
            className="
              w-full
              flex
              justify-between
              items-center
              py-3
              text-left
              text-gray-200
              font-semibold
              border-b
              border-white/10
              hover:text-emerald-400
            "
          >
            {item.name}
          </button>
        ) : (
          <Link
            to={item.href}
            onClick={() => {
              setIsOpen(false);
              setMobileDropdown(null);
            }}
            className="
              w-full
              flex
              justify-between
              items-center
              py-3
              text-left
              text-gray-200
              font-semibold
              border-b
              border-white/10
              hover:text-emerald-400
            "
          >
            {item.name}
          </Link>
        )}
      </div>
    ))}

    <div className="pt-5">
      <Link
        to="/donate"
        onClick={() => {
          setIsOpen(false);
          setMobileDropdown(null);
        }}
        className="
          flex
          justify-center
          items-center
          w-full
          py-3
          rounded-lg
          text-white
          font-bold
          bg-gradient-to-r
          from-emerald-500
          to-teal-600
        "
      >
        Donate Now
      </Link>
    </div>
  </div>
  </div>
  </nav>
  )};
export default Navbar;
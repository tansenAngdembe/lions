import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Menu, X, Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Heading = () => {
  const {t, i18n } = useTranslation();
  return (
    <div className="flex items-center justify-between bg-header pr-2">
      <div className="flex items-center justify-center p-1 md:pl-4">
        <div className="w-max">
          <img className="w-15" src="/logo/logo.svg" alt="organization logo" />
        </div>
        <div className="flex flex-col items-start justify-center text-xs text-secondary font-bold pl-1 sm:pl-0">
          <p>Lions International</p>
          <p>District 325k (MD 325) Nepal</p>
          <p>L/Y 2025-2026</p>
        </div>
      </div>
      <div className="flex items-center justify-center mb-auto pt-4 sm:gap-10 gap-2.5 sm:pr-8">
        <NavLink
          className="flex items-center justify-center sm:gap-1"
          to={"/lio_ai"}
        >
          <span className="text-orange-600 font-bold text-sm">Lio</span>
          <img
            src={
              "https://www.lionsclubs.org/themes/lionsclubs/images/chatbot-red.svg"
            }
            alt=""
            className="sm:w-5 w-4"
          />
        </NavLink>
        <select
        onChange={(e) =>{
          i18n.changeLanguage(e.target.value)
          localStorage.setItem("language",e.target.value)
       }
         }
         value={i18n.language}
          name="language"
          className="shadow-md text-xs sm:pl-4 sm:pr-4 pt-2 pb-2 rounded-full outline-1 outline-white text-white"
        >
          <option className="bg-black text-white" value="en">English</option>
          <option className="bg-black text-white"  value="ne">Nepali</option>
        </select>
      </div>
    </div>
  );
};

const Nav = () => {
 const {t} = useTranslation()
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenus, setActiveSubmenus] = useState({});

  const handleOpen = () => setIsOpen(!isOpen);

  const toggleSubmenu = (key) => {
    setActiveSubmenus((prev) => ({
      [key]: !prev[key], // Open clicked, close others
    }));
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navigation = [
    { label:t("header.home"), link: "/" },
    {
      label:  t("header.teams.title"),

      submenu: [
        {
          title:  t("header.teams.digi-team.heading"),
          items: [
            { label: t("header.teams.digi-team.current"), link: "/currentDGTeam" },
            { label: t("header.teams.digi-team.past-governer"), link: "/pastDgTeam" },
          ],
        },
        {
          title:t("header.teams.cabinet-officials.heading"),
          items: [
            { label:t("header.teams.cabinet-officials.senior"), link: "/seniorOfficers" },
            { label:  t("header.teams.cabinet-officials.cluster-head"), link: "/areaLeaders" },
            {lable: t("header.teams.cabinet-officials.gat"), link: "/gatTeam"},
            { label: t("header.teams.cabinet-officials.region"), link: "/regionChairPerson" },
            { label: t("header.teams.cabinet-officials.zone"), link: "/zoneChairPerson" },

            { label:  t("header.teams.cabinet-officials.global"), link: "/globalCausesTeam" },
            { label: t("header.teams.cabinet-officials.digi-program"), link: "/dgProgramTeam" },
          ],
        },
        {
          title:  t("header.teams.leo-district.heading"),
          items: [
            { label: t("header.teams.leo-district.council"), link: "/leoDistrict" },
            { label:  t("header.teams.leo-district.club"), link: "/leoClubs" },
          ],
        },
      ],
    },
    { label: t("header.clubs"), link: "/clubs" },
    { label: t("header.resources"), link: "/resources" },
    {label:t("header.aboutUs"),link:"/aboutUs"},
    { label: t("header.login"), link: "https://lionsinternational.my.site.com/s/login/?language=en_US", isButton: true , target:"_blank"},
  ];


  return (
    <header className="w-full fixed top-0 left-0 z-[900] bg-white">
      <Heading />
      <nav className="bg-blue-200 p-6">
        {/* Desktop Nav */}
        <ul className="hidden xl:flex md:flex items-center justify-between gap-10 text-sm pl-2 text-gray-950 z-[999]">
          <div className="flex items-center gap-10">
            {navigation.filter(item => !item.isButton).map((item, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={item.link}
                  className="font-bold hover:underline"
                >
                  {item.label}
                </NavLink>
                {item.submenu && (
                  <div className="absolute pt-8 top-full left-0 hidden bg-blue-200 w-[800px] p-6 group-hover:flex gap-8">
                    {item.submenu.map((submenu, subIndex) => (
                      <div key={subIndex} className="w-1/3">
                        <div className="bg-[#f8a41c] px-4 py-2 [clip-path:polygon(0_0,100%_0%,80%_90%,0_90%)] font-bold text-black w-full mb-2">
                          {submenu.title}
                        </div>
                        <ul className="text-sm text-black pl-4">
                          {submenu.items.map((subItem, subSubIndex) => (
                            <li
                              key={subSubIndex}
                              className="m-2 hover:underline hover:text-info"
                            >
                              <NavLink to={subItem.link}>{subItem.label}</NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </div>
          {navigation.filter(item => item.isButton).map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className="bg-yellow-400 pt-1.5 pb-1.5 pr-4 pl-4 rounded-full font-bold hover:bg-yellow-500 transition-colors"
                target={item.target}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="flex justify-end xl:hidden md:hidden">
          <button onClick={handleOpen} className="cursor-pointer">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile side bar */}
        <div
          className={`fixed top-0 right-0 w-80 h-screen bg-heading z-40 shadow-md transform transition-transform duration-500 ease-in-out overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={handleOpen}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <X />
          </button>
          <ul className="flex flex-col justify-center items-start gap-2 text-lg mt-10 pl-4 pb-4">
            {navigation.filter(item => !item.isButton).map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={handleOpen}
                  className="block font-semibold text-black text-gray-900 hover:underline"
                >
                  {item.label}
                </NavLink>

                {/*Mobile sub menu */}
                {item.submenu && (
                  <div className="flex flex-col items-start justify-center">
                    {item.submenu.map((submenu, subIndex) => (
                      <div key={subIndex} className="mb-4 mt-2">
                        <div
                          className="font-bold text-black bg-[#f8a41c] cursor-pointer [clip-path:polygon(0_0,100%_0%,80%_90%,0_90%)] mb-1 flex items-center justify-center w-max p-5 h-2"
                          onClick={() => toggleSubmenu(`${index}-${subIndex}`)}
                        >
                          <span className="flex-grow">{submenu.title}</span>
                          {activeSubmenus[`${index}-${subIndex}`] ? (
                            <Minus className="cursor-pointer mr-2 text-black" />
                          ) : (
                            <Plus className="cursor-pointer mr-2 text-black" />
                          )}
                        </div>

                        {activeSubmenus[`${index}-${subIndex}`] && (
                          <ul className="flex flex-col items-start justify-center">
                            {submenu.items.map((subItem, subSubIndex) => (
                              <li
                                key={subSubIndex}
                                className="text-white p-4 hover:bg-gray-400 rounded-md transition-all duration-200"
                              >
                                <NavLink
                                  to={subItem.link}
                                  onClick={handleOpen}
                                  className="block"
                                >
                                  {subItem.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
            {navigation.filter(item => item.isButton).map((item, index) => (
              <li key={index} className="w-full mt-4">
                <NavLink
                  to={item.link}
                  onClick={handleOpen}
                  className="block bg-yellow-400 px-4 py-2 rounded-full text-center font-semibold text-black hover:bg-yellow-500 transition-colors"
                  target={item.target}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

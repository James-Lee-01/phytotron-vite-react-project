// SideBar
import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";

//Link項目元件
const BarLink = ({ name, link }) => {
  return (
    <a
    className="focus:shadow-outline mt-2 flex w-full flex-row items-center rounded-lg bg-transparent px-4 py-2 text-left hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none"
    href={link}
  >
    {name}
  </a>
  )
}

// Dropdown項目及其子項目內容
const sensorDropdown = {
  mainItem: "Sensor",
  items: [
    { name: "Sensor 01", link: "/sensor01" },
    { name: "Phytotron", link: "/sensor02" },
    { name: "Sensor 03", link: "/sensor03" },
  ],
};

// SideBar所有項目元件
const SideBarItems = () => {
  return (
    <>
      <BarLink name="Home" link="/" />
      <BarLink name="About" link="/about" />
      <Dropdown
        mainItem={sensorDropdown.mainItem}
        items={sensorDropdown.items}
      />
      <BarLink name="Contact" link="/contact" />
    </>
  );
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  }

  useEffect(() => {
    if (open) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={sidebarRef}>
      <div className="md:flex-col md:justify-start md:bg-gradient-to-r flex h-full w-full items-center justify-between bg-gradient-to-b from-zinc-900 via-zinc-900 to-neutral-800 p-4">
        <a className="text-2xl font-bold" href="/">
          EnviroGuard
        </a>
        <GiHamburgerMenu
          className="md:hidden cursor-pointer text-3xl"
          onClick={handleOpen}
        />

        <div className="md:flex mt-8 hidden">
          <div
            className={"flex min-w-[200px] items-center justify-between p-4"}
          >
            <div className="w-full">
              <SideBarItems />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div>
          <div
            className={
              "absolute flex w-full items-center justify-between bg-zinc-800 p-4 pt-0 z-10"
            }
          >
            <div className="w-full">
              <SideBarItems />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

BarLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

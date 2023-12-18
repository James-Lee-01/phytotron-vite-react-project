// Dropdown component
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";


const Dropdown = ({ mainItem, items}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const subItems = items.map((item) => (
    <a
      key={item.name}
      className="md:mt-0 focus:shadow-outline mt-2 block rounded-lg bg-transparent px-4 py-2 text-sm font-semibold hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none"
      href={item.link}
    >
      {item.name}
    </a>
  ));

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="focus:shadow-outline mt-2 flex w-full flex-row items-center rounded-lg bg-transparent px-4 py-2 text-left hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none"
      >
        <span>{mainItem}</span>
        <span>
          <RiArrowDropDownLine className={`text-2xl transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}/>
        </span>

      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full origin-top-right rounded-md shadow-lg">
          <div className="rounded-md bg-black px-2 py-2 shadow">

            {subItems}
            

          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  mainItem: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};
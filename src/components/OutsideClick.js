import React, { useState, useRef, useEffect } from "react";

export default function withClickOutside(WrappedComponent) {
  const Component = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref?.current?.contains(event.target)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <WrappedComponent {...props} dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} ref={ref}/>;
  };

  return Component;
}
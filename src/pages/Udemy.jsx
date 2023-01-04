import React from "react";
import Navbar from "../components/Navbar";

export default function Udemy() {
  const [isScorlled, setIsScrolled] = React.useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div>
      
      <Navbar isScorlled={isScorlled} />
    </div>
  );
}
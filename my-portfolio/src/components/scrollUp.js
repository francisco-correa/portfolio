import React, { useState } from "react";
import "../App.css";

const ScrollArrow = () => {
  const [scroll, setScroll] = useState(false);
  const checkScrollTop = () => {
    if (!scroll && window.pageYOffset > 400) {
      setScroll(true);
    } else if (scroll && window.pageYOffset <= 400) {
      setScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <i
      onClick={scrollTop}
      style={{ height: 80, display: scroll ? "flex" : "none" }}
      className="fas fa-arrow-up"
    ></i>
  );
};
export default ScrollArrow;

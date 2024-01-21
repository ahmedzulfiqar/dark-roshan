import React, { useRef, useState, useEffect } from "react";
import portfoliodata from "../data/portfoliodata";
import { Link } from "react-router-dom";

function Barshop({}) {
  const scrollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  useEffect(() => {
    const scroller = scrollerRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scroller.offsetLeft);
      setScrollLeft(scroller.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scroller.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
      scroller.scrollLeft = scrollLeft - walk;
    };

    scroller.addEventListener("mousedown", handleMouseDown);
    scroller.addEventListener("mouseleave", handleMouseLeave);
    scroller.addEventListener("mouseup", handleMouseUp);
    scroller.addEventListener("mousemove", handleMouseMove);

    return () => {
      scroller.removeEventListener("mousedown", handleMouseDown);
      scroller.removeEventListener("mouseleave", handleMouseLeave);
      scroller.removeEventListener("mouseup", handleMouseUp);
      scroller.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);
  return (
    <div className="col-12 p-0 py-0  align-self-center border-bottom pb-lg-3">
      <div className="container py-0">
        <div className="row m-0 justify-content-center">
          <div
            className="col-lg-9 col-12 d-flex justify-content-between overflow-scroll p-0 py-3 scroller align-self-center"
            ref={scrollerRef}
          >
            {portfoliodata.map((i) => {
              return (
                <Link
                  className={` ${"fw-bolder text-red text-uppercase"}`}to={`/${i.path}`}
                  style={{
                    width: "max-content",
                    margin: "0 10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {i.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barshop;

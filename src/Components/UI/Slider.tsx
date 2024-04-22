import { useRef, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function SliderComponent({ children }) {
    const scrollEl = useRef(null);
    const [showScrollButtons, setShowScrollButtons] = useState(true);
    const [leftBtnDeactive, setLeftBtnDeactive] = useState(false);
    const [rightBtnDeactive, setRightBtnDeactive] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    function handleScrollClick(isPrev) {
      if (isPrev && scrollEl.current) {
        scrollEl.current.scrollLeft -= 100;
      } else if (scrollEl.current) {
        scrollEl.current.scrollLeft += 100;
      }
    }
  
    function onScroll(event) {
      // Check if scroll position is at the beginning or end
      setLeftBtnDeactive(event.target.scrollLeft === 0);
      setRightBtnDeactive(
        event.target.scrollLeft + event.target.clientWidth ===
          event.target.scrollWidth
      );
    }
  
    function handleMouseDown(event) {
      setIsDragging(true);
      setStartX(event.clientX - scrollEl.current.offsetLeft);
      setScrollLeft(scrollEl.current.scrollLeft);
    }
  
    function handleMouseUp() {
      setIsDragging(false);
    }
  
    function handleMouseMove(event) {
      if (!isDragging) return;
      const x = event.clientX - scrollEl.current.offsetLeft;
      const walk = (x - startX) * 3; 
      scrollEl.current.scrollLeft = scrollLeft - walk;
    }
  
    return (
      <div className='slider-component'>
        <button
          onClick={() => handleScrollClick(true)}
          className={`slider_button slider_button--prev ${
            leftBtnDeactive ? 'disabled' : ''
          }`}
          disabled={leftBtnDeactive}
          style={{ display: showScrollButtons ? 'block' : 'none' }}
        >
          <FaChevronLeft />
        </button>
        <div
          className="slider"
          ref={scrollEl}
          onScroll={onScroll}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="slider__inner">
            {children}
          </div>
        </div>
        <button
          onClick={() => handleScrollClick(false)}
          className={`slider_button slider_button--next ${
            rightBtnDeactive ? 'disabled' : ''
          }`}
          disabled={rightBtnDeactive}
          style={{ display: showScrollButtons ? 'block' : 'none' }}
        >
          <FaChevronRight />
        </button>
      </div>
    );
  }

  export default SliderComponent;
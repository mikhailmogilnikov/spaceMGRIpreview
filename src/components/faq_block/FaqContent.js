import { Plus } from "@phosphor-icons/react";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const FaqContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionToggle = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="element_container">
      <div className="content_cover">
        <div className="content_elem_column">
          <div className="accordion">
            <div
              className={`accordion-toggle ${isExpanded ? "expanded" : ""}`}
              onClick={handleAccordionToggle}
            >
              <div className="accordion-title">
                <span className={`accordion-icon ${isExpanded ? "rotate" : ""}`}>
                  <Plus weight="bold" className="icon_min" />
                </span>
                <h4>Тест</h4>
              </div>
            </div>
            <CSSTransition
              in={isExpanded}
              timeout={300}
              classNames="accordion-content"
              unmountOnExit
            >
              <div className="accordion-content">
                <p>Тестbr</p>
              </div>
            </CSSTransition>
          </div>
        </div>
        <div className="breaker"></div>
      </div>
    </div>
  );
};

export default FaqContent;
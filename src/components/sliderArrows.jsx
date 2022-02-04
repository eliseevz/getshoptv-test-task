import React from 'react';

const SliderArrows = ({next, prev}) => {
    return (
        <div id="arrows" className="arrowsContainer d-flex">
            <div className="d-flex">
                <button onClick={prev} className="arrowWrap">
                    <span className="arrowBg"></span>
                    <i className="bi bi-arrow-left"></i>
                </button>
                <button onClick={next} className="arrowWrap">
                    <span className="arrowBg"></span>
                    <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default SliderArrows;

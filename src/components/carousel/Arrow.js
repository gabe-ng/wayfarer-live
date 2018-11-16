import React from 'react';

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={`slide-arrow ${direction} carousel-arrow`}
        onClick={clickFunction}>
        {glyph}
    </div>
);

export default Arrow;
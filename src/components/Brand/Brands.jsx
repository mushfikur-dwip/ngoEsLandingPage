import React from 'react';
import './Brands.css'; // (assuming you save the CSS below in Brands.css)

const Brands = () => {
    return (
        <>
            <div className="wrapper">
                {[...Array(8)].map((_, index) => (
                    <div key={`left-${index}`} className={`itemLeft item${index + 1}`}></div>
                ))}
            </div>

            <div className="wrapper">
                {[...Array(8)].map((_, index) => (
                    <div key={`right-${index}`} className={`itemRight item${index + 1}`}></div>
                ))}
            </div>
        </>
    );
};

export default Brands;

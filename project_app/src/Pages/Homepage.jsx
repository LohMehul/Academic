import React from 'react';
import "../home.css"
import ParentCard from "./ParentCard"
const HomePage = () => {
    return (
        <>
            <div className="sec-one">
            <h2>Welcome to my Home </h2>
            <ParentCard/>
            </div>
        </>
    );
};

export default HomePage;
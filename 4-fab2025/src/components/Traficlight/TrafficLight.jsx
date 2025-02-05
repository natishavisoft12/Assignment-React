import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState("red");

    useEffect(() => {
        let timer;
        if (activeLight === "red") {
            timer = setTimeout(() => setActiveLight("green"), 4000);
        } else if (activeLight === "green") {
            timer = setTimeout(() => setActiveLight("yellow"), 3000);
        } else if (activeLight === "yellow") {
            timer = setTimeout(() => setActiveLight("red"), 500);
        }
        return () => clearTimeout(timer);
    }, [activeLight]);

    const lightStyle = (color) => ({
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "10px",
        backgroundColor: activeLight === color ? color : "lightgray",
        boxShadow: activeLight === color ? "0 0 10px 5px " + color : "none",
        transition: "background-color 0.5s, box-shadow 0.5s",
    });

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "150px" }}>
            <div style={{ width: "100px", height: "200px", backgroundColor: "black", padding: "20px", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={lightStyle("red")}></div>
                <div style={lightStyle("yellow")}></div>
                <div style={lightStyle("green")}></div>
            </div>
        </div>
    );
};

export default TrafficLight;

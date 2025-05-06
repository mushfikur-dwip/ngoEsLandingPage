import React from 'react';
import WorldMap from 'react-svg-worldmap';

const World = () => {
    const data = [
        { country: "cn", value: ": Completed 2 Projects" },
        { country: "in", value: 1311559204 },
        { country: "us", value: 331883986 },
        { country: "id", value: 264935824 },
        { country: "pk", value: 210797836 },
        { country: "br", value: 210301591 },
        { country: "ng", value: 208679114 },
        { country: "bd", value: 161062905 },
        { country: "ru", value: 141944641 },
        { country: "mx", value: 127318112 },
    ];

    const stylingFunction = ({ countryValue, country, color, minValue, maxValue }) => {
        return {
            fill: countryValue > 0 ? color : "#eee",
            stroke: "#000",
            strokeWidth: 0.5,
            strokeOpacity: 0.5,
            cursor: "pointer",
        };
    };

    return (
        <div className="flex flex-col items-center justify-center py-10 px-2">
            <WorldMap
                color="#ee2461"
                backgroundColor=""
                size="xl"
                value-suffix="projects"
                data={data}
                style={{ width: "100%", height: "100%" }}
                frame={false}
                styleFunction={stylingFunction}
            />
        </div>
    );
};

export default World;

import React from 'react';
import WorldMap from 'react-svg-worldmap';

const World = () => {
    const data = [
        { country: "cn", value: ": Completed 2 Projects" },
        { country: "in", value: ": Completed 2 Projects"  },
        { country: "us", value: ": Completed 2 Projects"  },
        { country: "id", value: ": Completed 2 Projects"  },
        { country: "pk", value: ": Completed 2 Projects"  },
        { country: "br", value: ": Completed 2 Projects"  },
        { country: "ng", value: ": Completed 2 Projects"  },
        { country: "bd", value: ": Completed 2 Projects"  },
        { country: "ru", value: ": Completed 2 Projects"  },
        { country: "mx", value: ": Completed 2 Projects"  },
    ];

    const stylingFunction = ({ countryValue, country, color, minValue, maxValue }) => {
        return {
            fill: countryValue !==undefined ? color : "#eee",
            stroke: "#000",
            strokeWidth: 0.5,
            strokeOpacity: 0.5,
            cursor: "pointer",
        };
    };

    return (
        <div className="flex flex-col items-center justify-center py-10 px-2 mt-10 ">
            <h1 className='text-white font-bold text-center text-4xl lg:text-6xl lg:pr-[50px] mb-10 '>
                Regional Experience Map
            </h1>
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

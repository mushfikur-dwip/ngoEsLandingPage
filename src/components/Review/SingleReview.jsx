import React from 'react';
import fiveStar from '../../assets/fiveStar.svg';

const SingleReview = () => {
    return (
        <div>
            <div className="flex flex-col justify-around bg-[#ffffff] min-h-120 max-w-100 mx-auto my-2 py-11 px-5 rounded-2xl">
                <div className="flex justify-between items-center">
                    <div>
                        <span>
                            <img src={fiveStar} alt="five stars" />
                        </span>
                    </div>
                    <div className='bg-[#ee2461] p-2 rounded-2xl '>
                        <img
                            src="https://cdn.prod.website-files.com/66430b5a25aa84a73798d586/66826a1a1798b2a0832bc846_clutch.svg"
                            alt="clutch logo"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-semibold text-[24px] leading-7">
                        We were impressed with the quality of the animations and script quality.
                    </h1>
                    <p className="text-[18px]">
                        Boasting a keen understanding of the client's vision and product, Vidiosa brought their ideas to life
                        and delivered high-quality animations and videos. The team led a transparent workflow and delivered
                        everything on time. Their receptiveness to client input and feedback made for a smooth process.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
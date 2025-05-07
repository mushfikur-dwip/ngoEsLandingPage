import React from 'react';
import fiveStar from '../../assets/fiveStar.svg';

const SingleReview = ({ review }) => {
    // console.log(review);
    const { title, description } = review;
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
                            src={review.platformLogo.url}
                            alt="clutch logo"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-semibold text-[24px] leading-7">
                        {title}
                    </h1>
                    <p className="text-[18px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
import React from 'react';

const SingleFaq = () => {
    return (
        <div>
            <div className="my-2 py-3 collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2"  />
                <div className="collapse-title font-semibold text-[20px] lg:text-2xl">How do I create an account?</div>
                <div className="collapse-content text-md">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
        </div>
    );
};

export default SingleFaq;
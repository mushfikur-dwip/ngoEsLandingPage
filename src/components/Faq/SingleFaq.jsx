import React from 'react';

const SingleFaq = ({ faq }) => {
    console.log(faq);
    const { question, answer } = faq;
    return (
        <div>
            <div className="my-2 py-3 collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2"  />
                <div className="collapse-title font-semibold text-[20px] lg:text-2xl">{question}</div>
                <div className="collapse-content text-md">{answer}</div>
            </div>
        </div>
    );
};

export default SingleFaq;
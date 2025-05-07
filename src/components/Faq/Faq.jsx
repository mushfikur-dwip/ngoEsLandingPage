import React from 'react';
import SingleFaq from './SingleFaq';
import faq from '../../data/faq.json';

const Faq = () => {
    
    return (
        <div className='max-w-[1280px] mx-auto'>
            {/* title */}
            <div className='flex flex-col items-center my-5'>
                <div id='titelBtn' className="w-[130px] px-3 py-2 mb-3 text-[#ee2461] rounded-full border-2 border-[#ee2461] shadow hover:text-white hover:bg-[#ee2461]">Our FAQs</div>
                <div><h1 className='text-white text-center font-bold text-5xl lg:text-6xl '> <span className='text-white'>Frequently Asked <br /> Questions</span></h1></div>
            </div>

            {/* FAQs */}

            {/* <SingleFaq></SingleFaq>
            <SingleFaq></SingleFaq>
            <SingleFaq></SingleFaq>
            <SingleFaq></SingleFaq> */}
            {
                faq.map((faq, id)=>(
                    <SingleFaq key={id} faq={faq} ></SingleFaq>
                ))
            }
            <div>
            </div>
        </div>
    );
};

export default Faq;
import React from 'react';

const Banner = ({ counter, reCounter }) => {
    return (
        <div className="px-4 sm:px-10 mt-10">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
                <div className="flex-1 h-60 gradient-with-image1 text-white p-4 flex flex-col rounded-xl items-center justify-center text-2xl">
                    In-Progress <br />
                    <span className="text-4xl">{counter}</span>
                </div>
                <div className="flex-1 h-60 gradient-with-image2 text-white p-4 flex flex-col rounded-xl items-center justify-center text-2xl">
                    Resolved <br />
                    <span className="text-4xl">{reCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;

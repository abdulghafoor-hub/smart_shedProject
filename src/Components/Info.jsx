import React from 'react'


// render the information related to the enviroment .may some video content be inclueded
const Info = () => {
    return (
        <>
            <div className="grid lg:grid-cols-4 gap-4 mx-4 md:grid-cols-2 sm:grid-cols-1 my-5">
                <div className="bg-yellow-300 text-center">
                    <h1 className='font-bold my-5'>Week 1:</h1>
                    <p className='text-justify mx-4 mb-3'>
                        Day 1: Provide chicks with a brooding temperature of around 95°F (35°C) and a
                        humidity level of 60-70%. Chicks need 16-18 hours of light per day and access
                        to clean water at all times.</p>

                    <p className='text-justify mx-4 mb-3'> Day 2-6: Maintain the brooding temperature at 90-95°F
                        (32-35°C) and gradually decrease the humidity level by 5% per day. Ensure that
                        chicks have adequate access to water and are receiving enough light.</p>

                    <p className='text-justify mx-4 mb-5'> Day 7: Maintain the brooding temperature at 85-90°F
                        (29-32°C) and continue to decrease the humidity level. Monitor chicks for signs
                        of stress, dehydration, or respiratory problems.</p>
                </div>
                <div className="bg-yellow-300 text-center ">
                    <h1 className='font-bold my-5'>Week 2:</h1>
                    <p className='text-justify mx-4 mb-3'> Day 8-13: Maintain the brooding temperature at 80-85°F (27-29°C) and the humidity
                        level at 50-60%. Chicks need around 15 hours of light per day and should have access
                        to clean water at all times.</p>

                    <p className='text-justify mx-4 mb-5'> Day 14: Maintain the brooding temperature at 75-80°F (24-27°C) and continue to decrease
                        the humidity level. Monitor chicks for signs of growth, feathering, and health.</p>
                </div>
                <div className="bg-yellow-200 text-center">
                    <h1 className='font-bold my-5'> Week 3:</h1>
                    <p className='text-justify mx-4 mb-3'> Day 15-20: Maintain the brooding temperature at 70-75°F (21-24°C) and the humidity level at
                        40-50%. Chicks need around 14 hours of light per day and should have access to clean water
                        at all times.</p>

                    <p className='text-justify mx-4 mb-5'> Day 21: Gradually reduce the brooding temperature to 65-70°F (18-21°C) and continue to monitor
                        the humidity level. Vaccinate chicks against common poultry diseases such as Marek's disease,
                        Newcastle disease, and Infectious Bronchitis.</p>
                </div>
                <div className="bg-yellow-200 text-center">
                    <h1 className='font-bold my-5'> Week 4:</h1>
                    <p className='text-justify mx-4 mb-3'> <span className='text-red-400 font-bold p-1'> Day 22-27:</span> Maintain the brooding temperature at 65-70°F (18-21°C) and the humidity level at
                        40-50%. Chicks need around 12 hours of light per day and should have access to clean water
                        at all times.</p>

                    <p className='text-justify mx-4 mb-5'> Day 28: Gradually reduce the brooding temperature to 70-75°F (21-24°C) and continue to monitor
                        the humidity level. Prepare chicks for transfer to the grow-out facility.</p>
                </div>
            </div>
        </>
    )

}

export default Info
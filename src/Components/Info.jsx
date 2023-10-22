const Info = () => {
    return (
        <><div className="grid lg:grid-cols-4 gap-4 mx-4 md:grid-cols-2 sm:grid-cols-1 my-5">
            <div className="bg-yellow-300 text-center">
                <h1 className='font-bold my-5 text-lg'>Week 1:</h1>
                <div className='text-justify mx-4 mb-3'>
                    <h3 className='text-blue-600 font-bold text-lg'>Day 1 to Week 1:</h3>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Temperature:</h3>
                        Provide chicks with a brooding temperature of around 95°F (35°C).</p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Humidity:</h3>
                        humidity level of 60-70%.</p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Light:</h3>
                        Chicks need 24 hours of light  and access to clean water at all times. </p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Vaccine:</h3>
                        Marek's Disease Vaccine: Typically administered on the first day or within the first week.</p>
                </div>
            </div>{/*week two details*/}
            <div className="bg-yellow-300 text-center">
                <h1 className='font-bold my-5 text-lg'>Week 2:</h1>
                <div className='text-justify mx-4 mb-3'>
                    <h3 className='text-blue-600 font-bold text-lg'>Week  2 from (7-14)day:</h3>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Temperature:</h3>
                        Reduce the temperature to 70-75°F (21-24°C) by the end of the second week.</p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Humidity:</h3>
                        Gradually reduce the humidity to around 40-50%.</p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Light:</h3>
                        Provide 18-20 hours of light per day.</p>
                    <p className='mt-4 text-justify'><h2 className='font-bold text-blue-600'>Vaccine:</h2>
                        Newcastle Disease Vaccine: Given at around 7-10 days of age. <br />
                        Infectious Bronchitis Vaccine: Administered at around 10-14 days of age.</p>
                </div>
            </div>

            {/* week three 3 datails */}

            <div className="bg-yellow-300 text-center">
                <h1 className='font-bold my-5 text-lg'>Week 3:</h1>
                <div className='text-justify mx-4 mb-3'>
                    <h3 className='text-blue-600 font-bold text-lg'> Week 3:</h3>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Temperature:</h3>
                        Maintain a temperature of 70-75°F (21-24°C) during this period.
                    </p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Humidity:</h3>
                        Maintain the Humidity level of 40- 50%.
                    </p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Light:</h3>
                        Provide 18-20 hours of light per day.
                    </p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Vaccine:</h3>
                        Gumboro (Infectious Bursal Disease) Vaccine: Administered at around 2-3 weeks of age.
                    </p>
                </div>
            </div>

            {/* Week Four 4  details */}

            <div className="bg-yellow-300 text-center">
                <h1 className='font-bold my-5 text-lg'>Week 4:</h1>
                <div className='text-justify mx-4 mb-3'>
                    <h3 className='text-blue-600 font-bold text-lg'>Week 4:</h3>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Temperature:</h3>
                        Weeks 3 to 6 Maintain a temperature of 70-75°F (21-24°C) during this period.
                    </p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Humidity:</h3> humidity level of 40-50%.
                    </p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Light:</h3>
                        Chicks need 16-18 hours of light.
                    </p>
                    <p className='mt-4 text-justify'><h3 className='font-bold text-blue-600'>Vaccine:</h3>
                        Fowlpox Vaccine: Given when the chicks are around 4-6 weeks old.
                        Avian Influenza Vaccine: Usually given between 4-8 weeks of age.
                    </p>
                </div>
            </div>
        </div>
        </>
    )

}

export default Info
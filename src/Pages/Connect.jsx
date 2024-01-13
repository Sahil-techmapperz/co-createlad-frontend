import React from 'react'
import '../CSS/contact.css';
import SmartPic1 from '../assets/smartpic1.png'
import SmartPic2 from '../assets/smartpic2.png'
import SmartPic3 from '../assets/smartpic3.png'
import SmartPic4 from '../assets/smartpic4.png'
import SmartPic5 from '../assets/ContactUs.png'

const Connect = () => {
    return (
        <>
            <div className=''>

                <section className='flex w-full pl-16 h-[100vh]'>
                    <div className='w-[40%]'>
                        <div className=''>
                            <p className='text-3xl font-bold'>DISCOVER US</p>
                            <p className='text-base font-normal mt-3'>Co-Create Labs is here to help you:</p>
                            <p className='text-base font-normal'>Our experts are available to answer any questions you might have. We’ve got the answers.</p>
                        </div>
                        <div className='mt-3'>
                            <p className='text-2xl font-medium '>Visit Us</p>
                            <p className='text-lg mt-3'>UK address:</p>
                            <a className='text-base mt-3'><u>404 Stanley Turner House, 32 Barry Blandford Way, London, E3 3XD</u></a>
                            {/* <p className='mt-3'>Feel free to get in touch with us through our channels: </p> */}
                            <p className='text-lg mt-3'>India address: </p>
                            <p className='text-base mt-3'><u>23/4, Gariahat Road, Kolkata, India - 700029</u></p>
                        </div>
                        <div className='mt-3'>
                            <p className='text-2xl font-medium'>Email US</p>
                            <p><u>hello@cocreatelabs.in</u></p>
                        </div>
                        <div className='mt-3'>
                            <p className='text-2xl font-medium'>Call US</p>
                            <a className='mt-3'><u>+971-4-576-6770</u> </a>
                            <a className=''><u>+971-55-983-7007</u></a>
                        </div>
                    </div>

                    <div className='relative   h-[75%] w-[47%] ml-[9%]'>
                        {/* Using the same URL for all images for simplicity */}
                        <img className='absolute w-[200px]  top-[0] z-2 left-[20%]' src={SmartPic3} alt="Smart Picture 1" />
                        <img className='absolute w-[200px]   top-[16%] z-20 right-[0] ' src={SmartPic4} alt="Smart Picture 2" />
                        <img className='absolute w-[200px]  top-[30%] z-2 left-[0%] ' src={SmartPic1} alt="Smart Picture 3" />
                        <img className='absolute w-[200px]   bottom-[0%] z-20 right-[9%] ' src={SmartPic2} alt="Smart Picture 4" />
                    </div>
                </section>





                <div className='bg-gray-900 text-white overflow-hidden h-[480px]'>
                    <div className='flex justify-between'>
                       
                        <div className='pl-16 '>
                        <img className='h-[100px] ml-[-9%]' src={SmartPic5} />
                            <p className='text-5xl font-bold'>Have a project!</p>
                            <p className='text-5xl font-bold'> Let’s discuss </p>
                            <p className='text-2xl mt-1'>Thank you for getting in touch! Kindly. </p>
                            <p className='text-2xl mt-1'>Fill the form, have a great day!</p>
                        </div>
                        <div className=''>
                            <form className=''>
                                <div className='grid grid-cols-2 gap-12 mt-14 mr-12 '>
                                    <div className=''>
                                        <p className=''>Your Name</p>
                                        <div className='w-60 border border-solid bg-white border-gray-400 h-0.5 rounded-md'></div>
                                    </div>
                                    <div className=''>
                                        <p className=''>Your Email</p>
                                        <div className='w-60 border border-solid bg-white border-gray-400 h-0.5 rounded-md'></div>
                                    </div>
                                    <div className=''>
                                        <p className=''>Phone Number</p>
                                        <div className='w-60 border border-solid bg-white border-gray-400 h-0.5 rounded-md'></div>
                                    </div>
                                    <div className=''>
                                        <p className=''>Country</p>
                                        <div className='w-60 border border-solid bg-white border-gray-400 h-0.5 rounded-md'></div>
                                    </div>
                                    {/* <div className=''>
                                        <select id="dropdown" name="dropdown" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-500"> */}
                                    {/* <!-- Dropdown options --> */}
                                    {/* <option value="option1">Country</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                        <div className='w-36 border border-solid bg-white border-gray-400 h-0.5 rounded-md'> */}

                                    {/* </div>
                                    </div> */}
                                    <div className=''>
                                        <p className=''>Company Name</p>
                                        <div className='w-[]90% border border-solid bg-white border-gray-400 h-0.5 rounded-md'></div>
                                    </div>
                                    <div className=''>
                                        <p className=''>Interested In</p>
                                        <div className='w-[]90% border border-solid bg-white border-gray-400 h-0.5 rounded-md'></div>
                                    </div>
                                    {/* <div className=''> */}
                                    {/* <select id="dropdown" name="dropdown" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none focus:border-indigo-500"> */}
                                    {/* <!-- Dropdown options --> */}
                                    {/* <option value="option1">Interested In</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                        <div className='w-36 border border-solid bg-white border-gray-400 h-0.5 rounded-md'></div> */}
                                    {/* </div> */}
                                </div>
                                <div className='mt-8'>
                                    <p className=''>Message </p>
                                    <div className='w-[92%] border border-solid bg-white border-gray-400 h-0.5 rounded-md'></div>
                                </div>
                                <button className='mt-8 w-[100px] h-[45px] border rounded bg-yellow-400 text-black '>Submit</button>

                            </form>
                        </div>
                    </div>

                    <p className='text-9xl font-bold text-center mt-3 text-gray-700'>Co-Create Labs</p>
                </div>

            </div>
            <div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117875.08357964091!2d88.3377618816755!3d22.59419508170631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a0275f5e9f0d845%3A0xacdb2affb4c5cecb!2sCF-401%2C%20CF%20Block%2C%20Block%20-%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700064!3m2!1d22.5942161!2d88.4201635!5e0!3m2!1sen!2sin!4v1704675328202!5m2!1sen!2sin" width="600" height="450" style="border:4;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>

        </>
    )
}

export default Connect

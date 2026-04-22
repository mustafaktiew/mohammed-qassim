import React from 'react'
import { DownloadIcon } from 'lucide-react';
import CV from '../assets/CV.pdf'
import mohamed from '../assets/mohamed.png'
import hero from '../assets/hero.png'

export default function Hero({ darkMode }) {


    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-600 hover:text-white',
        decoractiveCicle: 'bg-orange-500 opacity-10',
    }

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-300',
        buttonSecondary: 'text-white border-2 border-orange-500 hover: bg-orange-600',
        decoractiveCicle: 'bg-orange-400 opacity-20',
    };

    const theme = darkMode ? darkTheme : lightTheme;


    return (
        <div className='relative  overflow-hidden min-h-screen flex flex-col '>
            <section
                id='home'
                data-aos='fade-up'
                data-aos-delat='250'
                className='body-font z-10'>
                <div className="container mx-auto flex px-4  sm:px-8 lg:px-14
             py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14">
                    <div className='lg:w-1/2 w-full flex flex-col items-center 
                lg:items-start text-center lg:text-left mb-12 lg:mb-0 '>

                        <h1 className={`title-font txt-3xl sm:text-4xl lg:text-5xl mb-4 mt-8 font-bold
                    ${theme.textPrimary}`}
                            data-aos='fade-up'
                            data-aos-delay='500'>Hi, I am <span className='text-yellow-400'>
                                Mohamed</span> Qassim </h1>
                        <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg
                         ${theme.textSecondary}`}
                            data-aos='fade-up'
                            data-aos-delay='600'>3D and motion grafic designer</p>
                        {/*button*/}

                        <div className='w-full pt-4 sm:pt-6 '>
                            <div className='flex flex-col sm:flex-row justify-center
                                lg:justify-start gap-3 sm:gap-4'
                                data-aos='fade-up'
                                data-aos-delay='700'>
                                <a href={CV} download className='w-full sm:w-auto '>
                                    <button className='w-full sm:w-auto inline-flex
                                        items-center justify-center text-white bg-linear-to-r
                                         from-yellow-600
                                       
                                        to-yellow-300  border-0 py-3 px-6 sm:px-8 hover-shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                        rounded-full text-base sm:text-lg font-semibold transition-all
                                         duration-300 transform'>
                                        <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                                        Download CV
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*image */}

                    <div


                        className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center
                    '
                        data-aos='fade-left'
                        data-aos-delay='400'>
                        <div className='relative w-2/3 sm:w-3/4 lg:w-4/5'>
                            <div className='relative  '>

                                <img src={mohamed} alt="mohamed image"

                                    className='w-full  h-auto object-cover border-2 border-yellow-400
                                     rounded-full shadow-[0_0_20px_5px_rgba(245,158,11,0.5)] transform 
                                hover:scale-10 transition-transform duration-500'
                                />


                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}

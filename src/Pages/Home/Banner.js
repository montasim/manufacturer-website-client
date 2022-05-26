import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../../Components/MainButton';

const Banner = () => {
    return (
        <section className='relative bg-white'>
            <img
                className='absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100'
                src='https://i.ibb.co/zrCYLSG/17491-RIDGID-H001-APXmicro-Reel-Camera-1x-Desktop-1280x590.png'
                alt='Couple on a bed with a dog'
            />

            <div className='hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent'></div>

            <div className='relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
                <div className='max-w-xl text-center sm:text-left'>
                    <h1 className='text-3xl font-extrabold sm:text-5xl'>
                        Get a Better Look
                        <strong className='font-extrabold text-primary sm:block'>
                            Increase Performance.
                        </strong>
                    </h1>

                    <p className='max-w-lg mt-4 sm:leading-relaxed sm:text-xl'>
                        The RIDGID® SeeSnake® microReel™ APX™ with TruSense® Technology shows in-pipe visuals like you've never seen them before.
                    </p>

                    <div className='flex flex-wrap gap-4 mt-8 text-center'>
                        <MainButton design={'block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-secondary sm:w-auto active:bg-rose-500 hover:bg-primary focus:outline-none focus:ring'} text={'Get Started'} />

                        <MainButton design={'block  w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-primary sm:w-auto hover:bg-primary hover:text-white active:text-secondary focus:outline-none focus:ring'} text={'Learn More'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
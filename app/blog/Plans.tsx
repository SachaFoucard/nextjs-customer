import React from 'react';
import { SectionPrice } from '../_landing/Section';
import { Button } from '@/components/ui/button';

export default function Plans() {
    // Array of plan objects
    const plans = [
        {
            name: 'Freelancer',
            description: 'The essentials to provide your best work for clients.',
            price: '$24',
            products: 'Managed Website',
            subscribers: 'Contact Form',
            analytics: 'Unlimited Free SSL',
            supportResponseTime: '48h support response time'
        },
        {
            name: 'Startup',
            description: 'A plan that scales with your rapidly growing business.',
            price: '$32',
            products: 'Managed Website',
            subscribers: 'Contact Form',
            analytics: 'Unlimited Free SSL',
            supportResponseTime: '24h support response time',
        },
        // Add more plan objects here if needed
    ];

    return (
        <SectionPrice className='rounded-4xl mr-auto my-40 border-black w-full shadow-lg h-auto bg-#305348-800'>
            <div>
                <h3 className='text-center text-1xl md:text-2xl translate-x-2'>Pricing</h3>
                <h4 className='text-white-800 bold text-3xl md:text-5xl text-center align-center max-w3 m-auto mt-10'>Pricing plans for teams of all sizes</h4>
                <p className='text-center mt-5'>Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
            </div>
            <div className='flex-cols-1 md:flex md:py-10 lg:py-20 lg:max-w-2xl m-auto'>
                {/* Rendering plan cards using map function */}
                {plans.map((plan, index) => (
                    <div key={index} className='left bg-white text-[#305348] space-y-1 p-10 leading-10 rounded-lg shadow-2xl my-5 py-7  w-80 m-auto'>
                        <h3 className='bold text-2xl	'>{plan.name}</h3>
                        <span className='space-y-0'>
                            <p className='text-1 font-light'>{plan.description}</p>
                        </span>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>
                            <span className="inline font-extrabold text-4xl">{plan.price}</span>
                            <span className='ml-2 font-thin text-grey'>/month</span>
                        </p>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>{plan.subscribers}
                        </p>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>{plan.analytics}
                        </p>
                        <p className='font-light'>
                            <span className="inline-block mr-1">✔</span>{plan.supportResponseTime}
                        </p>
                        <Button size="lg" className='w-full mt-5 hover:shadow-lg  hover:bg-[#305348] hover:text-white'>Buy Plan</Button>
                    </div>
                ))}
            </div>

        </SectionPrice>
    );
}

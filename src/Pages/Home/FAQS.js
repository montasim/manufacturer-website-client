import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const FAQS = () => {
    return (
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='lg:mx-12 sm:mx-2 my-20'>
            <div className='ml-6 mb-12'>
                <h2 className="text-3xl font-bold text-secondary flex items-center"><FaQuoteLeft className='mr-3' /> Have some questions in your mind?</h2>
                <p className="mt-4 text-gray-500 w-3/6">Acquiring a new technology is always a hassle. We provide simple but effective solutions to manage your inventory. Learn more here.</p>
            </div>

            <div
                className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl"
            >
                <details className="p-6 group" open>
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            Trust Your Tools with Genuine RIDGID Parts
                        </h5>

                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        The Jantrik website covers all your necessary products. It includes creating and managing products, services and assets, product families, stock adjustements, stock takes, stock transfers, inventory writte-offs price lists, product availability and much more.
                    </p>
                </details>

                <details className="p-6 group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            Look for and insist on Genuine RIDGID Replacement Parts.
                        </h5>

                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        It is your best assurance of performance, efficiency and long service life. Using this site, you have 24/7 access to Genuine RIDGID Replacement Parts.
                    </p>
                </details>

                <details className="p-6 group">
                    <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-lg font-medium text-gray-900">
                            What is the purpose of the stock adjustment?
                        </h5>

                        <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-700">
                        Stock Adjustments can be used to update/correct the quantity and price of products in your Inventory. Adjustments could be required for entering new stock, removing damaged or stolen stock, data entry errors and so on.
                    </p>
                </details>
            </div>
        </section>
    );
};

export default FAQS;
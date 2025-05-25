import React, { useState } from 'react'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
import Stripe from '../components/Stripe'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Payment = () => {
    const { state: { price, items, orderId } } = useLocation()
    const [paymentMethod, setPaymentMethod] = useState('stripe')
    return (
        <div>
            <Headers />
            <section className='bg-[#eeeeee]'>
                <div className='max-w-[1440px] mx-auto px-16 sm:px-5 md-lg:px-12 md:px-10 py-16 mt-4'>
                    <div className='flex flex-wrap md:flex-col-reverse'>
                        

                        <div className='w-full md:w-full'>
                            <div>
                                <div className='flex pb-2 justify-center items-center flex-col gap-4'>
                                    <img src="/images/success.png" alt="error logo" />
                                    <div className='text-[30px] text-green-600 font-[500] '>Order Successfully Placed</div>
                                    <div>  <Link className='px-5 py-2 bg-green-500 rounded-sm text-white' to='/dashboard/my-orders'>Back to Dashboard</Link></div>
                                </div>
                                <div className='pl-2 md:pl-0 md:mb-0 pt-2'>
                                    <div className='bg-white shadow p-5 text-slate-600 flex flex-col gap-3'>
                                        <h2>Order Summary</h2>
                                        <div className='flex justify-between items-center'>
                                            <span>{items} items and shipping fee included</span>
                                            <span>₹{price}</span>
                                        </div>
                                        <div className='flex justify-between items-center font-semibold'>
                                            <span>Total Amount</span>
                                            <span className='text-lg text-orange-500'>₹{price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Payment
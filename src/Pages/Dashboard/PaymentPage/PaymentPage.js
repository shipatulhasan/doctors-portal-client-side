import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/Loader';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const PaymentPage = () => {

    

    const {id} = useParams()

    const url = `http://localhost:5000/bookings/${id}`

    const {data:booking,isLoading} = useQuery({
        queryKey:['bookings',id],
        queryFn:async()=>{
            const res = await fetch(url,{
                headers:{
                  authorization:`bearer ${localStorage.getItem('my-token')}`
                }
              })
              const data = await res.json()
              return data
        }
    })

    if(isLoading){
        return <Loader />
    }

    const {treatement,price,appointment_date,slot} = booking

   

    return (
        <div>
            <h2 className='text-2xl font-bold'>
                Payment for <span className='text-primary'>{treatement}</span>
            </h2>
            <p className='text-lg py-2'>
                Please pay <span className='font-bold'>${price}</span> for your appointment on <span className='font-bold italic'>{appointment_date}</span> at <span className='font-bold italic'>{slot}</span>
            </p>

            <div className='card-body border border-secondary shadow-xl shadow-slate-300 w-96 mt-10'>
            <h2 className="text-center text-lg font-semibold mb-10">please provide your credit card information</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking} />
            </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;
import React, { useEffect, useState } from 'react';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'
import Loader from '../../../components/Loader';
import { Link } from 'react-router-dom';

const CheckoutForm = ({booking}) => {

    const [cardError,setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionID,setTransactionID] = useState('')
    const [success,setSuccess] = useState('')
    const [proccessing,setPoccessing] = useState(false)


    const stripe = useStripe();
    const elements = useElements();
    const {price,patient,email,_id}  = booking

    
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
              "Content-Type": "application/json",
              authorization:`Bearer ${localStorage.getItem('my-token')}`
            },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async(event)=>{
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card = elements.getElement(CardElement);
          if(card===null){
              return
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setCardError(error.message)
            setPoccessing(false)
            return
          }
          else{
              setCardError('')
          }

          setSuccess('')
          setPoccessing(true)
          const {paymentIntent, confirmationError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email:email
                },
              },
            },
          );
          if(confirmationError){
              setCardError(confirmationError.message)
              setPoccessing(false)
              return
          }
          if(paymentIntent.status==='succeeded'){
              
            const payment = {
              price,
              email,
              bookingId:_id,
              transactionID:paymentIntent.id

            }
              // store payments

              fetch("http://localhost:5000/payments", {
              method: "POST",
              headers: { 
                  "Content-Type": "application/json",
                  authorization:`Bearer ${localStorage.getItem('my-token')}`
                },
              body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
              if(data.acknowledged){
                setSuccess('Congrats, Your payment completed')
                setTransactionID(paymentIntent.id)
              }
            })
            .catch(err=>{

              console.error(err)
              setPoccessing(false)    
            })
  
          }
          setPoccessing(false)    
          }
    
  

    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        
         {
             cardError && <h2 className='mt-4 text-red-500'>
             {cardError} please <Link to='/dashboard/my-bookings' className='text-blue-600 underline font-semibold'>get back</Link> and try again
         </h2>
         }
         {
          proccessing ? <Loader/> :<button className='btn btn-sm btn-primary mt-8 btn-block' type="submit" disabled={!stripe|| !clientSecret|| proccessing || success}>
          Pay with stripe
        </button>
        }

         {
             success && <div>
                 <p className='pt-4 text-lg font-semibold text-green-500'>{success}</p>
                 <p>your transaction id is {transactionID}</p>
             </div>
         }
       
      </form>
    );
};

export default CheckoutForm;
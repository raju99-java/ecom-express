import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/PaymentForm";

const stripePromise = loadStripe('pk_test_51J44JvSGHGeEnAkP3XTh37UUn4eimMV5BnDcQxN6yuPS0WqBMW5Oa2N0mzTM9u3N4GpTPqIzPjsi1ibX9vRMnd3c00EGO8JDkh');


const PaymentPage = () => {

  return(
      <Elements stripe={stripePromise}>
        <PaymentForm /> 
      </Elements>
    )
}


export default PaymentPage;
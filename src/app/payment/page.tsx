"use client";

import React from "react";
import styles from "./page.module.css";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  // CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const PaymentPage = () => {
  const stripePromise = loadStripe(process.env.STRIPE_PK!);
  //   const stripe = useStripe();
  //   const elements = useElements();

  return (
    <div className={styles.mainDiv}>
      ABCD
      <Elements stripe={stripePromise}>
        <CardNumberElement></CardNumberElement>
      </Elements>
    </div>
  );
};

export default PaymentPage;

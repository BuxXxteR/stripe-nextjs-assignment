"use client";

import React from "react";
import styles from "./page.module.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePayment from "../Components/Payments/StripePayment/index";
import { PaypalPayment } from "../Components/Payments/PaypalPayment/PaypalPayment";

const STRIPE_PK = process.env.STRIPE_PK;

const stripePromise = loadStripe(
  "pk_test_51Nmqt0Ap5WSNbPsatkBXTwjhJzM7jnKWjcZaHBn7z2iUdN1gw0DvTBpIGKIF9ZP6lW4yC0qFy1dN5g1jNuzzh59q00ll2PycAI"
);

const PaymentPage = () => {
  // const stripe = useStripe();
  // const elements = useElements();

  return (
    <div className={styles.mainDiv}>
      <div>
        <div className={styles.title}>STRIPE PAYMENT</div>
        <div>
          <Elements stripe={stripePromise}>
            <StripePayment />
          </Elements>
        </div>
      </div>
      <div>
        <div className={styles.title}>PAYPAL PAYMENT</div>
        <div>
          <PaypalPayment />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

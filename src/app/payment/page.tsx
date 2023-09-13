"use client";

import React from "react";
import styles from "./page.module.css";
import {
  // Elements,
  // CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const PaymentPage = () => {
  //   const stripe = useStripe();
  //   const elements = useElements();

  return (
    <div className={styles.mainDiv}>
      <CardNumberElement
        id="cardNumber"
        // options={stripeInputOptions}
        // onChange={(e) => {
        //   handleChangeStripe(e);
        //   console.log("RUN THIS");
        // }}
        // onReady={(e) => {
        //   e.focus();
        //   setClick({
        //     ...isClick,
        //     CardNumber: true,
        //   });
        //   handleChange({ Number: "1" });
        // }}
      />
    </div>
  );
};

export default PaymentPage;

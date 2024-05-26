import { CardElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const Checkoutform = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = useStripe();
    const elements = useElements();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
  };
  const stripe = useStripe();
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4"
              }
            },
            invalid: {
              color: "#9e2146"
            }
          }
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default Checkoutform;

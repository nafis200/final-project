
import Sectiontitle from '../components/Sectiontitle';
import {loadStripe} from '@stripe/stripe-js';
import {
 
  Elements
  
} from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_payment);
    return (
        <div>
           <Sectiontitle heading="paymant" subHeading="gateway"></Sectiontitle>
           <div>
             <Elements stripe={stripePromise}>
                <Checkoutform></Checkoutform>
             </Elements>
           </div>
        </div>
    );
};

export default Payment;
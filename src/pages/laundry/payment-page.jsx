import { Helmet } from "@dr.pogodin/react-helmet";
import PaymentLaundry from "../../section/laundry/payment";

const PaymentPage = () => {
    return (
        <>
            <Helmet>
                <title>Payment | TuitionFarm</title>
            </Helmet>
            <div>
                <PaymentLaundry />
            </div>
        </>
    );
};

export default PaymentPage;

import { Helmet } from "@dr.pogodin/react-helmet";
import PaymentParent from "../../section/parent/payment";

const PaymentPage = () => {
    return (
        <>
            <Helmet>
                <title>Payment | TuitionFarm</title>
            </Helmet>
            <div>
                <PaymentParent />
            </div>
        </>
    );
};

export default PaymentPage;

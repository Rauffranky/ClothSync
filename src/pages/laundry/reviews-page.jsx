import ReviewLaundry from "../../section/laundry/reviews";
import { Helmet } from "@dr.pogodin/react-helmet";

const ReviewLaundryPage = () => {
    return (
        <>
            <Helmet>
                <title>Reviews | Tuition Farm</title>
            </Helmet>
            <div>
                <ReviewLaundry />
            </div>
        </>
    );
};

export default ReviewLaundryPage;
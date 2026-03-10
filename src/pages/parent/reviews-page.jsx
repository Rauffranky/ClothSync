import ReviewParent from "../../section/parent/reviews";
import { Helmet } from "@dr.pogodin/react-helmet";

const ReviewParentPage = () => {
    return (
        <>
            <Helmet>
                <title>Reviews | Tuition Farm</title>
            </Helmet>
            <div>
                <ReviewParent />
            </div>
        </>
    );
};

export default ReviewParentPage;
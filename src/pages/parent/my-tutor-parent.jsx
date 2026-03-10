import { Helmet } from "@dr.pogodin/react-helmet";
import MyTutorParent from "../../section/parent/my-tutor";

const MyTutorParentPage = () => {
    return (
        <>
            <Helmet>
                <title>My Tutor | TuitionFarm</title>
            </Helmet>
            <div>
                <MyTutorParent />
            </div>
        </>
    );
};

export default MyTutorParentPage;
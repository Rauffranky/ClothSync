import { useNavigate } from "react-router-dom";
import OrderTable from "./order-table";

const Index = () => {
    const navigate = useNavigate();

    return (
        <div>
            <OrderTable onViewDetail={() => navigate("/student/order-details")} />
        </div>
    );
};

export default Index;
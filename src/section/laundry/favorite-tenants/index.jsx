import SocialIcons from "../../../components/UI/SocialIcons";
import BrowseTenantList from "../../landing-page/browse-tenant/BrowseTenantList";

const FavoriteTenants = () => {
    return (
        <div>
            <div className="flex items-center justify-between">

                <h4 className="font-bold my-4">Favorite Tenants</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            <BrowseTenantList showFavoritesOnly={true} />
        </div>
    );
};

export default FavoriteTenants;
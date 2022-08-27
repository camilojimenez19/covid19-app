import {
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";

import { Alert } from "../components/Alert";
import { Countries } from "../pages/Countries";
import { DetailsCountry } from "../pages/DetailsCountry";


export const AppNavigation = () => {

    const navigate = useNavigate();

    return (
        <div className='container mt-4 col-md-12'>
            <Routes>
                <Route path="/" element={<Countries />} />
                <Route path="/details/:countrySlug" element={<DetailsCountry />} />
                <Route
                    path="*"
                    element={
                        (
                            <>
                                <Alert message={"There's nothing here!"} />
                                <div className="text-center">
                                    <button onClick={() => navigate("/")} className="btn btn-danger btn-lg ">Back</button>
                                </div>
                            </>
                        )
                    }
                />
            </Routes>
        </div>
    );

}
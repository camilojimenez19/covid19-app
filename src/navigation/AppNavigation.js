import {
    Routes,
    Route,
} from "react-router-dom";

import { Countries } from "../pages/Countries";
import { DetailsCountry } from "../pages/DetailsCountry";


export const AppNavigation = () => {

    return (
        <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/details/:id" element={<DetailsCountry />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />

        </Routes>
    );

}
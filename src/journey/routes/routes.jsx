import PhishingGenerator from "../components/phishing/phishinggenerator.jsx";
import Pricing from "../components/pricing/pricing.jsx";

function  Routes() {
    return(
        <>
            <div style={{ padding: 20 }}>
                <h1>PhishWise MVP</h1>
                < PhishingGenerator />
                <hr />
                < Pricing />
            </div>
        </>
    )
}
export default Routes;
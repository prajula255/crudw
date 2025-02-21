import React from "react";

function AdsDetails() {
    return (
        <div>
            <nav className="bg-primary-subtle" style={{ padding: "40px" }}>
            </nav>
            <h2>Post ads</h2>
            <div style={{ border: "1px solid black" }}>
                <h3>Selected Category</h3>
                <h4>Include Details</h4>
                <form>
                    <label>Brand* <input type="text" /></label><br />
                    <label>Year* <input type="number" /></label><br />
                    <label>Fuel* <input type="text" /></label><br />
                    <label>Km driven* <input type="number" /></label><br />
                    <label>Brand* <input type="text" /></label><br />
                    <label>Price <input type="number" /></label><br />
                    <label>Brand* <input type="text" /></label><br />
                    <label>Description* <input type="number" /></label><br />

                    <button type="submit">Post now</button>
                </form>
            </div>
        </div>
    );
}

export default AdsDetails;

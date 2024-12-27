export const fetchPincodeDetails = async (pincode) => {
    const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data[0]?.Status === "Success") {
            const postOffices = data[0].PostOffice || [];
            return {
                pincode,
                state: postOffices[0]?.State || "N/A",
                district: postOffices[0]?.District || "N/A",
                names: postOffices.map((office) => office.Name),
            };
        } else {
            throw new Error(data[0]?.Message || "No data found");
        }
    } catch (error) {
        console.error("Error fetching pincode details:", error);
        return null;
    }
};  
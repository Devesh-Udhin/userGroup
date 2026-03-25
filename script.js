console.log("Script loaded successfully 2.");
var accessToken;
fetch(
    "https://curious-narwhal-u48v91-dev-ed.trailblaze.my.salesforce.com/services/oauth2/lightningoutsingleaccess",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "access_token=00DQy00000oVk3T!AQEAQLwLlNh4cQRNGZbPLVygQzt29xep6NnMLtiw6HlZo_YS0rcRif6rNd6HQb23OEcTdypEiCDTBkXkZ86HgqjZBCw74fcy&lightning_out_app_id=1UsQy0000000GzFKAU"
    }
)
    .then((response) => {
        console.log("Status:", response.status);
        return response.json();
    })
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

console.log("Script loaded successfully 2.");
const ACCESS_TOKEN = "REPLACE_ME_SECRET_TOKEN";
fetch(
    "https://curious-narwhal-u48v91-dev-ed.trailblaze.my.salesforce.com/services/oauth2/lightningoutsingleaccess",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `access_token=${ACCESS_TOKEN}&lightning_out_app_id=1UsQy0000000GzFKAU`
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

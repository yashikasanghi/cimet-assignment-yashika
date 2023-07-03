const express = require("express");
const axios = require("axios");
const cors = require("cors");
const cron = require("node-cron");

const app = express();

// Enable CORS for all routes
app.use(cors());

let token = null;

const generateToken = async () => {
  try {
    // Send a POST request to generate the token
    const response = await axios.post(
      "https://devcore02.cimet.io/v1/generate-token",
      {},
      {
        headers: {
          "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
        },
      }
    );
    token = response.data.data.token;
    console.log("Token generated:", token);
  } catch (error) {
    console.log("Token generation failed:", error.message);
  }
};

const fetchData = async () => {
  try {
    if (!token) {
      throw new Error("Token not available");
    }

    const requestBody = {
      session_id:
        "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
    };

    const response = await axios.post(
      "https://devcore02.cimet.io/v1/plan-list",
      requestBody,
      {
        headers: {
          "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
          "auth-token": token,
        },
      }
    );

    // Return the received data
    return response.data;
  } catch (error) {
    console.log("Request failed:", error.message);
    throw error;
  }
};

// Generate token initially
generateToken();

// Schedule token generation every 3 hours
cron.schedule("0 */3 * * *", () => {
  generateToken();
});

app.get("/", async (req, res) => {
  try {
    // Fetch data
    const data = await fetchData();

    // Respond with a success message and the received data
    res.status(200).json({ message: "Data received successfully", data: data });
  } catch (error) {
    console.log("ERROR: " + error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

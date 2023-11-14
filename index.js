import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "http://localhost:4000";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(`${API_URL}/random`);
        res.render("index.ejs", {
            mealName: result.data.mealName,
            mealType: result.data.mealType,
            mealArea: result.data.mealArea,
            mealIngredient: result.data.mealIngredient,
            mealInstructions: result.data.mealInstructions,
            mealImage: result.data.mealImage
        });
    } catch (error) {
        console.error("Error fetching random meal:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

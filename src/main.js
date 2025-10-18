import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import express from "express";
import path, { dirname } from "node:path";
dotenv.config({ path: ".env" });
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));

app.use((_, res) => {
    res.redirect("https://github.com/VigilioYonatan?tab=repositories");
});
app.get("/hello-world", () => {
    res.render("hello-world 😎");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

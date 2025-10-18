import dotenv from "dotenv";
import express from "express";
import path from "node:path";
dotenv.config({ path: ".env" });
const port = process.env.PORT;

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));

app.use((_, res) => {
    res.redirect("https://github.com/VigilioYonatan?tab=repositories");
});
app.get("/hello-world", (_, res) => {
    res.render("hello-world 😎");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
export default app;

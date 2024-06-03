import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import database from "./database/database.js"; 
import mainRouter from "./routes/mainRoute.js";

const app = express();

app.use(cors({
  origin:["http://localhost:3001", "http://s662csc105v004.sit.kmutt.ac.th"],
  credentials: true

}));

const port = process.env.port || 3000;

app.use(cookieParser());

app.use(express.json());



database.connect((err) => {
	if (err) throw err;
	console.log('Connected!');
});

app.use("/api", mainRouter);

app.listen(port, ()=>{
    console.log(`Running on Port ${port}`);
}) 			


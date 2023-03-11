// import express from "express";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();

app.use(express.json()); //body parser
app.use(cors());

/**
 * @endpoint:'/hello'
 *
 */
app.get("/hello", (req, res) => {
  res
    .status(200)
    .json({ result: "hello from wxpress,endpoint working successfully" });
});

app.listen(PORT, () => {
  console.log(`express server runnign on port ${PORT}`);
});

// function callbackPattern(callback, arg1, arg2) {
//   let err = undefined;
//   let result = undefined;
//   if (typeof arg1 === "number" && typeof arg2 === "number") {
//     result = true;
//   } else {
//     err = true;
//   }

//   callback(err, result); //error first call back
// }

// callbackPattern(
//   (err, result) => {
//     if (err) {
//       console.log("handle the error");
//       return;
//     }
//     console.log("Operation successfull",result);
//   },
//   1,
//   2
// );

// callbackPattern(
//   (err, result) => {
//     if (err) {
//       console.log("handle the error");
//       return;
//     }
//     console.log("Operation successfull",result);
//   },
//   "e",
//   2
// );

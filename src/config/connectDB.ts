import mongoose from "mongoose";

export function connect() {
  mongoose
    .connect(
      "mongodb+srv://toancv:02062003@cluster0.nbqgzo2.mongodb.net/test"
    )
    .then(() => console.log("Connected!"));
}

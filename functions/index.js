const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I5ShfEbbiIGklam5CQFeUPKqzBNNcD2CB9mRMCHKehZC8oUprHQIqahbUGlrwS1OXXmstH0Ph8qs92USanws5Vk00r0HXiFK0"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

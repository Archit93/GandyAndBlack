const cors = require("cors");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { port, secretKey } = require("./config");
const stripe = require("stripe")(secretKey);

const app = express();
app.use(express.json());
app.use(cors());

app.post("/checkout", cors(), async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount, receipt_email } = req.body;
      // Psst. For production-ready applications we recommend not using the
      // amount directly from the client without verifying it first. This is to
      // prevent bad actors from changing the total amount on the client before
      // it gets sent to the server. A good approach is to send the quantity of
      // a uniquely identifiable product and calculate the total price server-side.
      // Then, you would only fulfill orders using the quantity you charged for.

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "gbp",
        receipt_email,
        statement_descriptor: "G&B Asthetic Supplies",
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
  // try {
  //   const { product, token } = req.body;
  //   const customer = await stripe.customers.create({
  //     email: token.email,
  //     source: token.id,
  //   });

  //   const charge = await stripe.charges.create(
  //     {
  //       amount: Math.round(product.price * 100),
  //       currency: "gbp",
  //       customer: customer.id,
  //       receipt_email: token.email,
  //       description: product.name,
  //       shipping: {
  //         name: token.card.name,
  //         address: {
  //           line1: token.card.address_line1,
  //           line2: token.card.address_line2,
  //           city: token.card.address_city,
  //           country: token.card.address_country,
  //           postal_code: token.card.address_zip,
  //         },
  //       },
  //     },
  //     {
  //       idempotencyKey: uuidv4(),
  //     }
  //   );
  //   res.json({ message: "Payment success", success: true });
  // } catch (error) {
  //   res.json({ message: "Payment falied", success: false });
  // }
});

app.listen(port || 81, () => {
  console.log("Server is listening...");
});

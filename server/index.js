const cors = require("cors");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { port, secretKey } = require("./config");
const stripe = require("stripe")(secretKey);

const app = express();
app.use(express.json());
app.use(cors());

app.post("/checkout", cors(), async (req, res) => {
  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create(
      {
        amount: Math.round(product.price * 100),
        currency: "gbp",
        customer: customer.id,
        receipt_email: token.email,
        description: product.name,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    res.json({ message: "Payment success", success: true });
  } catch (error) {
    res.json({ message: "Payment falied", success: false });
  }
});

app.listen(port || 8080, () => {
  console.log("Server is listening...");
});

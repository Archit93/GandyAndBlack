const cors = require("cors");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51JumLXBPQeAuTgL1QVsE0GVcb1QTHCvZvQyt8CHmamQksCsoQcm6DHiZLSJceUX4YQjwVvZznLfjzEprdr2lqWWw0059xAZwXu"
);

const app = express();
app.use(express.json());
app.use(cors());

app.post("/checkout", cors(), async (req, res) => {
  try {
    const { product, token } = req.body;
    console.log(token);
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "gbp",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
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
        idempotency_key: uuidv4(),
      }
    );
    console.log("Charge:", { charge });
    res.json({ message: "Payment success", success: true });
  } catch (error) {
    console.error("Error:", error);
    res.json({ message: "Payment falied", success: false });
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is listening...");
});

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const Razorpay = require("razorpay");

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
    key_id: "rzp_test_****",
    key_secret: "********",
});

app.post("/create-order", async (req, res) => {
    try {
        console.log("create-order");
        const options = {
            amount: 5000,
            currency: "INR",
            receipt: "order_rcptid_123",
        }
        const order = await razorpay.orders.create(options);
        res.json(order);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to create order" });
    }
})

app.post("/verify-payment", (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto.createHmac("sha256", "EPveh5PCchCySTIFffw5YKT1").update(sign).digest("hex");

    if (expectedSign === razorpay_signature) {
        res.json({ success: true, message: "Payment verified successfully" });
    }
    else {
        res.status(400).json({ success: false, error: "Invalid signature" });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


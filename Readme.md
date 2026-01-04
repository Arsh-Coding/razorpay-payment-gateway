# Razorpay Node.js Integration (Test Mode)

# Main Code On DEV BRANCH

This branch contains a minimal and secure implementation of **Razorpay payment gateway integration** using **Node.js (Express)** on the backend and **plain HTML + JavaScript** on the frontend.
The integration uses **Razorpay test credentials** and follows the recommended order-based payment flow.

MAIN CODE IS PRESENT ON DEV BRANCH. ACCESS IT BY SELECTING AND CLICKING ON DEV BRANCH. CLONE IT AND ACCESS IT FROM THERE.

---

## Branch Purpose

The objective of this branch is to:

* Demonstrate a correct Razorpay integration flow
* Keep frontend lightweight (HTML + JS only)
* Enforce backend security best practices
* Serve as a reference or base for production hardening

---

## Tech Stack

* **Backend:** Node.js, Express
* **Payment Gateway:** Razorpay (Test Mode)
* **Frontend:** HTML, Vanilla JavaScript
* **Security:** HMAC SHA256 signature verification
* **Package Manager:** npm

---

## Project Structure

```
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── index.html
```

---

## Prerequisites

Ensure the following are installed locally:

* Node.js (v16+ recommended)
* npm
* Razorpay test account with API keys

---

## Razorpay Test Credentials

Generate keys from the Razorpay Dashboard in **Test Mode**.

You will need:

* `RAZORPAY_KEY_ID` (used on frontend)
* `RAZORPAY_KEY_SECRET` (used on backend only)

Do **not** commit real or secret credentials.

---

## Installation Steps

1. Clone the repository and switch to this branch
2. Install dependencies

```bash
npm install
```

3. Update Razorpay keys in `server.js`

```js
key_id: 'rzp_test_xxxxxxxx',
key_secret: 'xxxxxxxxxxxxxxxx'
```

4. Start the backend server

```bash
node server.js
```

Server will start on:

```
http://localhost:3000
```

---

## Running the Frontend

Open `index.html` directly in a browser or serve it using a static server.

Click **Pay** to initiate the Razorpay Checkout flow.

---

## Payment Flow Overview

1. Frontend calls `/create-order`
2. Backend creates a Razorpay order
3. Razorpay Checkout opens using `order_id`
4. Payment completes on Razorpay
5. Frontend sends payment data to `/verify-payment`
6. Backend verifies signature using secret key
7. Payment is confirmed as valid or rejected

---

## Test Card Details

Use Razorpay test card credentials:

* Card Number: `4386 2894 0766 0153`
* Expiry Date: Any future date
* CVV: Any 3 digits
* OTP: `123456`

No real money is deducted.

---

## Security Notes

* Secret key is never exposed to the frontend
* Payments are verified server-side using HMAC SHA256
* Orders are created only on the backend
* `node_modules` is excluded from version control

---

## Common Pitfalls Avoided

* No client-side order creation
* No hardcoded signatures
* No unverified payment success handling
* No committed dependencies

---

## Future Enhancements

Potential next steps:

* Dynamic payment amounts
* Database persistence for payments
* Razorpay webhooks integration
* Environment variable support
* Production deployment hardening

---

## Disclaimer

This implementation is intended for **learning and test usage**.
Before going live, ensure:

* Live credentials are used
* HTTPS is enforced
* Webhooks are enabled
* Proper error handling and logging are added

---

If you want, I can:

* Customize this README for your company repo
* Add environment variable documentation
* Write a production-grade version
* Align it with JungleWorks internal standards

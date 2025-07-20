// src/features/payment/stripeAPI.js
export const createPaymentIntentAPI = async (amount, currency = 'usd') =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve({ clientSecret: 'fake_client_secret_' + Date.now() }),
      1000
    )
  );
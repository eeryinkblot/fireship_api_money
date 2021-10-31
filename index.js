const express = require('express');
const app = express();

const stripe = require('stripe')('sk_test_YOUR_APIKEY_HERE');

app.get('/api', (req, res) => {
    const apiKey = req.query.apiKey;

    res.send({data: '📦📦📦📦📦📦📦📦'});
});

app.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price: 'price_1JqjmqD7mIxInmTW2biJv8kP'
            }
        ],
        success_url: 'http://localhost:8080/api',
        cancel_url: 'http://localhost:8080/api',
    });

    res.send(session);
});

app.listen(8080, () => console.log('alive on http://localhost:8080'));
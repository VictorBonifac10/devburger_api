import * as Yup from 'yup';
import 'dotenv/config';

import Stripe from 'stripe';

console.log("🔑 Stripe Key:", process.env.STRIPE_SECRET_KEY); // <--- TESTE AQUI

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const calculateOrderAmount = (items) => {
    const total = items.reduce((acc, current) => {
        return current.price * current.quantity + acc;
    }, 0);

    return total;
};

class CreatePaymentIntentController {
    async store(request, response) {
        const schema = Yup.object().shape({
            products: Yup.array()
                .required()
                .of(
                    Yup.object({
                        id: Yup.number().required(),
                        quantity: Yup.number().required(),
                        price: Yup.number().required(),
                    }),
                ),
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }

        const { products } = request.body;

        const amount = calculateOrderAmount(products)

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "brl",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        response.json({
            clientSecret: paymentIntent.client_secret,
        });
    }
}

export default new CreatePaymentIntentController();
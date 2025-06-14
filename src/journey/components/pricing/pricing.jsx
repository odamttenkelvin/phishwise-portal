import React, { useState } from 'react';
import { createCheckoutSession } from '/src/services/api.jsx';

const plans = [
    { id: "basic", name: "Free Trial", price: "£0", description: "7-day trial access" },
    { id: "monthly", name: "Monthly", price: "£10/mo", description: "Cancel anytime" },
    { id: "yearly", name: "Yearly", price: "£100/yr", description: "Save 20%" },
];

export default function Pricing() {
    const [email, setEmail] = useState("");

    const handleCheckout = async (plan) => {
        const url = await createCheckoutSession(email, plan);
        window.location.href = url;
    };

    return (
        <div>
            <h2>Choose Your Plan</h2>
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                {plans.map((plan) => (
                    <div key={plan.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
                        <h3>{plan.name}</h3>
                        <p>{plan.price}</p>
                        <p>{plan.description}</p>
                        <button onClick={() => handleCheckout(plan.id)}>Subscribe</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
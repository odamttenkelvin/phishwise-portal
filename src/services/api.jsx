import axios from 'axios';

const BASE_URL = "http://localhost:8000/api";

export const generatePhishingEmail = async (role, theme) => {
    const response = await axios.post(`${BASE_URL}/generate-phishing`, { role, theme });
    return response.data.phishing_email;
};

export const createCheckoutSession = async (email, plan) => {
    const response = await axios.post(`${BASE_URL}/create-checkout-session`, { email, plan });
    return response.data.checkout_url;
};

import React, { useState } from 'react';
import { generatePhishingEmail } from '/src/services/api.jsx';

export default function PhishingGenerator() {
    const [role, setRole] = useState('');
    const [theme, setTheme] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await generatePhishingEmail(role, theme);
        setEmail(result);
    };

    return (
        <div>
            <h2>Phishing Email Generator</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Target Role" value={role} onChange={e => setRole(e.target.value)} />
                <input placeholder="Theme" value={theme} onChange={e => setTheme(e.target.value)} />
                <button type="submit">Generate</button>
            </form>
            {email && (
                <div>
                    <h4>Generated Email</h4>
                    <pre>{email}</pre>
                </div>
            )}
        </div>
    );
}

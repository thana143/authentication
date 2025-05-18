    const jwt = require('jsonwebtoken');

    const payload = { userId: 123, role: 'admin' };
    const secretKey = 'your_secret_key'; // Keep this secret!

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    console.log(token);
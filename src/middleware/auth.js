const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        tok = req.headers.authorization;

        if (!tok) {
            return res.status(401).json({ error: 'Authorization required' });
        }

        const token = tok.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) { 
        return res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = authMiddleware;
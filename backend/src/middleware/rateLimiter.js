import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    console.log("RATE LIMITER WAS CALLED");

    try {
        const result = await ratelimit.limit(req.ip);

        console.log("RATE LIMIT RESULT:", result);

        if (!result.success) {
            return res.status(429).json({
                message: "Too many requests",
            });
        }

        next();
    } catch (error) {
        console.log("RATE LIMIT ERROR:", error);
        next(error);
    }
};

export default rateLimiter;
import jwt from "jsonwebtoken";

export const AuthMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader) {
      return res.status(401).send({
        message: "Invalid token",
      });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, paylod) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized",
        });
      }
    });

    next();
  } catch (err) {
    next(err);
  }
};

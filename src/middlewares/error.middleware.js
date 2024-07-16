export const errorMiddleware = (err, req, res, next) => {
  res.status(400).send({
    message: "Something went wrong. " + err,
  });
  next();
};

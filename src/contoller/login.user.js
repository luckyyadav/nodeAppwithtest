import prisma from "../config/db.js";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.register.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(400).send({
        message: "User not found",
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({
        message: "Invalid user name and password",
      });
    }

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "365d",
    });

    return res.status(200).send({
      message: "logged in succesfully",
      token: "Bearer " + token,
    });
  } catch (err) {
    next(err);
  }
};

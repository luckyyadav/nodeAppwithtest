import prisma from "../config/db.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
  let { name, phone, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);
  console.log(password);
  try {
    // validate for requied fileds
    if (!name || !phone || !email || !password) {
      const missingFields = [];
      if (!name) missingFields.push("name");
      if (!email) missingFields.push("email");
      if (!phone) missingFields.push("phone");
      if (!password) missingFields.push("password");

      return res.status(400).send({
        message: "fileds are missing. " + missingFields.join(", "),
      });
    }

    // check for password length and 1 capitalletter and 1 special charcater
    // if (password) {
    //   const passwordLength = password.length > 8;
    //   /* const AtleastOneCapitalCharacter = /^[A-Z]/.test(password); */
    //   const testSpecialChar =
    //     /^[A-Z].*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    //   if (!passwordLength || !testSpecialChar) {
    //     return res.status(400).send({
    //       message:
    //         "Check password length it should be minimum 8 chracter and has atleast 1 special charcter and 1 capital letter.",
    //     });
    //   }
    // }

    // check for email
    const userExists = await prisma.register.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      return res.status(400).send({
        message: "user with this email exists. Please try another or login",
      });
    }

    const user = await prisma.register.create({
      data: {
        name,
        phone,
        email,
        password,
      },
    });

    res.status(201).send({
      message: "User is created",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const allUsers = async (req, res, next) => {
  try {
    const users = await prisma.register.findMany({});
    res.status(200).send({
      message: "All users fetched",
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

export const singleUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await prisma.register.findFirst({
      where: {
        id: Number(userId),
      },
    });

    res.status(200).send({
      message: "single user is fetched.",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, phone, email, password } = req.body;
  const userId = req.params.id;
  try {
    const updatedUser = await prisma.register.update({
      where: {
        id: Number(userId),
      },
      data: {
        name,
        phone,
        email,
      },
    });

    res.status(200).send({
      message: "user is updated.",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    await prisma.register.delete({
      where: {
        id: Number(userId),
      },
    });

    res.status(200).send({
      message: "user is deleted.",
    });
  } catch (err) {
    next(err);
  }
};

export const externalAPi = (req, res, next) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((response) => {
      res.status(200).send({
        message: "External API fetch.",
        data: response,
      });
    });
};

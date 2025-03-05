const userModel = require("../models/userModel");

const createUserService = async ({ name, email, password }) => {
  if (!name) {
    throw new Error("Name is required");
  }
  if (!email) {
    throw new Error("Email is required");
  }
  if (!password) {
    throw new Error("Password is required");
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};

const loginUserService = async ({ email, password }) => {
  if (!email) {
    throw new Error("Email is required");
  }
  if (!password) {
    throw new Error("Password is required");
  }

  const user = await userModel.findOne({ email }).select("+password");
  return user;
};

module.exports = { createUserService, loginUserService };

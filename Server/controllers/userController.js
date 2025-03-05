const { validationResult } = require("express-validator");
const { createUserService } = require("../sevices/userService");

const userSignup = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, password } = req.body;

    const user = await createUserService({ name, email, password });

    const token = await user.generateJWT();

    res.cookie("token", token);
    return res.status(201).json({ user, token });

  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

module.exports = { userSignup };

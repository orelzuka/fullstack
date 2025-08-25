import User from "../models/user.schema.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ message: "Déjà inscrit" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();
    res.status(200).json({ message: "Utilisateur enregistré" });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  console.log(req.body);
};

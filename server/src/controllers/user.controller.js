import User from "../models/user.schema.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
    const secondUser = await User.findOne({ username });

    const hashedPassword = await bcrypt.hash(password, 10);

    if (user || secondUser) {
      res.status(400).json({ message: "Déjà inscrit" });
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({ message: "Utilisateur enregistré" });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { data, password } = req.body;
  let user;

  const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

  if (emailRegex.test(data)) {
    user = await User.findOne({ data });
  } else {
    user = await User.findOne({ data });
  }

  if (!user) {
    res.status(400).json({ message: "Email et/ou mot de passe incorrect" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Mot de passe incorrect" });
  }

  res.status(200).json({ user, message: "Connexion réussie" });
};

import jwt from "jsonwebtoken";

const checkToken = (req, res, next, role) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).json({ message: "You are not authorized" });
    }
    const ogToken = token.split(" ")[1];

    const isValid = jwt.verify(
      ogToken,
      "weuqgeihrhkdfksbvakdvlakejeqoidoihmvbccqfbifboifabhvbakhdjvfkhsbbdsb"
    );

    // if (isValid.role == "role")----(only for 1 role)
    if (role.includes(isValid.role)) {
      next();
    } else {
      throw Error("You are not authorized");
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export default checkToken;

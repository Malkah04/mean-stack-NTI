const jwt = require("jsonwebtoken");

async function auth0(req, res, next) {
  const { authorization } = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ message: "login first" });
  }

  try {
    const decoded = await jwt.verify(
      authorization.splite(" ")[1],
      process.env.SECRET_KEY
    );
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "login" });
  }
}

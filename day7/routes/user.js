const {
  getAllUsers,
  createUser,
  updateUserByEmail,
} = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.put("/", updateUserByEmail);

module.exports = router;

const express = require("express");
const {
  getAllUsers,
  register,
  login,
  updateUserById,
  deleteUserById,
  getById,
} = require("../controllers/user");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", register);
router.post("/login", login);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);
router.get("/:id", getById);

module.exports = router;

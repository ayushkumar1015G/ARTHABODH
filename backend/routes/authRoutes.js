const express = require("express");
const upload = require("../middlerware/uploadMiddleware");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");

const {protect} = require("../middlerware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);
router.post("/upload_image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({message: "No file uploaded"});
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  res.status(200).json({imageUrl});
});

module.exports = router;

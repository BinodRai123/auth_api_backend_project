const expresss = require("express");
const router = expresss.Router();
const multer = require("multer");
const authMiddleware = require("../middlewares/auth.middleware");
const { postController } = require("../controllers/post.controller");

const upload = multer({storage: multer.memoryStorage()});

router.post(
    "/",
    authMiddleware,
    upload.single("image"),
    postController
)



module.exports = router;
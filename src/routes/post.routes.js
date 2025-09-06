const expresss = require("express");
const { postController } = require("../controllers/post.controller");

const router = expresss.Router();

router.post("/",postController)



module.exports = router;
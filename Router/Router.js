var express = require("express")
const { getProduct, AddProduct, DeletProduct, UpdateProduct, findProduct, deletProducts } = require("../Controllers/Controller")
var router = express.Router()
router.get("/get/",getProduct)
router.post("/post/",AddProduct)
router.delete("/delete/:id",DeletProduct)
router.put("/update/:id",UpdateProduct)
router.get("/get/:id",findProduct)
router.delete("/delete/",deletProducts)

module.exports = router
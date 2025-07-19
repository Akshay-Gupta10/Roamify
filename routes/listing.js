if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

//Creating the routes so that our code remains modular and have similar routes at a single place
const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer=require("multer")
const {storage}=require("../cloudConfig.js")
const upload=multer({storage })


//Same path ki diff req ko likhne ka compact version
router.route("/")
.get(wrapAsync(listingController.index)) //Index Route
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.createListing)) //Create Route


//New Route (ye wala show route se upr rhega wrna new ko as an id smjh lia jyega)
router.get("/new",isLoggedIn,listingController.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingController.showListing)) //Show Route
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing, wrapAsync(listingController.updateListing)) //Update Route
.delete(isLoggedIn,isOwner,wrapAsync(listingController.deleteListing)) //Delete Route


//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm))


module.exports=router;
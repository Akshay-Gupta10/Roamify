const express=require("express");
const router=express.Router({mergeParams:true}); //jab id bhejte hai tab wo app.js me hi rh jati hai isliye hm mergeParams ko use krte
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");

//Post Review Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview))

//Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview))

module.exports=router;

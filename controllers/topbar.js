const Listing=require("../models/listing");

module.exports.renderRoom=async(req,res)=>{
    const listings=await Listing.find({category:"room"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderCity=async(req,res)=>{
    const listings=await Listing.find({category:"city"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderCastle=async(req,res)=>{
    const listings=await Listing.find({category:"castle"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderMountain=async(req,res)=>{
    const listings=await Listing.find({category:"mountain"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderPool=async(req,res)=>{
    const listings=await Listing.find({category:"pool"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderArctic=async(req,res)=>{
    const listings=await Listing.find({category:"arctic"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderCamping=async(req,res)=>{
    const listings=await Listing.find({category:"camping"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderFarm=async(req,res)=>{
    const listings=await Listing.find({category:"farm"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderDome=async(req,res)=>{
    const listings=await Listing.find({category:"dome"})
    res.render("listings/topbar.ejs",{listings});
}

module.exports.renderBoat=async(req,res)=>{
    const listings=await Listing.find({category:"boat"})
    res.render("listings/topbar.ejs",{listings});
}
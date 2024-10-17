const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName : {
        type:String,
        required:true
    },
    productImage :{
        type: [String], 
        required: false // some can have just 1 image. dont want to make multiple image compulsory
    },
    descriptiom :{
        type:String,
        required:true
    },
category :{
    type:String,
    required:true  
},
typeOfProduct : {
    type:String,
    required:true  
},
price:{
    type:Number,
    required:true
},
stock:{
    type:Number,
    required:true
}

},{timestamps:true})


const Product = mongoose.model("Product",productSchema);
module.exports = Product;




//Controller code to store multiple images in cloudinary
// Uploading Images to Cloudinary
// You can use the Cloudinary Node.js SDK to upload images and then save the returned URLs in your MongoDB document. Here’s a basic example of how you might handle this:
// ------------------------------------------------------------------------------------------
// const cloudinary = require('cloudinary').v2;
// const Product = require('./models/Product'); // Adjust the path as necessary

// // Configure Cloudinary
// cloudinary.config({
//     cloud_name: 'YOUR_CLOUD_NAME',
//     api_key: 'YOUR_API_KEY',
//     api_secret: 'YOUR_API_SECRET'
// });

// // Function to upload images and save product
// async function uploadProductImages(images, productName) {
//     try {
//         // Upload each image to Cloudinary
//         const uploadPromises = images.map(image => 
//             cloudinary.uploader.upload(image)
//         );

//         const uploadResults = await Promise.all(uploadPromises);
//         const imageUrls = uploadResults.map(result => result.secure_url);

//         // Create a new product document
//         const newProduct = new Product({
//             productName,
//             productImage: imageUrls
//         });

//         await newProduct.save();
//         console.log('Product saved successfully:', newProduct);
//     } catch (error) {
//         console.error('Error uploading images or saving product:', error);
//     }
// }


// ===============

// Usage
// Call the uploadProductImages function with an array of image file paths (or base64 strings) and the product name:

// const images = ['path_to_image1', 'path_to_image2']; // Replace with actual image paths
// uploadProductImages(images, 'Sample Product Name');
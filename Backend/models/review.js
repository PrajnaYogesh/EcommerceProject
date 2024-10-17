const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true
    },
    comments: {
        type: String,
        required: true,
        trim: true // Optional: trims whitespace from the comments
    },
    rating: {
        type: Number,
        required: true,
        min: 1, // Minimum rating
        max: 5  // Maximum rating
    }
},{timestamps:true});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
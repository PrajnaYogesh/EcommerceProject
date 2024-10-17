const mongoose = require('mongoose');

const saveForLaterSchema = new mongoose.Schema({
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
    quantity: {
        type: Number,
        required: true,
        min: 1 // Ensure quantity is at least 1
    }
},{timestamps:true});

const SaveForLater = mongoose.model('SaveForLater', saveForLaterSchema);

module.exports = SaveForLater;
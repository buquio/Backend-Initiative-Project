const mongoose =require('mongoose');

const rentalSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true,required: true },
      receiptNumber: { type: Number, required: true},
      orderNumber: { type: Number, required: true},
      movieTitle: { type: String, required: true },
      rentDate: { type: Date, required: true},
      returnDate: { type: Date, required: true}
  },
  { timestamps: true }
);

const Rentals = mongoose.model('Rentals', rentalSchema);
module.exports = Rentals;

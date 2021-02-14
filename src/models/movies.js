const mongoose =require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    actor: { type: String, required: true },
    producer : { type: String, required: true },
    rating: { type: Number, required: true }

  },
  { timestamps: true }
);

const Movies = mongoose.model('Movies', movieSchema);
module.exports = Movies;

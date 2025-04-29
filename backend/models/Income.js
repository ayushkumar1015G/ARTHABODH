const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    icon: {
      type: String,
    },
    source: {
      type: String,
      required: true,
    }, // Example: Salary, Freelance, etc.
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Note: Fixed typo - was 'timestamp' (singular), should be 'timestamps' (plural)
  }
);

module.exports = mongoose.model("Income", IncomeSchema);

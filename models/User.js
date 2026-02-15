const mongoose = require("mongoose");

const urlRegex = /^https?:\/\/.+/i;                 // http:// or https://
const zipRegex = /^\d{5}-\d{4}$/;                   // 12345-1234
const phoneRegex = /^\d-\d{3}-\d{3}-\d{4}$/;         // 1-123-123-1234
const cityRegex = /^[A-Za-z ]+$/;                   // alphabets + spaces only
const emailRegex = /^\S+@\S+\.\S+$/;                // basic email

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      minlength: [4, "username must be at least 4 characters"],
      maxlength: [100, "username must be at most 100 characters"],
      trim: true
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [emailRegex, "email must be a valid email address"]
    },

    city: {
      type: String,
      required: [true, "city is required"],
      trim: true,
      match: [cityRegex, "city must contain only alphabets and spaces"]
    },

    website: {
      type: String,
      required: [true, "website is required"],
      trim: true,
      match: [urlRegex, "website must be a valid URL starting with http or https"]
    },

    zipcode: {
      type: String,
      required: [true, "zipcode is required"],
      match: [zipRegex, "zipcode must be in format 12345-1234"]
    },

    phone: {
      type: String,
      required: [true, "phone is required"],
      match: [phoneRegex, "phone must be in format 1-123-123-1234"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

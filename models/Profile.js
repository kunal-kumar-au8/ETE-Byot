const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  fullName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  personalDocument: {
    birthCertificate: {
      type: String,
      required: true,
    },
    drivingLicence: {
      type: String,
      required: true,
    },
    passport: {
      type: String,
      required: true,
    },
    electionCard: {
      type: String,
      required: true,
    },
  },
  addVehicle:[
    {
        serviceType:{
            type: String,
        },
        brand:{
            type: String,
        },
        model:{
            type: String,
            required: true
        },
        manufacturer:{
            type: String,
            required: true
        },
        numberPlate:{
            type: String,
            required: true
        },
        color:{
            type: String,
        },
    },
  ],
  vehicleDocument:{
    rcBook:{
        type: String,
        required: true
    },
    insurancePolicy:{
        type: String,
        required: true
    },
    OwnerCertificate:{
        type: String,
        required: true
    },
    puc:{
        type: String,
        required: true
    },
  }
});

module.exports = Profile = mongoose.model('profile',ProfileSchema);
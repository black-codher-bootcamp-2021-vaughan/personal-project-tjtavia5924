const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  
        photo: String,
        first_name: String,
        last_name: String,
        DOB: Number,
        address: String,
        postcode: String,
        tel_No : Number ,
        email_address: String,
        siblings: String,
        children : Number,
        likes : String,
        dislikes: String,
        occupation: String,
        first_met: String,
        when: String,
        Last_contacted: String,
        estimated_date_for_next_contact: Number,

});

mongoose.model("profiles", profileSchema);

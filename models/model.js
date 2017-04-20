var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
   TransactionName:  { type: String, required: true, unique: true },
   TransactionNameURL: { type: String, required: true, unique: true },
   CompanyName: { type: String, required: true, unique: false },
   CompanyNameURL: { type: String, required: true, unique: false },
   FundingType: { type: String, required: true, unique: false },
   MoneyRaised: { type: String, required: true, unique: false, default: 'undisclosed' },
   AnnouncedOnDate: { type: String, required: true, unique: false },
   Location: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('rounds', userSchema)


    // username: { type: Number, required: true, unique: false },
    // messageDate: { type: Date, required: true },
    // message: { type: String, required: false, default: 0 },
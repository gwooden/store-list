var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ListInstanceSchema = new Schema(
  {
    list: { type: Schema.Types.ObjectId, ref: 'List', required: true }, //reference to the associated list
    status: {type: String, required: true, enum: ['Ready', 'In Use'], default: 'Ready'},
    usedOn: {type: Date, default: Date.now}
  }
);

// Virtual for bookinstance's URL
ListInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/listinstance/' + this._id;
});

//Export model
module.exports = mongoose.model('ListInstance', ListInstanceSchema);

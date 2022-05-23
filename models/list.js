var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ListSchema = new Schema(
  {
    title: {type: String, required: true},
    shopper: {type: Schema.Types.ObjectId, ref: 'Shopper', required: true},
    summary: {type: String, required: true},
    listType: {type: String, required: true, enum: ['Grocery', 'HardWare'], default: 'Grocery'}
  }
);

// Virtual for list's URL
ListSchema
.virtual('url')
.get(function () {
  return '/catalog/list/' + this._id;
});

//Export model
module.exports = mongoose.model('List', ListSchema);

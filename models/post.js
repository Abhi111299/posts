import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    max: 70,
    required: [true]
  },
  description: {
    type: String,
    default: String,
  },
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at', // and `updated_at` to store the last updated date,
    type: Date,
    default: Date.now(0)
  }
});


PostSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

PostSchema.set('toJSON', {
  virtuals: true,
});


const PostModel = mongoose.model('Project', PostSchema);
export default PostModel
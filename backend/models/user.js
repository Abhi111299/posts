import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
dotenv.config();

const UserSchema = new Schema({
  f_name: {
    type: String,
    max: 20,
    required: [true],
  },
  l_name: {
    type: String,
    max: 20,
    required: [true]
  },
  email: { 
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Invalid email format'],
    unique: true
    /*
    commented this validation as I was not able to fix it in the given time frame as it requires more debugging but unique email is still working to make sure that duplicate records doesn't get created
    */

  //   validate: {
  //     validator: async function(email) {
  //       const count = await this.model('User').count({ email }).exec();
  //       return !count;
  //     },
  //     message: props => `${props.value} is Already in use, please use different email`
  //   },
   },
  password: {
    type: String,
    required: [true],
    select: false
  },
  email_confirmed: {
    type: Boolean,
    default: false
  },
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at', // and `updated_at` to store the last updated date,
    type: Date,
    default: Date.now(0)
  }
});

UserSchema.pre('save', async function save(next) {
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR));
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    console.error(`Errored while saving the password in hash form for user ${this.email}`);
    console.error(err);
    return next(err);
  }
});


UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

UserSchema.set('toJSON', {
  virtuals: true,
});


const UserModel = mongoose.model('User', UserSchema);
export default UserModel
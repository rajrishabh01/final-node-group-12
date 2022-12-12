import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
                                        type: {type: String, enum: ['ADMIN', 'REGULAR', 'PRO']},
                                        username: {type: String, unique: true, required: true},
                                        password: {type: String, required: true},
                                        handle: String,
                                        profile_image: String,
                                        bio: String,
                                        dob: Date,
                                        location: String,
                                        email: String,
                                        phone: String,
                                        firstName: String,
                                        lastName: String
                                    }, {collection: 'users'});
export default usersSchema;
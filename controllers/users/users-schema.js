import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
                                        type: String,
                                        username: String,
                                        password: String,
                                        handle: String,
                                        profile_image: String,
                                        bio: String,
                                        dob: Date,
                                        location: String,
                                        email: String,
                                        phone: String,
                                        reviews_list: Array[String],
                                        recipes_list: Array[String],
                                        followers: Array[String],
                                        following: Array[String]

                                    }, {collection: 'users'});
export default usersSchema;
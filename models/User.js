const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                },
                message: props => `${props.value} is not a valid email address!`
            },
            required: [true, 'User email is required']
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[A-Za-z]\w{7,14}$/.test(v);
                },
                message: props => `Password not secure. Please create a password between 7-14 characters long.`
            },
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    },
);

//virtual to get the total user count
userSchema
    .virtual('userCount')
    // Getter
    .get(function () {
        return this.length;
    });

const User = model('user', userSchema);
module.exports = User;


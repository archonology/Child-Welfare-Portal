const { Schema, model } = require('mongoose');
const subscriberSchema = new Schema(
    {
        subscriberName: {
            type: String,
            required: true,
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
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    },
);

//this will get the number of total subscribers.
subscriberSchema
    .virtual('subscriberCount')
    // Getter
    .get(function () {
        return this.length;
    });

const Subscriber = model('subscriber', subscriberSchema);
module.exports = Subscriber;
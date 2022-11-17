const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ssisSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            minLength: 1,
            maxLength: 280,
        },
        textBody: {
            type: String,
        },
        link: {
            type: String,
            require: true,
            validate: {
                validator: function (v) {
                    return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(v);
                },
                message: props => `${props.value} is not a valid URL. Please check the address and try entering it again.`
            },
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //set a custom format for date
            get: timestamp => dateFormat(timestamp)
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    },
);

//this will get the length of items in the ssis table.
ssisSchema
    .virtual('resourceCount')
    // Getter
    .get(function () {
        return this.length;
    });

const Ssis = model('ssis', ssisSchema);
module.exports = Ssis;
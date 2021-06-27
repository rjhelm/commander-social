const { Schema, model } = require('mongoose');
const User = require('./User');

const groupSchema = new Schema(
    {
        groupName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
        admin: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        subscribedBy: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        subscriberCount: {
            type: Number,
            default: 1,
        },
    },
    {
        timestamps: true,
    }
)

const Group = model('Group', groupSchema);

module.exports = Group;
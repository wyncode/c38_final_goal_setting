const mongoose = require('mongoose'),
  moment = require('moment');

const storySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    dueDate: {
      type: Date
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    chapters: [
      {
        dueDate: {
          type: Date
        },
        completed: {
          type: Boolean
        },
        description: {
          type: String
        }
      }
    ],
    category: {
      enum: [
        'Fitness',
        'Education',
        'Finance',
        'Professional',
        'Social',
        'Health'
      ]
    }
  },
  {
    timestamps: true
  }
);

storySchema.methods.toJSON = function () {
  const story = this;
  const storyObject = story.toObject();
  if (storyObject.dueDate) {
    storyObject.dueDate = moment(storyObject.dueDate).format('YYYY-MM-DD');
  }
  return storyObject;
};

const Story = mongoose.model('Story', storySchema);

module.exports = Story;

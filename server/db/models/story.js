const mongoose = require('mongoose'),
  moment = require('moment');

const storySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    reflections: [
      {
        title: {
          type: String
        },
        notes: {
          type: String
        },
        emoji: {
          type: String
        }
      }
    ],
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
    category: {
      type: String,
      enum: [
        'fitness',
        'education',
        'finance',
        'professional',
        'social',
        'health'
      ]
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
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

// storySchema.virtual('suggestions').get(function () {
//   if (this.category === 'fitness') {
//     return fitnessArray;
//   }
// });
// storySchema.methods.generateSuggestions = async function () {
//   const story = this;
//   if (story.category === 'fitness') {
//     story.suggestions = fitnessArray.fitnessArray;
//   }
//   return story;
// };

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

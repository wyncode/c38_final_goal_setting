const mongoose = require('mongoose'),
  moment = require('moment');

const goalSchema = new mongoose.Schema(
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
        },
        image: {
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
        'Fitness',
        'Education',
        'Finance',
        'Professional',
        'Social',
        'Health'
      ]
    },
    dailyTask: {
      done: { type: Boolean, default: false },
      lastUpdated: { type: Date }
    },
    bonus: {
      done: { type: Boolean, default: false },
      lastUpdated: { type: Date },
      description: { type: String }
    },
    reflected: {
      done: { type: Boolean, default: false },
      lastUpdated: { type: Date }
    },
    milestones: [
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

goalSchema.methods.toJSON = function () {
  const goal = this;
  const goalObject = goal.toObject();
  if (goalObject.dueDate) {
    goalObject.dueDate = moment(goalObject.dueDate).format('YYYY-MM-DD');
  }
  return goalObject;
};

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;

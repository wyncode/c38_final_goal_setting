const router = require('express').Router(),
  mongoose = require('mongoose'),
  Goal = require('../../db/models/goal');

// ***********************************************//
// Create a goal
// ***********************************************//
router.post('/api/goals', async (req, res) => {
  const { description, dueDate, completed, milestones, category } = req.body;
  try {
    const goal = new Goal({
      description,
      dueDate,
      completed,
      milestones,
      category,
      owner: req.user._id
    });
    await goal.save();
    res.status(201).json(goal);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ***********************************************//
// Fetch a goal by id
// ***********************************************//
router.get('/api/goals/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(400).json({ error: 'not a valid goal id' });
    const goal = await Goal.findOne({ _id, owner: req.user._id });
    if (!goal) return res.sendStatus(404);
    res.json(goal);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ***********************************************//
// Get all goals
// /goals?completed=true
// /goals?limit=10&skip=10
// /goals?sortBy=createdAt:asc
// /goals?sortBy=dueDate:desc
// ***********************************************//
router.get('/api/goals', async (req, res) => {
  try {
    const match = {},
      sort = {};
    console.log(req.query);
    if (req.query.completed) {
      match.completed = req.query.completed === 'true';
    }
    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(':');
      sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    }
    await req.user
      .populate({
        path: 'goals',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.json(req.user.goals);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ***********************************************//
// Delete a goal
// ***********************************************//
router.delete('/api/goals/:id', async (req, res) => {
  try {
    const goal = await Goal.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!goal) throw new Error('goal not found');
    res.json(goal);
  } catch (error) {
    res.status(404).json({ error: error.toString() });
  }
});

// ***********************************************//
// Update a goal
// ***********************************************//
router.patch('/api/goals/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'description',
    'completed',
    'dueDate',
    'milestones',
    'category',
    'dailyTask',
    'bonus',
    'reflected',
    'reflections'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const goal = await Goal.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!goal) return res.status(404).json({ error: 'goal not found' });
    updates.forEach((update) => (goal[update] = req.body[update]));
    await goal.save();
    res.json(goal);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// ***********************************************//
// Delete a milestone milestoneid&goalid
// ***********************************************//
router.delete('/api/goal/:sid/milestone/:cid', async (req, res) => {
  try {
    console.log(req.params);
    const goal = await Goal.findOne({
      _id: req.params.sid,
      owner: req.user._id
    });
    if (!goal) throw new Error('goal not found');

    const index = goal.milestones.findIndex(
      (milestone) => milestone._id == req.params.cid
    );

    goal.milestones.splice(index, 1);
    await goal.save();
    res.json(goal);
  } catch (error) {
    res.status(404).json({ error: error.toString() });
  }
});

// ***********************************************//
// Update a milestone by milestoneid&goalid
// ***********************************************//
router.patch('/api/goal/:sid/milestone/:cid', async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed', 'dueDate'];

    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation)
      return res.status(400).send({ error: 'Invalid updates!' });

    const goal = await Goal.findOne({
      _id: req.params.sid,
      owner: req.user._id
    });

    const index = goal.milestones.findIndex(
      (milestone) => milestone._id == req.params.cid
    );
    if (!goal) return res.status(404).json({ error: 'goal not found' });
    updates.forEach(
      (update) => (goal.milestones[index][update] = req.body[update])
    );
    await goal.save();
    res.json(goal);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// ***********************************************//
// Create a milestone goalid
// ***********************************************//

router.post('/api/goal/:sid/milestone/', async (req, res) => {
  try {
    const goal = await Goal.findOne({
      _id: req.params.sid,
      owner: req.user._id
    });
    if (!goal) return res.status(404).json({ error: 'goal not found' });
    goal.milestones.push(req.body);
    await goal.save();
    res.json(goal);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// ***********************************************//
// update a daily tasks goalid
// ***********************************************//

module.exports = router;

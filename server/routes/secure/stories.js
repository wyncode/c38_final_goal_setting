const router = require('express').Router(),
  mongoose = require('mongoose'),
  Story = require('../../db/models/story');

// ***********************************************//
// Create a story
// ***********************************************//
router.post('/api/stories', async (req, res) => {
  const { description, dueDate, completed, chapters, category } = req.body;
  try {
    const story = new Story({
      description,
      dueDate,
      completed,
      chapters,
      category,
      owner: req.user._id
    });
    await story.save();
    res.status(201).json(story);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ***********************************************//
// Fetch a story by id
// ***********************************************//
router.get('/api/stories/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(400).json({ error: 'not a valid story id' });
    const story = await Story.findOne({ _id, owner: req.user._id });
    if (!story) return res.sendStatus(404);
    res.json(story);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ***********************************************//
// Get all stories
// /stories?completed=true
// /stories?limit=10&skip=10
// /stories?sortBy=createdAt:asc
// /stories?sortBy=dueDate:desc
// ***********************************************//
router.get('/api/stories', async (req, res) => {
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
    console.log(req.user);
    await req.user
      .populate({
        path: 'stories',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.json(req.user.stories);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

// ***********************************************//
// Delete a story
// ***********************************************//
router.delete('/api/stories/:id', async (req, res) => {
  try {
    const story = await Story.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!story) throw new Error('story not found');
    res.json(story);
  } catch (error) {
    res.status(404).json({ error: error.toString() });
  }
});

// ***********************************************//
// Update a story
// ***********************************************//
router.patch('/api/stories/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed', 'dueDate'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const story = await Story.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!story) return res.status(404).json({ error: 'story not found' });
    updates.forEach((update) => (story[update] = req.body[update]));
    await story.save();
    res.json(story);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

module.exports = router;

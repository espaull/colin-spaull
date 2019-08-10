const express = require('express');
const Joi = require('@hapi/joi');
const User = require('../models/user');

const router = express.Router();

const users = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Elliot' },
  { id: 3, name: 'Colin' },
];

router.use(express.json());

router.get('/', async (req, res) => {
  const users = await User.find({});

  return res.send(users);
});

router.get('/:name', async (req, res) => {
  const name = req.params.name;
  let user;

  try {
    user = await User.find({ name });

    if (user.length === 0) return res.status(404).send('User not found');
  } catch (err) {
    return res.status(400).send(err);
  }

  return res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    password: req.body.password,
    roles: ['Admin', 'Editor'],
  });

  let result;

  try {
    result = await user.save();

    return res.send(result);
  } catch (err) {
    return res.status(500).send('Saving to MongoDB failed...');
  }
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const genre = users.find(g => g.id === id);

  if (!genre)
    return res.status(404).send('No genre with the given ID was found');

  const { error } = validateGenre(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;

  return res.send(genre);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send('User not found');
    } else {
      return res.status(204);
    }
  } catch (err) {
    return res.status(500).send('Failed to delete User', err.message);
  }
});

const validateUser = user => {
  const schema = Joi.object().keys({
    name: Joi.string()
      .min(2)
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  });

  return Joi.validate(user, schema);
};

module.exports = router;

const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
const auth = require('../middleware/auth');

// Get all persons
router.get('/', auth, async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new person
router.post('/', auth, async (req, res) => {
  const person = new Person(req.body);
  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a person
router.put('/:id', auth, async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }
    
    Object.assign(person, req.body);
    const updatedPerson = await person.save();
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a person
router.delete('/:id', auth, async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }
    
    await person.remove();
    res.json({ message: 'Person deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
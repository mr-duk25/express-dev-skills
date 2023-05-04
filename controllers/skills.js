// controllers/todos.js


// we call variables that hold/reference models singular and in uppercase
const Skill = require('../models/skill')


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit
};

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit Skill',
    skill
  });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', {
    title: 'New Skill'
  });
}

function show (req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Skill Details'
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: 'Skill Details'
  });
}
    
const skills = [
    {id: 125220, skill: 'HTML/CSS', learned: true},
    {id: 127918, skill: 'Javascript', learned: false},
    {id: 139655, skill: 'Express', learned: false}
  ];
	
  module.exports = {
    getAll, 
    getOne, 
    create,
    deleteOne,
    update
  };

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill)
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create (skill) {
    // add the id
    skill.id = Date.now() % 1000000;
    // new skills wouldnt be learned 
    skill.learned = false;
    skills.push(skill);
  }

	
  function getAll() {
    return skills;
  }

  function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
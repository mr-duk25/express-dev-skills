const skills = [
    {id: 125220, skill: 'HTML/CSS', learned: true},
    {id: 127918, skill: 'Javascript', learned: false},
    {id: 139655, skill: 'Express', learned: false}
  ];
	
  module.exports = {
    getAll, 
    getOne
  };

	
  function getAll() {
    return skills;
  }

  function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
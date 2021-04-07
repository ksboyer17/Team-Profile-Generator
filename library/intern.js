class Intern {
	constructor(name, id, school, email) {
		this.name = name;
		this.id = id;
		this.school = school;
		this.email = email;
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}
	getSchool() {
		return this.school;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return 'Intern'
	}
}

module.exports = Intern;
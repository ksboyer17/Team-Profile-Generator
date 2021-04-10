// import modules -> Employee subclasses, fs, inquirer, path, page-template, questions
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const pageTemplate = require('./page-template/template.js');
const Engineer = require('./library/Engineer.js');
const Intern = require('./library/Intern.js');
const Manager = require('./library/Manager');

// use path module to define the path to the output directory
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// create an array to hold all of our team members
teamMembers = [];
// init function
function init() {
	createManager();
}

// function to create a manager
function createManager(){
	inquirer.prompt(
		[{
			type: 'input',
			name: 'name',
			message:'What is your name?',
		},
		{
			type: 'input',
			name: 'email',
			message:'What is your email?',
		},
		{
			type: 'input',
			name: 'id',
			message:'What is your ID?',

		},
		{
			type: 'input',
			name: 'office',
			message:'Where is your office?',
		}])

	.then( ( { name, id, email, office } ) => {
		const manager = new Manager( name, id, email, office );
		teamMembers.push( manager );
		createTeam();
	} )
}


  
// function to create the rest of the team
	// prompt user to select which type of employee they would like to add
	// options include engineer, intern, or an option to not add any more team members
	// .then statement
		// if a type of employee was selected, call function to add that type of employee
		// if the other option was selected, call the function to create the output
function createTeam() {
	inquirer.prompt(
		[{
			type: 'list',
			name: 'role',
			message:'What type of team member would you like to add?',
			choices: [
				"Manager","Engineer","Intern","None"
			]
		}
	]
	).then( ( { role } ) => {
		// if else statements
		// if a type of employee was selected, call function to add that type of employee
		// if the other option was selected, call the function to create the output
		//
		if (role === "Engineer") {
			createEngineer();
		} else if (role === "Intern") {
			createIntern();
		} else if (role === "Manager") { 
			createManager();
		} else {
			generateOutput();
		}
	})

}
	

// function to add an engineer
	// same idea as create manager
function createEngineer() {
	inquirer.prompt(
		[{
			type: 'input',
			name: 'name',
			message:'What is your name?',
		},
		{
			type: 'input',
			name: 'email',
			message:'What is your email?',
		},
		{
			type: 'input',
			name: 'id',
			message:'What is your ID?',

		},
		{
			type: 'input',
			name: 'github',
			message:'What is your GitHub username?',
		}]
	).then( ( { name, id, email, github } ) => {
		const engineer = new Engineer( name, id, email, github );
		teamMembers.push( engineer );
		createTeam();
	})
}
  
// function to add an intern
	// same idea as create manager
function createIntern() {
	inquirer.prompt(
		[{
			type: 'input',
			name: 'name',
			message:'What is your name?',
		},
		{
			type: 'input',
			name: 'email',
			message:'What is your email?',
		},
		{
			type: 'input',
			name: 'id',
			message:'What is your ID?',

		},
		{
			type: 'input',
			name: 'school',
			message:'What school do you attend?',
		}]
	).then( ( { name, id, email, school } ) => {
		const intern = new Intern( name, id, email, school );
		teamMembers.push( intern );
		createTeam();
	})
}

// function to create the output
	// call the function from page-template module and pass in the team members array and save to a data variable
	// use fs module to write the a file -> pass in the fs.write(outputPath, the data, and "utf-8")
function generateOutput() {
	if (!fs.existsSync( OUTPUT_DIR )){
		fs.mkdirSync( OUTPUT_DIR );
	}
	
	fs.writeFileSync( outputPath, pageTemplate( teamMembers ) );
	console.log( "Have a nice day!" );
}
		
	
	
  // call the function to create a manager to start the process

init();
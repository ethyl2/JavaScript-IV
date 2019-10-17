/*
Lambda personnel can be broken down into three different types of `people`.
* **Instructors** - extensions of Person
* **Students** - extensions of Person
* **Project Managers** - extensions of Instructors
* **IMPORTANT** - You'll need to create 2 - 3 objects 
for each class and test them according to their unique Attributes.

Example:
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
*/

/*
Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` 
    where `name` and `location` are the object's own props
*/

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    speak = function() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

const comfyCliff = new Person({
    name: 'Cliff Crouch',
    age: 55,
    location: 'California'
});

comfyCliff.speak();

const heroicHenry = new Person({
    name: 'Henry Howard',
    age: 12,
    location: 'New Hampshire'
});

heroicHenry.speak();

/*
Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument 
  *  and logs out the phrase 'Today we are learning about {subject}' where 
  * subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as 
  * arguments and logs out '{student.name} receives a perfect score on {subject}'
  * 
  * Stretch: build out a method on the Instructor (this will be used by _BOTH_ instructors 
  * and PM's) that will randomly add or subtract points to a student's grade. 
  * _Math.random_ will help.
*/

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo = function(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade = function(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    mark = function(student) {
        let randomPoints = Math.floor(Math.random() * 11); 
        let coinFlip = Math.floor(Math.random() * 2) == 0 ? 'heads' : 'tails';
        if (coinFlip === 'heads') {
            student.grade += randomPoints;
            console.log(`${this.name} added ${randomPoints} to ${student.name}'s grade,` +
            ` bringing the grade up to ${student.grade}`);
        } else {
            student.grade -= randomPoints;
            console.log(`${this.name} took off ${randomPoints} to ${student.name}'s` +
             `grade, decreasing the grade to ${student.grade}`);
        }
    }
}

const spoiledStan = new Instructor({
    name: 'Stan Shepherd',
    age: 42,
    location: 'Saint George, Utah',
    specialty: 'preprocessing',
    favLanguage: 'LESS',
    catchPhrase: 'My LESS beats everything.'
});

spoiledStan.demo('React Native');

const festiveFrancis = new Instructor({
    name: 'Francis Farmer',
    age: 22,
    location: 'Fort Worth, TX',
    specialty: 'Ruby on Rails',
    favLanguage: 'Ruby',
    catchPhrase: 'Ruby is my sport.'
});

festiveFrancis.demo('vanilla CSS');

/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
* `previousBackground` i.e. what the Student used to do before Lambda School
* `className` i.e. CS132
* `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS',
*  'JavaScript']
* Student has the following methods:
* `listsSubjects` a method that logs out all of the student's favoriteSubjects 
*  one by one.
* `PRAssignment` a method that receives a subject as an argument and logs out 
* that the `student.name has submitted a PR for {subject}`
* `sprintChallenge` similar to PRAssignment but logs out `student.name has begun 
* sprint challenge on {subject}`

    Stretch:  Extend the functionality of the Student by adding a prop called grade 
    and setting it equal to a number between 1-100.

    Stretch: Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're 
  ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! 
  Otherwise go back to grading their assignments to increase their score.
*/

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects = function() {
        this.favSubjects.forEach(function(subject) {
            console.log(subject);
        });
    }
    PRAssignment = function(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge = function(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate = function(facultyMember) {
        while (this.grade < 70) {
            facultyMember.mark(this);
        }
        console.log(`${this.name} graduates from Lambda School` +
        ` with a grade of ${this.grade}`);
    }
}

const grumpyGwen = new Student({
    name: 'Gwen Gibbons',
    age: 21,
    location: 'Georgia',
    previousBackground: 'HS grad',
    className: 'WEB25',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 69
});

festiveFrancis.grade(grumpyGwen, 'Fun Bus Landing Page');
grumpyGwen.sprintChallenge('JavaScript');
grumpyGwen.graduate(festiveFrancis);

const hungryHolly = new Student({
    name: 'Holly Hawkins',
    age: 65,
    location: 'Hawaii',
    previousBackground: 'Hospital Administrator',
    className: 'WEB24',
    favSubjects: ['node.js', 'jQuery', 'JS closures'],
    grade: 80
});

hungryHolly.listsSubjects();
spoiledStan.mark(hungryHolly);
spoiledStan.mark(grumpyGwen);

  /*Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and 
  * logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject 
  * and logs out `{name} debugs {student.name}'s code on {subject}`
  */

class ProjectManager extends Instructor {
    constructor(projectManagerAttrs) {
        super(projectManagerAttrs);
        this.gradClassName = projectManagerAttrs.gradClassName;
        this.favInstructor = projectManagerAttrs.favInstructor;
    }
    standUp = function(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }
    debugsCode = function(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const sereneSophia = new ProjectManager({
    name: 'Sophia Smith',
    age: 43,
    location: 'Sacramento, CA',
    specialty: 'backend web dev',
    favLanguage: 'Java',
    catchPhrase: 'Melts in your Java, not in your hand.',
    gradClassName: 'WEB1',
    favInstructor: 'Britt'
});

sereneSophia.debugsCode(hungryHolly, 'JS Classes');

const nosyNathaniel = new ProjectManager({
    name: 'Nathaniel Norris',
    age: 19,
    location: 'North Dakota',
    specialty: 'dataframes',
    favLanguage: 'R',
    catchPhrase: 'Cuts R time in half',
    gradClassName: 'DS1',
    favInstructor: 'Josh'
});

nosyNathaniel.standUp('DS10_nathaniel_norris');

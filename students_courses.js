class Course {
  constructor(name, department, credits, dow, time) {
    this.course_name = name;
    this.department = department;
    this.credits = credits;
    this.dow = dow;
    this.time = time;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  conflictsWith(course) {
    if (this.time !== course.time) {
      return false;
    }

    let conflict = false;
    this.dow.forEach ( day => {
      if (course.dow.includes(day)) {
        conflict = true;
      }
    })

    return conflict;
  }
}

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
  }

  student_name() {
    return this.firstName + " " + this.lastName;
  }

  enroll(course) {
    this.courses.forEach ( stu_course => {
      if (stu_course.conflictsWith(course)){
        throw 'Conflicting course!'
      }
    })

    if (!this.courses.includes(course)) {
      this.courses.push(course);
      course.addStudent(this);
    }
  }

  courseLoad() {
    let load = {};
    this.courses.forEach ((course) => {
      let dept = course.department;
      load[dept] = load[dept] || 0;
      load[dept] = load[dept] + course.credits;
    })

    return load;
  }
}

let course1 = new Course("Biology", "Science", 4, ["Mon", "Tue", "Wed"], 1);
let course2 = new Course("Physics", "Science", 4, ["Mon", "Tue", "Wed"], 2);
let course3 = new Course("English", "Humanities", 4, ["Mon", "Tue", "Wed"], 3);
let course4 = new Course("FUBAR", "FUBAR", 4, ["Mon", "Tue", "Wed"], 1);

let student = new Student("Mike", "Barile");
student.enroll(course1);
student.enroll(course2);
student.enroll(course3);
console.log(student.courseLoad());
console.log(student.student_name());

student.enroll(course4);

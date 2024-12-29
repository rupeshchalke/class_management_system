create table students(
      id serial primary key,
	  name varchar(255),
	  address varchar(255),
	  mobile_no numeric,
	  email_id varchar(255),
      branch INT,
      FOREIGN KEY(branch) REFERENCES branches(id)
);
select * from students;

create table staffs(
	id serial primary key,
	name varchar(255),
	address varchar(255),
	mobile_no numeric,
	email_id varchar(255),
	subject varchar(255),
	role varchar(255),
    branch INT,
    FOREIGN KEY(branch) REFERENCES branches(id)
);
select * from staffs;

create table courses(
	id serial primary key,
	name varchar(100),
	duration int,
	fees int,
    student_id INT,
	foreign key(student_id) references students(id)
);
select * from courses;

create table subjects(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
select * from subjects;

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    subject_id INT,
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);
select * from topics;

create table attendances(
    id serial primary key,
	student_id INT,
	subject_id INT,
	date DATE DEFAULT CURRENT_DATE,
	foreign key(student_id) references students(id)
);
select * from attendances;

CREATE TABLE students_attendance(
	id SERIAL PRIMARY KEY,
	student_id INT,
    attendance_id INT,
    status VARCHAR(100) DEFAULT 'absent',
	FOREIGN KEY(student_id) REFERENCES students(id),
	FOREIGN KEY(attendance_id) REFERENCES attendances(id)
);
select * from students_attendance;

create table branches(
	id serial primary key,
	name varchar(100),
	location varchar(100),
	student_id INT,
	head_of_branch varchar(100),
	contact_number varchar(100),
	foreign key(student_id) references students(id)
);
select * from branches;

create table staff_attendance(
	id serial primary key,
	staff_id int,
	date DATE,
	course_id INT,
	foreign key(staff_id) references staffs(id),
	foreign key(course_id) references courses(id)
);
select * from staff_attendance;

create table admissions(
	id serial primary key,
	student_id int,
	course_id int,
    discount INT,
    final_fees numeric,
	date DATE,
	foreign key(student_id) references students(id),
	foreign key(course_id) references courses(id)
);
select * from admissions;

create table student_courses(
	id int primary key,
	student_id int,
	student_course int,
	foreign key(student_id) references students(id),
	foreign key(student_course) references courses(id)
);
select * from student_courses;

CREATE TABLE exam_types(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
);
select * from exam_types;

CREATE TABLE exams(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	subject INT,
	date DATE DEFAULT NULL,
	exam_type INT,
	FOREIGN KEY(subject) REFERENCES subjects(id) ,
	FOREIGN KEY(exam_type) REFERENCES exam_types(id) 
);
select * from exams;

CREATE TABLE exams_students(
	id SERIAL PRIMARY KEY,
	-- name VARCHAR(255),
	marks INT DEFAULT 0,
    exam_id INT ,
	student_id INT,
	-- student_attendence INT,
	FOREIGN KEY(exam_id) REFERENCES exams(id),
	FOREIGN KEY(student_id) REFERENCES students(id)
);
select * from exams_students;


	  
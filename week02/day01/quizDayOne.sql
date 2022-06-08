/*Nomor 1 */
CREATE TABLE regions(
	region_id serial PRIMARY KEY,
	region_name varchar(25)
);

CREATE TABLE countries(
	country_id varchar(2) PRIMARY KEY,
	country_name varchar(40),
	region_id integer not null,
	FOREIGN KEY(region_id) REFERENCES regions(region_id) ON update cascade on delete cascade
);

CREATE TABLE locations(
	location_id serial PRIMARY KEY,
	street_address VARCHAR(40),
	postal_code varchar(12),
	city varchar(30) NOT NULL,
	state_province varchar(25),
	country_id varchar(2),
	FOREIGN KEY(country_id) REFERENCES countries(country_id) ON update cascade on delete cascade
);

CREATE TABLE departments(
	department_id serial PRIMARY KEY,
	department_name varchar(30) NOT NULL,
	location_id integer,
	FOREIGN KEY(location_id) REFERENCES locations(location_id) ON update cascade on delete cascade
);

CREATE TABLE jobs(
	job_id serial PRIMARY KEY,
	job_title varchar(35) NOT NULL,
	min_salary numeric(82),
	max_salary numeric(82)
);

CREATE TABLE employees(
	employee_id serial PRIMARY KEY,
	first_name varchar(20),
	last_name varchar(25) NOT NULL,
	email varchar(100) NOT NULL,
	phone_number varchar(20),
	hire_date date NOT NULL,
	job_id integer NOT NULL,
	salary numeric(82) NOT NULL,
	manager_id integer,
	department_id integer,
	FOREIGN KEY(department_id) REFERENCES departments(department_id) ON update cascade on delete cascade
);


CREATE TABLE dependents(
	dependent_id serial PRIMARY KEY,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	relationship varchar(25) NOT NULL,
	employee_id INTEGER,
	FOREIGN KEY(employee_id) REFERENCES employees(employee_id) ON update cascade on delete cascade
);


CREATE TABLE projects(
	proj_id serial PRIMARY KEY,
	proj_name varchar(100),
	proj_createdon date,
	proj_duedate date,
	proj_cust_name varchar
);


CREATE TABLE project_assignment(
	pras_proj_id integer,
	pras_employee_id integer,
	pras_startdate date,
	pras_enddate date,
	pras_status varchar,
	PRIMARY KEY (pras_proj_id, pras_employee_id)
);


/*Nomor 2 */
alter table projects add column proj_description varchar(255);
alter table projects add column proj_status varchar(15);
alter table projects add column proj_amount integer


/*Nomor 3 */
alter table projects add column proj_account_mgr integer;
alter table projects add constraint project_employee_id_fk FOREIGN key (proj_account_mgr) REFERENCES employees(employee_id)


/*Nomor 4 */
INSERT into projects(proj_id,proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_amount,proj_account_mgr) VALUES(1,'ecommerce',now(),now(),'TELKOMSEL','INPROGRESS',10000000,100);
INSERT into projects(proj_id,proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_amount,proj_account_mgr) VALUES(2,'TRAVELOKA',now(),now(),'XL','INPROGRESS',10000000,100);
INSERT into projects(proj_id,proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_amount,proj_account_mgr) VALUES(3,'TIKET.COM',now(),now(),'INDOSAT','INPROGRESS',10000000,100);


/*Nomor 5 */
INSERT into project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_status) VALUES(1,104,'2021-09-14','ASSIGNED');
INSERT into project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES(1,105,'2021-09-14','2021-09-17','COMPLETED');
INSERT into project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_status) VALUES(1,106,'2021-09-14','INPROGRESS');
INSERT into project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_status) VALUES(2,104,'2021-09-14','ASSIGNED');
INSERT into project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES(2,105,'2021-09-14','2021-09-17','COMPLETED');
INSERT into project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status) VALUES(2,106,'2021-09-14','2021-09-17','INPROGRESS');


/*Nomor 6 */
select * from employees JOIN project_assignment ON project_assignment.pras_employee_id = employees.employee_id WHERE project_assignment.pras_status = 'COMPLETED'

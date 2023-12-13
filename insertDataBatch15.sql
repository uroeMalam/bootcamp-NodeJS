-- Module Master
-- Table Category
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(1,'Development',null,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(2,'Full Stack',1,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(3,'Java Technology',1,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(4,'.Net Technology',1,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(5,'Golang',1,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(6,'Mobile Development',null,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(7,'Android',6,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(8,'Flutter',6,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(9,'React Native',6,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(10,'Swift',6,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(11,'Data Scientist',null,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(12,'Hadoop',11,current_timestamp);
insert into category(cate_id,cate_name,cate_cate_id,cate_modified_date)
values(13,'Python',11,current_timestamp);

--Tabel Skill type
insert into skill_type(skty_name) values ('java');
insert into skill_type(skty_name) values ('dotnet');
insert into skill_type(skty_name) values ('sql');
insert into skill_type(skty_name) values ('softskill');
insert into skill_type(skty_name) values ('hardskill');
insert into skill_type(skty_name) values ('mini project');
insert into skill_type(skty_name) values ('javascript');
insert into skill_type(skty_name) values ('express.js');
insert into skill_type(skty_name) values ('nodejs');
insert into skill_type(skty_name) values ('springboot');
insert into skill_type(skty_name) values ('Final');
insert into skill_type(skty_name) values ('Presentation');
insert into skill_type(skty_name) values ('Technical');



 -- tabel Skill Template 
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (1,'Fundamental','Minggu pertama kamu akan belajar fundamental c#, mulai dari tipe data, variable, array, condition, iteration dan collection', 1, 1, 'javascript', NULL, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (2,'Data Type','', 1, 2, 'javascript', 1, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (3,'Scoping Variable','', 1, 3, 'javascript', 1, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (4,'Arrays','', 1, 4, 'javascript', 1, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (5,'Control Statement','', 1, 5, 'javascript', 1, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (6,'Iteration','', 1, 6, 'javascript', 1, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (7,'Collections','', 1, 7, 'javascript', 1, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (8,'Quiz','', 1, 7, 'javascript', 1, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (9,'Object Oriented Programming','OOP wajib kalian kuasain karena OOP akan membantu kita ketika kita develop application yang sangat komplek', 2, 1, 'javascript', null, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (10,'Encapsulation','', 2, 2, 'javascript', 9, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (11,'Inheritance','', 2, 3, 'javascript', 9, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (12,'Abstraction','', 2, 4, 'javascript', 9, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (13,'Polymorphism','', 2, 5, 'javascript', 9, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (14,'Design Pattern','', 2, 6, 'javascript', 9, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (15,'Quiz','', 2, 6, 'javascript', 9, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (16,'Database','', 3, 1, 'javascript', null, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (17,'Create Database','', 3, 2, 'javascript', 16, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (18,'DDL','', 3, 3, 'javascript', 16, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (19,'DML','', 3, 4, 'javascript', 16, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (20,'Back End','', 4, 1, 'javascript', null, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (21,'NodeJS','', 4, 2, 'javascript', 20, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (22,'RestApi','', 4, 3, 'javascript', 20, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (23,'ORM Sequelize','', 4, 4, 'javascript', 20, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (24,'First Project','', 4, 5, 'javascript', 20, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (25,'Front End','', 5, 1, 'javascript', null, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (26,'HTML & CSS','', 5, 2, 'javascript', 25, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (27,'ReactJS','', 5, 3, 'javascript', 25, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (28,'Redux','', 5, 4, 'javascript', 25, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (29,'GraphQL','', 5, 5, 'javascript', 25, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (30,'Microservices','', 6, 1, 'javascript', null, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (31,'Docker','', 6, 2, 'javascript', 30, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (32,'Kubernetes','', 6, 3, 'javascript', 30, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (33,'Kafka','', 6, 4, 'javascript', 30, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (34,'Mini Project','', 7, 1, 'javascript', null, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (35,'Revamp CodeAcademy','', 7, 2, 'javascript', 34, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (36,'Back End','', 8, 3, 'javascript', 34, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (37,'Front End','', 9, 4, 'javascript', 34, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (38,'Presentation','', 10, 5, 'javascript', 34, 'bootcamp');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (39,'Softskill','', 11, 1, 'softskill', null, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (40,'Learning','', 11, 2, 'softskill', 39, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (41,'Discipline','', 11, 3, 'softskill', 39, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (42,'Persistence','', 11, 4, 'softskill', 39, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (43,'Problem Solving','', 11, 5, 'softskill', 39, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (44,'Communication','', 11, 6, 'softskill', 39, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (45,'TeamWork','', 11, 7, 'softskill', 39, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (46,'Final Evaluation','', 12, 1, 'Final', null, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (47,'Struktur programming language','', 12, 2, 'Final', 46, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (48,'Logika','', 12, 3, 'Final', 46, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (49,'OOP','', 12, 4, 'Final', 46, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (50,'Database','', 12, 5, 'Final', 46, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (51,'Webservices','', 12, 6, 'Final', 46, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (52,'Microservices','', 12, 7, 'Final', 46, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (53,'Tugas Harian','', 12, 8, 'Final', 46, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (54,'Presentation','', 12, 1, 'Presentation', null, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (55,'Business Process','', 12, 2, 'Presentation', 54, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (56,'Performance','', 12, 3, 'Presentation', 54, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (57,'Media Material','', 12, 4, 'Presentation', 54, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (58,'Logic & Technical','', 12, 5, 'Presentation', 54, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (59,'Knowledge','', 12, 6, 'Presentation', 54, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (60,'Technical','', 12, 1, 'Technical', null, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (61,'Fundamental & Logic','', 12, 2, 'Technical', 60, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (62,'OOP','', 12, 3, 'Technical', 60, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (63,'Database DDL & DML','', 12, 4, 'Technical', 60, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (64,'Project','', 12, 5, 'Technical', 60, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (65,'Webservices','', 12, 6, 'Technical', 60, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (66,'Microservices','', 12, 7, 'Technical', 60, 'evaluation');
INSERT INTO skill_template (skte_id,skte_skill, skte_description, skte_week, skte_orderby, skty_name, skte_skte_id,skte_module)
  VALUES (67,'Deployment','', 12, 8, 'Technical', 60, 'evaluation');
  
--tabel mudules
insert into modules(module_name) values ('Master');
insert into modules(module_name) values ('User');
insert into modules(module_name) values ('HR');
insert into modules(module_name) values ('Course');
insert into modules(module_name) values ('Bootcamp');
insert into modules(module_name) values ('Job');
insert into modules(module_name) values ('Payment');
insert into modules(module_name) values ('Coba');
insert into modules(module_name) values ('Sales');

--tabel status
insert into status(status, status_module)
	values ('certified', 'User');
insert into status(status, status_module)
	values ('voluntering', 'User');
insert into status(status, status_module)
	values ('organization', 'User');
insert into status(status, status_module)
	values ('reward', 'User');
insert into status(status, status_module)
	values ('fulltime', 'User');
insert into status(status, status_module)
	values ('freelance', 'User');
insert into status(status, status_module)
	values ('bachelor', 'User');
insert into status(status, status_module)
	values ('diploma', 'User');
insert into status(status, status_module)
	values ('Male', 'HR');
insert into status(status, status_module)
	values ('Female', 'HR');
insert into status(status, status_module)
	values ('Single', 'HR');
insert into status(status, status_module)
	values ('Married', 'HR');
insert into status(status, status_module)
	values ('Hourly', 'HR');
insert into status(status, status_module)
	values ('Salaried', 'HR');
insert into status(status, status_module)
	values ('Active', 'HR');
insert into status(status, status_module)
	values ('InActive', 'HR');
insert into status(status, status_module)
	values ('Contract', 'HR');
insert into status(status, status_module)
	values ('Prohibation', 'HR');
insert into status(status, status_module)
	values ('Monthly', 'HR');
insert into status(status, status_module)
	values ('Weekly', 'HR');
insert into status(status, status_module)
	values ('Bootcamp', 'Course');
insert into status(status, status_module)
	values ('Course', 'Course');
insert into status(status, status_module)
	values ('Online', 'Course');
insert into status(status, status_module)
	values ('Offline', 'Course');
insert into status(status, status_module)
	values ('English', 'Course');
insert into status(status, status_module)
	values ('Bahasa', 'Course');
insert into status(status, status_module)
	values ('Open', 'Bootcamp');
insert into status(status, status_module)
	values ('Running', 'Bootcamp');
insert into status(status, status_module)
	values ('Closed', 'Bootcamp');
insert into status(status, status_module)
	values ('Pending', 'Bootcamp');
insert into status(status, status_module)
	values ('Extend', 'Bootcamp');
insert into status(status, status_module)
	values ('Passed', 'Bootcamp');
insert into status(status, status_module)
	values ('Failed', 'Bootcamp');
insert into status(status, status_module)
	values ('Resign', 'Bootcamp');
insert into status(status, status_module)
	values ('Publish', 'Job');
insert into status(status, status_module)
	values ('Draft', 'Job');
insert into status(status, status_module)
	values ('Remove', 'Job');
insert into status(status, status_module)
	values ('Waiting', 'Job');
insert into status(status, status_module)
	values ('Done', 'Job');
insert into status(status, status_module)
	values ('New', 'Sales');
insert into status(status, status_module)
	values ('Shipping', 'Sales');
insert into status(status, status_module)
	values ('Cancelled', 'Sales');
insert into status(status, status_module)
	values ('TopUp', 'Payment');
insert into status(status, status_module)
	values ('Transfer', 'Payment');
insert into status(status, status_module)
	values ('PayOrder', 'Payment');
insert into status(status, status_module)
	values ('Refund', 'Payment');
insert into status(status, status_module)
	values ('Debit', 'Payment');
insert into status(status, status_module)
	values ('Credit', 'Payment');
insert into status(status, status_module)
	values ('Payment', 'Payment');
insert into status(status, status_module)
	values ('Internal', 'User');
insert into status(status, status_module)
	values ('External', 'User');
insert into status(status, status_module)
	values ('Outsource', 'User');

--tabel Route Actions
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(1,'Apply Aplication',1,1,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(2,'Filtering Test',2,1,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(3,'Contract Legal',3,1,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(4,'Briefing Bootcamp',4,1,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(5,'Join Bootcamp',5,1,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(6,'Get Certified',6,1,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(7,'Placement',7,1,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(8,'Idle',8,0,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(9,'Drop Out',9,0,'Bootcamp');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(10,'Apply Application',1,1,'Job');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(11,'Interview',2,1,'Job');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(12,'Contract Legal',3,1,'Job');
insert into route_actions(roac_id,roac_name,roac_orderby, roac_display, roac_module_name)
	values(13,'Placement',4,1,'Job');
	
--tabel Country
INSERT INTO country(country_code, country_name)
	VALUES ('IND', 'Indonesia');
	
--tabel province
INSERT INTO province (prov_id,  prov_name , prov_country_code) 
 VALUES (1,'DKI Jakarta','IND');
INSERT INTO province (prov_id,  prov_name , prov_country_code)
 VALUES (2,'Jawa Barat','IND');
 
--tabel city
INSERT INTO city (city_id, city_name, city_prov_id)
	VALUES (1,'Bandung',2);
INSERT INTO city (city_id, city_name, city_prov_id) 
	VALUES (2, 'Bogor',2);
INSERT INTO city (city_id, city_name, city_prov_id) 
	VALUES (3,'Jakarta',1);

--tabel address
INSERT INTO address (addr_id, addr_line1, addr_line2, addr_postal_code, addr_spatial_location,addr_city_id) 
	VALUES (1,'jl. Sambiloto no 20,sumu','a','56789','{}',2);
INSERT INTO address (addr_id, addr_line1, addr_line2, addr_postal_code, addr_spatial_location,addr_city_id) 
	VALUES (2,'jl. North ridge no 18, sukaraja, babakan','b','67859','{}',2);
 

--tabel address type
INSERT INTO address_type (adty_id, adty_name) VALUES (1,'Home');
INSERT INTO address_type (adty_id, adty_name) VALUES (2,'Main Office');
INSERT INTO address_type (adty_id, adty_name) VALUES (3,'Primary');
INSERT INTO address_type (adty_id, adty_name) VALUES (4,'Shipping');
INSERT INTO address_type (adty_id, adty_name) VALUES (5,'Billing');
INSERT INTO address_type  (adty_id, adty_name)VALUES (6,'Archive');


--Module Users
-- INSERT TABLE roles
insert into  roles (role_id, role_name, role_type) 
values (1, 'Candidat','external');
insert into  roles (role_id, role_name, role_type) 
values (2, 'Talent','external');
insert into  roles (role_id, role_name, role_type) 
values (3, 'Recruiter','Internal');
insert into  roles (role_id, role_name, role_type) 
values (4, 'Instructor','Internal');
insert into  roles (role_id, role_name, role_type) 
values (5, 'Sales','Internal');
insert into  roles (role_id, role_name, role_type) 
values (6, 'Manager','Internal');
insert into  roles (role_id, role_name, role_type ) 
values (7, 'Vice President','Internal');
insert into  roles (role_id, role_name, role_type) 
values (8, 'Account Manager','Internal');
insert into  roles (role_id, role_name, role_type) 
values (9, 'Student','eksternal');
insert into  roles (role_id, role_name, role_type) 
values (10, 'Administrator','Internal');
insert into  roles (role_id, role_name, role_type) 
values (11, 'Outsource','Internal');

-- INSERT TABLE entity
insert into  entity (entity_id) 
values (1);
insert into  entity (entity_id) 
values (2);
insert into  entity (entity_id) 
values (3);
insert into  entity (entity_id) 
values (4);
insert into  entity (entity_id) 
values (5);
insert into  entity (entity_id) 
values (6);
insert into  entity (entity_id) 
values (7);
insert into  entity (entity_id) 
values (8);
insert into  entity (entity_id) 
values (9);

-- INSERT TABLE users		
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (1,'kangdian', 'kang', 'dian',1,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'photo.png',  'yadfaldjfapdjf;ajfpasdf');
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (2,'nofal', 'nofal', 'firdaus',0,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'nofal.png', 'ajdfja;dfpadjfadf');
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (3,'abdul101', 'Abdul', 'Razaq',1,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'abdul.png', 'alsdjfapdfaodfadf');
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (4,'ratih', 'ratih wina', 'ludwig',0,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'ratih.png', 'yadlfjadjfa');
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (5,'Eka', 'Eka', 'Nugroho',0,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'eka.png', 'ynyaldjf;adfadfad;faldfsa');
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (6,'novia', 'novia', 'slebew',1,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'novia.png', 'lajdfljaljdfajdf;a');
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (7,'novelina', 'novelina', 'lina',0,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'lina.png', 'lkadjfajdf;adf');
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (8,'yugo', 'yugo', 'ardan',1,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'yogo.png', 'aldjfadfa;dfjlajdf;a');
insert into  users (user_entity_id, user_name,user_first_name, user_last_name, user_email_promotion, user_modified_date, user_demographic,user_photo, user_password) 
values (9,'andhika', 'andhika', 'pratama',1,'12-Jul-22','{"latitude":"12.90","longitude":"-99.989"}', 'andhika.png', 'ladfljafjadfas;f');


--INSERT TABLE users_roles
insert into  users_roles (usro_entity_id, usro_role_id,usro_modified_date) 
values (1, 1,'12-Jul-22');
insert into  users_roles (usro_entity_id, usro_role_id,usro_modified_date) 
values (2, 1,'12-Jul-22');
insert into  users_roles (usro_entity_id, usro_role_id,usro_modified_date) 
values (3, 3,'12-Jul-22');
insert into  users_roles (usro_entity_id, usro_role_id,usro_modified_date) 
values (4, 5,'12-Jul-22');	

-- INSERT TABLE phone_number_type
insert into  phone_number_type (ponty_code,ponty_modified_date) 
values ('Home', '12-Jul-22');	
insert into  phone_number_type (ponty_code,ponty_modified_date) 
values ('Cell', '12-Jul-22');	

-- INSERT TABLE users_phone
insert into  users_phones (uspo_entity_id, uspo_number,uspo_ponty_code) 
values (1, '8139809091','Cell');	
insert into  users_phones (uspo_entity_id, uspo_number,uspo_ponty_code) 
values (3, '022-7890987','Home');	
insert into  users_phones (uspo_entity_id, uspo_number,uspo_ponty_code) 
values (2, '089898989','Cell');	

-- INSERT TABLE user_address
insert into  users_address (etad_addr_id,etad_entity_id,etad_adty_id) 
values (1, 1 ,1);
insert into  users_address (etad_addr_id,etad_entity_id,etad_adty_id) 
values (2, 2 , 2);	

-- INSERT TABLE users_email
insert into  users_email (pmail_id, pmail_entity_id, pmail_address) 
values (1, 1 ,'dian@code.id');
insert into  users_email (pmail_id, pmail_entity_id, pmail_address) 
values (2, 1 ,'dian@gmail.com');
insert into  users_email (pmail_id, pmail_entity_id, pmail_address) 
values (3, 2 ,'nofal@code.id');

-- INSERT TABLE users_media
insert into  users_media (usme_id, usme_entity_id,usme_file_link, usme_filename, usme_filesize, usme_filetype, usme_note) 
values (1, 1 ,'https://','ijazah.png',2345, 'png','ijazah');
insert into  users_media (usme_id, usme_entity_id,usme_file_link, usme_filename, usme_filesize, usme_filetype, usme_note) 
values (2, 1 ,'https://','cv.docx',1890, 'word','cv');

-- INSERT TABLE users_education
insert into  users_education (usdu_id,usdu_entity_id,usdu_school,usdu_degree,usdu_field_study,usdu_start_date,usdu_end_date,usdu_grade,usdu_activities,usdu_description) 
values (1, 1 ,'MIT','Bachelor','Informatic', '12-Jul-00','12-Aug-05',3.45,'I m bachelor with cumlaude','');

-- INSERT TABLE users_experiences
insert into users_experiences (usex_id, usex_entity_id, usex_title, usex_profile_headline, usex_employment_type, usex_company_name, usex_city_id, usex_is_current, usex_start_date, usex_end_date,usex_industry, usex_description, usex_experience_type) 
values (1, 1 ,'Head Of Bootcamp', 'Software Engineer, Data Scientist', 'Fulltime', 'Code.id',1,1, '12-Jul-19', '12-Jul-20','Consultant IT','I believe…','Company');
insert into users_experiences (usex_id, usex_entity_id, usex_title, usex_profile_headline, usex_employment_type, usex_company_name, usex_city_id, usex_is_current, usex_start_date, usex_end_date,usex_industry, usex_description, usex_experience_type) 
values (2, 1 ,'Motivator', 'Act as volunter',  'Freelance', 'Government',1,0, '12-Jul-19', '12-Jul-20','Government','helping people to learn','Volunter');

-- INSERT TABLE users_skill			
insert into  users_skill (uski_id, uski_entity_id,uski_skty_name) 
values (1, 1, 'java');
insert into  users_skill (uski_id, uski_entity_id,uski_skty_name) 
values (2, 1, 'dotnet');
insert into  users_skill (uski_id, uski_entity_id,uski_skty_name) 
values (3, 2, 'javascript');

-- INSERT TABLE users_experience_skill	
insert into  users_experiences_skill(uesk_usex_id, uesk_uski_id) 
values (1, 1);
insert into users_experiences_skill (uesk_usex_id, uesk_uski_id) 
values (1, 2);
insert into  users_experiences_skill(uesk_usex_id, uesk_uski_id) 
values (1, 3);


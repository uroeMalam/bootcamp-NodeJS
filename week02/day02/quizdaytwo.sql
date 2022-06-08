/*Nomor 1 */
select regions.region_id,regions.region_name,countries.country_id,countries.country_name from regions join countries on regions.region_id = countries.region_id WHERE regions.region_id = 1

/*Nomor 2*/
select regions.region_id,regions.region_name, count(countries.region_id) as total_countries from regions join countries on regions.region_id = countries.region_id group by regions.region_id ORDER BY regions.region_id

/*Nomor 3*/
SELECT countries.country_id, countries.country_name, locations.* from countries join regions on regions.region_id = countries.region_id join locations on locations.country_id = countries.country_id where countries.region_id=1 order by countries.country_id

/*Nomor 4*/
select departments.* from departments join locations on locations.location_id = departments.location_id where locations.country_id = 'US'

/*Nomor 5*/
select regions.region_name, count(departments.department_id) as total_department from departments join locations on locations.location_id = departments.location_id join countries on locations.country_id = countries.country_id join regions on regions.region_id = countries.region_id group by regions.region_name

/*Nomor 6*/
select countries.country_name,count(departments.department_id) as total_department from departments join locations on locations.location_id = departments.location_id join countries on countries.country_id = locations.country_id group by countries.country_id order by countries.country_name

/*Nomor 7*/
select countries.country_name,count(departments.department_id) as total_department from departments join locations on locations.location_id = departments.location_id join countries on countries.country_id = locations.country_id group by countries.country_id order by countries.country_name DESC limit 1

/*Nomor 8*/
select departments.department_id,departments.department_name,count(employees.department_id) as total_emps from employees join departments on departments.department_id = employees.department_id group by departments.department_id order by total_emps

/*Nomor 9*/
select departments.department_id,departments.department_name,count(employees.department_id) as total_emps from employees join departments on departments.department_id = employees.department_id join locations on locations.location_id = departments.location_id where locations.country_id = 'US' group by departments.department_id order by total_emps

/*Nomor 10*/
select 
	employees.employee_id,
	employees.first_name,
	employees.last_name,
	employees.salary, 
	extract(year from age(now(),hire_date)) as masa_kerja, 
	CASE WHEN extract(year from age(now(),hire_date)) >= 25 THEN salary*5 ELSE salary*3 END AS bonus 
	from employees 

/*Nomor 11*/
select 
	a.masa_kerja,
	sum(bonus) as bonus_per_masa_kerja 
	from (select 
		 	employees.employee_id,
		 	employees.first_name,
		 	employees.last_name,
		 	employees.salary, 
		 	extract(year from age(now(),hire_date)) as masa_kerja, 
		 	CASE WHEN extract(year from age(now(),hire_date)) >= 25 THEN salary*5 ELSE salary*3 END AS bonus 
		 	from employees) a 
				GROUP by a.masa_kerja order by a.masa_kerja

/*Nomor 12*/
select 
	sum(coalesce(b.tiga,0)) "30<=masa kerja <=35",
	sum(coalesce(b.dua,0)) "25<=masa kerja <=30",
	sum(coalesce(b.satu,0)) "15<=masa kerja <=25"
	from (select a.masa_kerja,
		CASE WHEN a.masa_kerja >= 30 and a.masa_kerja <= 35 THEN count(1)END as satu,
		CASE WHEN a.masa_kerja >= 25 and a.masa_kerja >= 30 THEN count(1)END as dua,
		CASE WHEN a.masa_kerja >= 15 and a.masa_kerja <= 25 THEN count(1)END as tiga
		from 
			(select 
				employees.employee_id,
				employees.first_name,
				employees.last_name,
				employees.salary, 
				extract(year from age(now(),hire_date)) as masa_kerja 
			 from employees
			) a group by a.masa_kerja) b

/*Nomor 13*/
select 	b.department_id,
		b.department_name,
		sum(coalesce(b.satu,0)) "15<=masa kerja <=25",
		sum(coalesce(b.dua,0)) "25<=masa kerja <=30",
		sum(coalesce(b.tiga,0)) "30<=masa kerja <=35"
		from (select 	a.department_id,
						a.department_name,
						CASE WHEN a.masa_kerja >= 30 and a.masa_kerja <= 35 THEN count(1)END as satu,
						CASE WHEN a.masa_kerja >= 25 and a.masa_kerja >= 30 THEN count(1)END as dua,
						CASE WHEN a.masa_kerja >= 15 and a.masa_kerja <= 25 THEN count(1)END as tiga
						from (	select 	employees.department_id, 
										departments.department_name,
										extract(year from age(now(),hire_date)) as masa_kerja 
						from employees
						join departments on departments.department_id = employees.department_id
		)a group by a.masa_kerja, a.department_id, a.department_name
)b group by b.department_id,b.department_name


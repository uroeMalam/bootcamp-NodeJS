-- create table

CREATE TABLE t_agent(
	agent_code varchar(255) PRIMARY KEY,
	agent_name varchar(25),
	agent_office varchar(25),
	basic_commission numeric(8,2)
);

CREATE TABLE t_client(
	client_code varchar(255) PRIMARY KEY,
	client_name varchar(25),
	birth_date date
);

CREATE TABLE t_policy(
	policy_number serial PRIMARY KEY,
	policy_submit_date date,
	premium numeric(10,2),
	discount integer,
	commission numeric(10,2),
	client_number varchar(255),
	agent_code varchar(255),
	policy_status varchar(30),
	policy_due_date date
);

-- add data

INSERT into t_agent(agent_code,agent_name,agent_office) VALUES('AG001','LIDYA','JAKARTA');
INSERT into t_agent(agent_code,agent_name,agent_office) VALUES('AG002','RUDI','BALI');
INSERT into t_agent(agent_code,agent_name,agent_office) VALUES('AG003','DICKY','BALI');
INSERT into t_agent(agent_code,agent_name,agent_office) VALUES('AG004','DAVID','SURABAYA');
INSERT into t_agent(agent_code,agent_name,agent_office) VALUES('AG005','FARIZ','SURABAYA');

INSERT into t_client(client_code,client_name,birth_date) VALUES('CL001','WAYNE ROONEY','5/11/1956');
INSERT into t_client(client_code,client_name,birth_date) VALUES('CL002','RYAN GIGGS','9/3/1972');
INSERT into t_client(client_code,client_name,birth_date) VALUES('CL003','DAVID BECKHAM','9/3/1985');
INSERT into t_client(client_code,client_name,birth_date) VALUES('CL004','MICHAEL OWEN','9/3/2012');

INSERT into t_policy(policy_number,policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status) VALUES(001,'1/5/2018',18600000,10,930000,'CL001','AG001','INFORCE');
INSERT into t_policy(policy_number,policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status) VALUES(002,'1/5/2018',2500000,10,125000,'CL002','AG002','INFORCE');
INSERT into t_policy(policy_number,policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status) VALUES(003,'1/10/2018',2500000,10,125000,'CL003','AG003','TERMINATE');
INSERT into t_policy(policy_number,policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status) VALUES(004,'1/25/2018',4000000,10,200000,'CL003','AG002','PROPOSAL');
INSERT into t_policy(policy_number,policy_submit_date,premium,discount,commission,client_number,agent_code,policy_status) VALUES(005,'1/25/2018',2625000,10,131250,'CL004','AG002','PROPOSAL');


-- show table
select * from t_Agent
select * from t_client
select * from t_policy

-- a.
select t_policy.* from t_policy join t_client on t_client.client_code = t_policy.client_number where date_part('month', t_client.birth_date) = 9


-- b.
select * from t_policy join t_agent on t_agent.agent_code = t_policy.agent_code where t_policy.policy_status ='INFORCE' and t_agent.agent_office = 'JAKARTA'

-- c.
select 	t_agent.agent_code,
		t_agent.agent_name,
		t_agent.agent_office,
		round((t_policy.commission/t_policy.premium)*100) as Basic_Commission 
	from t_policy 
	join t_agent on t_agent.agent_code = t_policy.agent_code


-- d.
select t_policy.policy_number,t_policy.client_number,t_policy.agent_code,t_policy.policy_submit_date, date_trunc('month',t_policy.policy_submit_date+interval'30 day') + interval '1 month' - interval '1 day' as POLICY_DUE_DATE from t_policy

-- e.
select * from
(select t_policy.policy_number,
		t_policy.agent_code,
		t_policy.client_number,
		t_policy.premium,
		t_policy.discount, 
		round((t_policy.premium - (t_policy.premium / t_policy.discount))) as total_potongan 
	from t_policy) a where total_potongan >= 1000000 order by total_potongan asc


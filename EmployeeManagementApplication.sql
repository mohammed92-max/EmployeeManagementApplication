use employeemanagementapplication;

Select * from employee;
Select * from manager;
describe employee;
describe manager;

Alter table employee change employeecol3 mobile int;
Alter table employee add city varchar(45);

Alter table employee change dob dob int;
Alter table employee change dob dob long;
Alter table employee change mobile mobile long;

Alter table employee change dob dob varchar(50);
Alter table employee change mobile mobile varchar(50);


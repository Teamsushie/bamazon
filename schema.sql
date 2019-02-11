create database bamazon;
use bamazon;

create table merchandise (
item_id integer not null,
product_name varchar (256) not null,
department_name varchar (256) not null,
price integer not null,
stock_quantity integer not null
);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (10000, "catfood", "pet_department", 15, 5000);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (10500, "dogfood", "pet_department", 20, 5000);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (10600, "birdfood", "pet_department", 13, 5000);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (10700, "fishfood", "pet_department", 30, 5000);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (15000, "theSexyBox", "electronics_department", 400, 1000);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (15100, "prayerStation", "electronics_department", 69, 350);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (15200, "switchAroo", "electronics_department", 500, 700);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (15300, "throwbackGamingMachine", "electronics_department", 450, 50);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (15400, "gameBoi", "electronics_department", 100, 5000);

insert into merchandise (item_id, product_name, department_name, price, stock_quantity)
values (15500, "nerdBOX", "electronics_department", 99, 10000);

select * from merchandise

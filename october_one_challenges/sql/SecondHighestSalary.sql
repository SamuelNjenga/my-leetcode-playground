/* 
Write an SQL query to report the second highest salary from the Employee table. If there is no second highest salary, the query should report null.
*/

select max(salary) as SecondHighestSalary from Employee where salary not in (select max(salary) from Employee )
/* 
Write an SQL query to report the IDs of all the employees with missing information. The information of an employee is missing if:

The employee's name is missing, or
The employee's salary is missing.
Return the result table ordered by employee_id in ascending order.
*/

select s.employee_id from salaries s left join employees e on e.employee_id = s.employee_id
where e.name is null union
select e.employee_id from employees e left join salaries s on e.employee_id = s.employee_id
where s.salary is null order by employee_id
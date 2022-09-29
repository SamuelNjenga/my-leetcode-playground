/*
Write an SQL query to report all customers who never order anything.

Return the result table in any order
 */

 select name as Customers from Customers left join Orders  on  Customers.id = Orders.customerId where Orders.customerId is null;
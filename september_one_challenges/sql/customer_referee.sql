/* Write an SQL query to report the names of the customer that are not referred by the customer with id = 2.

Return the result table in any order. */

select name from Customer where referee_id != 2 || referee_id is null;
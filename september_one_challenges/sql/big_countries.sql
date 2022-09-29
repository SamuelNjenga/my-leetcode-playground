/* Write an SQL query to report the name, population, and area of the big countries.

Return the result table in any order. */

SELECT name, population, area from World where area >= 3000000 or population >= 25000000;
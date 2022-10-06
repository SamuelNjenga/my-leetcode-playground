/* 
Each node in the tree can be one of three types:

"Leaf": if the node is a leaf node.
"Root": if the node is the root of the tree.
"Inner": If the node is neither a leaf node nor a root node.
Write an SQL query to report the type of each node in the tree.

Return the result table ordered by id in ascending order.
*/

SELECT DISTINCT(a.id), 
CASE 
    WHEN a.p_id IS NULL THEN "Root"
    WHEN a.c_id IS NULL THEN "Leaf"
    ELSE "Inner"
END AS type
FROM (SELECT t1.id, t1.p_id, t2.id AS c_id FROM Tree t1 LEFT JOIN Tree t2 ON t1.id = t2.p_id) AS a;
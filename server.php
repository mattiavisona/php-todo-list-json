<?php

$stringaFile = file_get_contents('todos.json');



$todos = json_decode($stringaFile);


header('Content-Type: application/json');

echo json_encode($todos);

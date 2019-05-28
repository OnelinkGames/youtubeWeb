<?php
$hostbd = "localhost";
$userbd = "sistema";
$passwordbd = "sistema";
$bd = "sistema";

//Realizar conexão com Banco de Dados
$conexao = new mysqli($hostbd, $userbd, $passwordbd, $bd);

//Pegar erros
if (mysqli_connect_errno())  {
	trigger_error(mysqli_connect_error());
}
?>
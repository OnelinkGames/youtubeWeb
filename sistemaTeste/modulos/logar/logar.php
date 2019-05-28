<?php
session_start(); //Iniciar a Sessão

//Recuperar valores
$login = $_POST['nome'];
$senha = $_POST['senha'];

//Conectar ao Banco de Dados
include ("../../database.php");

//Incluir Lib php
include ("../../bibliotecas/php/jquery.php");

//Criar Tabela
$tabela = "CREATE TABLE IF NOT EXISTS usuarios (
	id INT(5) NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL, 
	senha VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=INNODB";
$criarTabela = $conexao->query($tabela);

//Pesquisar na Tabela
$pesquisar = "SELECT * FROM usuarios WHERE login = '$login' AND senha = '$senha'";
$realizarPesquisa = $conexao->query($pesquisar);

//Consultar retorno
$quantidade = $realizarPesquisa->num_rows;

if ($quantidade > 0) {
	//Criar Sessions
	$_SESSION['usuario'] = $login;
	
	//Redirecionar
	redirect("home.php");
} else {
	echo("Usuário e senha não conferem, favor verificar");
}

//Fechar a conexão
$conexao->close();
?>

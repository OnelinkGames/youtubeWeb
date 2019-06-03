<?php
//Remover todas as variaveis de SESSIONS
session_unset();

//Destruindo as SESSIONS
session_destroy();

//Incluir Funções
include ("bibliotecas/php/jquery.php");

//Mensagem
redirect("index.php");
?>

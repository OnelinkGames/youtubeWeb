<?php
//Iniciar Sessão
session_start();

//Verificar Dados
if (isset($_SESSION["usuario"])) {
	$nome_usuario = $_SESSION['usuario'];
} else {
	echo("Você não está logado.");
	exit();
}

//Recuperar Pagina Inicial
$pagina = $_GET['page'];
if (isset($_GET['subpage'])) {
	$subpagina = $_GET['subpage'];
} else {
	$subpagina = "";
}
?>

<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bibliotecas/bootstrap-4.3.1-dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="bibliotecas/fontawesome-free-5.8.2-web/css/all.css">
    <title>Sistema</title>
  </head>
  <body>
	<!-- NavBar -->
	<nav class="navbar navbar-dark bg-dark">
		<a class="navbar-brand" href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent">
            <i class="fas fa-tv"></i>
			Sistema Teste
		</a>
		
		<form class="form-inline">
			<button type="button" class="btn btn-danger my-2 my-sm-0 sistema-sair" data-toggle="tooltip" data-placement="bottom" title="Sair do Sistema">
				<i class="fas fa-sign-out-alt"></i>
			</button>
		</form>
		
		<div class="collapse navbar-collapse" id="navbarToggleExternalContent">
			<ul class="nav nav-pills nav-justify">
				<li class="nav-item">
					<a class="nav-link <?php if ($pagina == "home") echo("active"); ?>" href="home.php?page=home"><i class="fas fa-home"></i> Pagina Inicial</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle <?php if ($pagina == "cadastrar") echo("active"); ?>" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="fas fa-bars"></i> Cadastrar</a>
					<div class="dropdown-menu">
						<a class="dropdown-item <?php if ($subpagina == "usuarios") echo("active"); ?>" href="home.php?page=cadastrar&subpage=usuarios"><i class="fas fa-user-plus"></i> Usuários</a>
					</div>
				</li>
			</ul>
		</div>
  
	</nav>
	
	<!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="bibliotecas/jquery-3.3.1.min.js"></script>
    <script src="bibliotecas/popper.min.js"></script>
    <script src="bibliotecas/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="js/home.js"></script>
	
	<!-- Carregar Paginas -->
	<div class="container-fluid">
		<?php
			//Pagina Sair
			if ($pagina == "sair") {
				include("sair.php");
			}
			
			//Pagina Relatorios
			if ($pagina == "home") {
				include("modulos/home/pi.php");
			}
			
			//Pagina Cadastrar Pessoas
			if ($pagina == "cadastrar" && $subpagina == "usuarios") {
				include("modulos/usuarios/usuarios.php");
			}
		?>
	</div>
  </body>
</html>
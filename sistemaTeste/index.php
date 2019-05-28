<!doctype html>
<html lang="en">
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
	<div class="container-fluid bg-dark border-right border-left border-bottom border-dark rounded-bottom">
		<div class="row pt-2">
			<div class="col-sm-11">
				<h3 class="text-white"><i class="fas fa-tv"></i> Sistema Teste</h3>
			</div>
			<div class="col-sm-1">
				<button type="button" class="btn btn-warning pt-2" data-toggle="modal" data-target="#logar"><i class="fas fa-users-cog"></i></button>
			</div>
		</div>
	</div>
	
	<!-- Modal -->
	<div class="modal fade" id="logar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Logar no Sistema</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group validar">
							<label>Nome do Usuário</label>
							<input type="text" class="form-control login" placeholder="Insira seu nome de usuario">
							<div class="valid-feedback">
								Está tudo correto!
							</div>
							<div class="invalid-feedback">
								Você não inseriu nenhum nome de usuário.
							</div>
						</div>
						<div class="form-group validar">
							<label>Password</label>
							<input type="password" class="form-control senha" placeholder="Insira sua senha">
							<div class="valid-feedback">
								Está tudo correto!
							</div>
							<div class="invalid-feedback">
								Você não inseriu nenhuma senha para este usuário.
							</div>
						</div>
						<label>Mostrar Senha:</label><br>
						<div class="btn-group btn-group-toggle mostrar-senha" data-toggle="buttons">
							<label class="btn btn-primary btn-sim">
								<input type="radio" name="options" id="option1" value="Sim"> Sim
							</label>
							<label class="btn btn-danger btn-nao active">
								<input type="radio" name="options" id="option2" value="Nao" checked> Não
							</label>
						</div>
					</form>
					<br>
					<div class="alert alert-danger alert-logar" role="alert">
						...
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
					<button type="button" class="btn btn-success btn-logar">Logar</button>
				</div>
			</div>
		</div>
	</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="bibliotecas/jquery-3.3.1.min.js"></script>
    <script src="bibliotecas/popper.min.js"></script>
    <script src="bibliotecas/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
		<script src="js/index.js"></script>
  </body>
</html>
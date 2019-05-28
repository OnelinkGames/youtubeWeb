$(function() {
	//Esconder Alert
	$(".alert-logar").hide();
	
	//Radio de Mostrar Senha
	$(".mostrar-senha").change(function() {
		var valor = $(".mostrar-senha :checked").val();
		if (valor == "Sim") {
			$(".senha").attr('type', 'text');
			$(".btn-sim").removeClass("btn-primary btn-success");
			$(".btn-sim").addClass("btn-success");
			$(".btn-nao").removeClass("btn-primary btn-danger");
			$(".btn-nao").addClass("btn-primary");
		} else {
			$(".senha").attr('type', 'password');
			$(".btn-sim").removeClass("btn-primary btn-success");
			$(".btn-sim").addClass("btn-primary");
			$(".btn-nao").removeClass("btn-primary btn-danger");
			$(".btn-nao").addClass("btn-danger");
		}
	});
	
	//Botão Logar
	$(".btn-logar").click(function() {
		//Variavel para quantidade de campos
		var campo = 0;
		
		//Validar os campos
		$(".validar").each(function() {
			var valor = $(this).find("input").val();
			
			if (valor == "") {
				$(this).find("input").removeClass("is-valid");
				$(this).find("input").addClass("is-invalid");
			} else {
				$(this).find("input").removeClass("is-invalid");
				$(this).find("input").addClass("is-valid");
				campo = campo + 1; //Contabilizar
			}
		});
		
		//Verificar quantidade de contabilizados
		if (campo == 2) {
			$(".alert-logar").load("modulos/logar/logar.php", {
				nome: $(".login").val(),
				senha: $(".senha").val()
			}, function() {
				$(".alert-logar").show();
			});
		}
	});
});
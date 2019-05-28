<?php
	//Mudar valor de um input.
	function changeValue($classname, $value) {
		$tipo = is_string($value);
		if ($tipo) {
			echo("<script type='text/javascript'>
			$(function() {
				$('.$classname').val('$value');
			});
			</script>");
		} else {
			echo("<script type='text/javascript'>
			$(function() {
				$('.$classname').val($value);
			});
			</script>");
		}
	}
	
	//Selecionar um select.
	function changeSelect($classname, $value) {
		echo("<script type='text/javascript'>
		$(function() {
			$('.$classname').val('$value');
		});
		</script>");
	}
	
	//Mudar um html.
	function changeHtml($classname, $value) {
		echo("<script type='text/javascript'>
		$(function() {
			$('.$classname').html('$value');
		});
		</script>");
	}
	
	//Redirecionar pagina.
	function redirect($webpage) {
		echo("<script type='text/javascript'>
		$(function() {
			$(location).attr('href', '$webpage');
		});
		</script>");
	}
	
	//Mostrar ou esconder uma classe.
	function hideOrShow($classname, $type) {
		echo("<script type='text/javascript'>
		$(function() {");
		if ($type == "hide") {
			echo("$('.$classname').hide('slow');");
		} else {
			echo("$('.$classname').show('slow');");
		}
		echo("});
		</script>");
	}
	
	//Desabilitar um Botão
	function disableButton($classname, $type) {
		echo("<script type='text/javascript'>
		$(function() {");
		if ($type == "enable") {
			echo("$('.$classname').prop('disabled', false);");
		} else {
			echo("$('.$classname').prop('disabled', true);");
		}
		echo("});
		</script>");
	}
	
	//Abrir um Modal
	function hideOrShowModal($id, $type) {
		echo("<script type='text/javascript'>
		$(function() {");
		if ($type == "hide") {
			echo("$('#$id').modal('hide');");
		} else {
			echo("$('#$id').modal('show');");
		}
		echo("});
		</script>");
	}
	
	//Modificar String contra SQL INJECTION
	function modificar($string, $moda, $modb, $modc, $modd) {
		//Removendo acentos
		if ($moda)
			$string =  preg_replace( '/[`^~\'"]/', null, iconv( 'UTF-8', 'ASCII//TRANSLIT', $string ) );
    
		//Removendo espaços
		if ($modb)
			$string = trim($string);
    
		//Deixando tudo Maisculo.
		if ($modc)
			$string = strtoupper($string);
    
		//Transformar acentos em html
		if ($modd)
			$string = htmlentities($string);
    
		return $string;
}
?>
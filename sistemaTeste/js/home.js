$(function() {
    //Ativar Tooltip
	$('[data-toggle="tooltip"]').tooltip()

	$(".sistema-sair").click(function() {
        $(location).attr('href', 'home.php?page=sair');
    });
});
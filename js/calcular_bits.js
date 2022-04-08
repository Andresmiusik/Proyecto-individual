function calcular_bits(){
	var de = document.frm_conversor.convertir_de.value;
	var tipo = document.frm_conversor.tipo.value;
	var a = document.frm_conversor.convertir_a.value;
	var result = document.frm_conversor.valorconvertido.value;

	result = parseFloat(de)*parseFloat(tipo) / parseFloat(a);
	document.frm_conversor.valorconvertido.value = result;
	}

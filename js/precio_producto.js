function valor_producto(){
  var valor_compra = document.frm_vproducto.vcompra.value;
  var porc_utilidad = document.frm_vproducto.porcutilidad.value;
  var porc_iva = document.frm_vproducto.porciva.value
  var valor_iva;
  var valor_venta = document.frm_vproducto.vventa.value;
  var valor_ganancia = document.frm_vproducto.vganancia.value

  valor_ganancia = parseFloat(valor_compra)*parseFloat(porc_utilidad)/parseFloat(100);
  document.frm_vproducto.vganancia.value = valor_ganancia;

  valor_iva =(parseFloat(valor_compra)*parseFloat(porc_iva)/parseFloat(100))+parseFloat(valor_compra)+parseFloat(valor_ganancia);
  document.frm_vproducto.vventa.value = valor_iva;
  //valor_venta = parseFloat(valor_compra)*parseFloat(porc_utilidad);
  //document.calcproducto.valor_venta.value = valor_venta;
}

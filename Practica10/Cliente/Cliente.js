const express = require('express');
const app = express();
const l_axios = require("axios");
var body = require('body-parser').json();
const puerto=8000;
const host='0.0.0.0';
app.listen(puerto, host);
console.log(`Servidor del Cliente: http://${host}:${puerto}`);

app.get('/', (req, res)=> {

    res.send("Servidor Cliente");
});
/***Solicitar pedido al restaurante****/
app.get('/GetOrden', (req,res)=>{
    var noOrden= 3010;
    var descripcion = "Se creo una orden con no.:"+noOrden;
    l_axios.post('http://0.0.0.0:8003/Restaurante/PostOrden',{'id':noOrden});
    res.json({'noOrden':noOrden});    
})

/**Verificar el estado del pedido */
app.get('/GetEstadoPedido',body,function(req,res){
    var order = req.body.id;
    console.log(order);
    var descripcion = "Se desea saber el estado de orden";
    console.log(descripcion);
    l_axios.get('http://0.0.0.0:8003/Restaurante/GetEstado/'+order)
        .then(function(response){
            estado=response['data'];
            res.json({estado});
            
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
});

 /**verificar estado del pedido del repartidor */
 app.get('/GetEstadoRepartidor',(req,res)=>{
    var detalle = "Se desea consultar el tracking del pedido";
    console.log(detalle);
    l_axios.get('http://0.0.0.0:8003/Repartidor/GetEstado')
    .then(function(response){
        estado=response['data'];
        res.json({estado});
    });
});
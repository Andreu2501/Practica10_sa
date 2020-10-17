
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:8000';


describe('get orden del cliente: ',()=>{
    it('get orden del cliente', (done) => {
    chai.request(url)
    .get('/GetOrden')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });

   describe('get estado del pedido en el restaurante: ',()=>{
    it('get estado del pedido en el restaurante', (done) => {
    chai.request(url)
    .get('/GetEstadoPedido')
    .end( function(err,res){
    console.log(res.body);
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   
   describe('get estado pedido con el repartidor: ',()=>{
    it('get estado pedido con el repartidor', (done) => {
    chai.request(url)
    .get('/GetEstadoRepartidor')
    .end( function(err,res){
    console.log(res.body);
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var app = require('../../app');

describe('/math', function() {
  describe('/add/:anyX/:anyY', function() {
    it('should add two positive numbers.', function(done) {
      var anyX = Math.round(Math.random() * 100);
      var anyY = Math.round(Math.random() * 100);
      chai.request(app)
        .get(`/math/add/${anyX}/${anyY}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(anyX + anyY);
          done();
        });
    });
    it('should add two negative numbers.', function(done) {
      var anyX = Math.round(Math.random() * 100) * -1;
      var anyY = Math.round(Math.random() * 100) * -1;
      chai.request(app)
        .get(`/math/add/${anyX}/${anyY}`)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(anyX + anyY);
          done();
        });
    });
  });
  describe('/multiply/:x/:y', function() {
    it('should multiply two numbers.', function(done) {
      chai.request(app)
        .get('/math/multiply/4/10')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.result).to.equal(40);
          done();
        });
    });
  });
});

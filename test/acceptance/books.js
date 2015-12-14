'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var app = require('../../app');

describe('Books', function() {
  describe('POST /books', function() {
    it('should add a new book.', function(done) {
      chai.request(app)
      .post('/books')
      .send({title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut'})
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body._id).to.be.ok;
        expect(res.body.title).to.equal('Slaughterhouse-Five');
        expect(res.body.author).to.equal('Kurt Vonnegut');
        done();
      });
    });
  });
});



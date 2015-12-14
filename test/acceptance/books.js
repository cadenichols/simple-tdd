'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var app = require('../../app');
var Book = require('../../models/book');

var clearDb = function(done){
  Book.remove({}, function(err) {
    done();
  });
};

describe('Books', function() {
  describe('POST /books', function() {
    beforeEach(clearDb);
    afterEach(clearDb);

    it('should add a new book.', function(done) {
      var title = 'Slaughterhouse-Five';
      var author = 'Kurt Vonnegut';
      chai.request(app)
      .post('/books')
      .send({title: title, author: author})
      .end(function(err, res) {
        expect(err).to.be.null;
        Book.findOne({}, function(err, book){
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body._id).to.be.ok;
          expect(res.body.title).to.equal(title);
          expect(res.body.author).to.equal(author);
          expect(book.title).to.equal(title);
          expect(book.author).to.equal(author);
          done();
        });
      });
    });
  });
});


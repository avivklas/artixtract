var expect = require("chai").expect;
var artixtract = require('../index');

describe('artixtract', function() {
    it('Should parse localhost page', function() {

        artixtract.load("http://localhost", function(article){
            expect(article.paragraphs.length).should.equal(0);
        });
    });
});



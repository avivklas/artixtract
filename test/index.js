var expect = require("chai").expect;
var artixtract = require('../index');

describe('artixtract', function() {

    it('Should parse HTML page', function(done) {

        artixtract.loadHtml("<div>"
                + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis cursus varius. Nam ex ligula, bibendum in ex nec, rutrum dictum nisl. Vestibulum metus.</p>"
                + "<p>Aenean dapibus orci velit, quis cursus odio tincidunt vel. Pellentesque velit sem, consectetur amet.</p>"
                + "<div>")
            .then(function(article){
                expect(article.paragraphs.length).to.be.equal(2);
                done();
            }).done();
    });

    it('Should parse localhost page', function(done) {

        artixtract.loadUrl("https://github.com/avivklas/")
            .then(function(article){
                expect(article.paragraphs.length).to.be.equal(0);
                done();
            }).done();
    });
});



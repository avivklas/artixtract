var expect = require("chai").expect;
var artixtract = require('../index');

describe('artixtract', function() {

    it('Should parse HTML page', function(done) {

        artixtract.loadHtml("<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla lectus in sollicitudin aliquet. Cras odio nisl, aliquam non elit quis, varius laoreet nisi. Fusce bibendum nisl eu tellus efficitur, quis cursus lacus molestie. Suspendisse pretium magna vel nisi feugiat rhoncus. Morbi condimentum nisi lectus, nec vulputate dolor condimentum sed. Suspendisse tincidunt nisl in erat consequat suscipit. Sed mattis purus id ex lobortis, et viverra purus fermentum. Integer pulvinar hendrerit massa in aliquam.</p><p>Suspendisse dui ex, fermentum id lacinia at, commodo eu lacus. Suspendisse potenti. Aenean lacinia arcu et turpis suscipit ultricies. Duis vitae dui sed mauris facilisis sagittis. Nunc tristique quam ut quam vehicula, sed tincidunt neque iaculis. Donec erat orci, accumsan at pretium et, venenatis at magna. Vestibulum ut est consectetur, venenatis magna ac, condimentum magna. Nam dictum tristique elit, et malesuada lectus vulputate ut. Phasellus vel tempus dolor. Donec venenatis felis tortor, nec congue odio lacinia lacinia. Ut luctus sollicitudin ex non porta.</p><div>")
            .then(function(article){
                expect(article.paragraphs.length).to.be.equal(2);
                done();
            }).done();
    });

    it('Should parse localhost page', function(done) {

        artixtract.loadUrl("http://localhost")
            .then(function(article){
                expect(article.paragraphs.length).to.be.equal(0);
                done();
            }).done();
    });
});



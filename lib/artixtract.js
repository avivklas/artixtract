var cheerio = require('cheerio');
var request = require('request');
var random_ua = require('random-ua');
var Q = require('q');
var Article = require('./article');

var Artixtract = (function () {

    var article;
    var deferred;

    var extract = function (html) {
        var $ = cheerio.load(html);
        article = new Article();
        $('p:contains(".")').each(function(){
            if($(this).closest('a').length){
                return;
            }
            if($(this).closest('footer').length){
                return;
            }
            var paragraph = $(this).text();
            if (paragraph.length > 150 || (paragraph.match(/\./g) || []).length > 1){
                article.paragraphs.push(paragraph);
            }
        });
        deferred.resolve(article);
    };
    
    var loadHtml = function (html) {
        deferred = Q.defer();
        extract(html);
        return deferred.promise;
    };
    
    
    var loadUrl = function (url) {
        deferred = Q.defer();

        var options = {
            url: url,
            jar: true,
            headers: {
                'User-Agent': random_ua.generate()
            }
        };
        
        request(options, function(error, response, html){
            if(!error){
                extract(html);
            } else {
                deferred.reject(error);
            }
        });
        return deferred.promise;
    };

    return {
        loadUrl: loadUrl,
        loadHtml: loadHtml
    }

})();

module.exports = Artixtract;

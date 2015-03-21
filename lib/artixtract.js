var cheerio = require('cheerio');
var request = require('request');
var Article = require('./article');

var Artixtract = (function(){

    var load = function(url, callback){

        var article = new Article();

        function final(){
            if (typeof callback == "function") {
                callback(article);
            }
        }

        function extract(html){
            var $ = cheerio.load(html);

            $('p:contains(".")').each(function(){
                var paragraph = $(this).text();
                if (paragraph.length > 150 || (paragraph.match(/\./g) || []).length > 1){
                    article.paragraphs.push(paragraph);
                }
            });
            final();
        }

        request(url, function(error, response, html){
            if(!error){
                extract(html);
            } else {
                throw error;
            }
        });
    };

    return {
        load: load
    }

})();

module.exports = Artixtract;

# artixtract [![Build Status](https://travis-ci.org/avivklas/artixtract.svg?branch=master)](https://travis-ci.org/avivklas/artixtract)

Extracts article text from a web page

## Installation
`npm install artixtract`

## Usage

### Load using a URL
```js
var artixtract = require('artixtract');

artixtract.loadUrl("https://github.com/avivklas")
    .then(function(article){
        
        for(var paragraph in article.paragraphs){
            console.log(paragraph)
        }
        
    }).done();
```

### Load using an HTML

```js
var artixtract = require('artixtract');

artixtract.loadHtml("<div>"
                    + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis cursus varius. Nam ex ligula, bibendum in ex nec, rutrum dictum nisl. Vestibulum metus.</p>"
                    + "<p>Mauris blandit fringilla ligula, condimentum tristique augue aliquam non. Integer quis ipsum sollicitudin, placerat eros in, pretium ligula. Etiam vel sed.</p>"
                    + "<div>")
    .then(function(article){
        
        for(var paragraph in article.paragraphs){
            console.log(paragraph)
        }
        
    }).done();
```


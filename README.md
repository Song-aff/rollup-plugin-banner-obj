# rollup-plugin-banner-obj
you can specify the banner&amp;footer to be set for the specified chunk 
# example 
    output:{
        bannerObj: { 'test.es.js': `import "./style.css"` },
        footerObj: { 'test.es.js': `console.log(version)` }
    }




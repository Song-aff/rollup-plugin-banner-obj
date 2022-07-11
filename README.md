# rollup-plugin-banner-obj
you can specify the banner&amp;footer to be set for the specified chunk 
# example 
    //方法1: 通过output传递
    output:{
        bannerObj: { 'test.es.js': `import "./style.css"` },
        footerObj: { 'test.es.js': `console.log(version)` }
    }
    //方法2: 通过plugins参数传递
    plugins: [ objBanner({banner:{ 'test.es.js': `import "./style.css"` },footer:{ 'test.es.js': `console.log(version)` }})]



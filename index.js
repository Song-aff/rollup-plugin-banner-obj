function Objbanner () {
  let bannerObj = {}
  let footerObj = {}
  return {
    name: 'banner-obj', 
    options: function (options) {
      bannerObj = options.output.bannerObj||{}
      footerObj = options.output.footerObj||{}
    },
    generateBundle: function (options, bundle, isWrite) {
        Object.keys(bannerObj).forEach(e => {
          bundle[e] && (bundle[e].code = bannerObj[e]+'\n'+bundle[e].code)
        })
        Object.keys(footerObj).forEach(e => {
          bundle[e] && (bundle[e].code = bundle[e].code+footerObj[e]+'\n')
        })
    }
  }
}
exports.Objbanner = Objbanner;
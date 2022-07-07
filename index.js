function Objbanner () {
    let bannerObj = {}
    let footerObj = {}
    return {
      name: 'banner-obj', 
      options: function (options) {
        bannerObj = options.output.bannerObj
        footerObj = options.output.footerObj
      },
      generateBundle: function (options, bundle, isWrite) {
        if (Object.keys(bannerObj).length > 0) {
          Object.keys(bannerObj).forEach(e => {
            bundle[e] && (bundle[e].code = `${bannerObj[e]}\n${bundle[e].code}`)
          })
        }
        
      }
    }
  }
  exports.Objbanner = Objbanner;
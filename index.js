function objBanner (props={}) {
  let bannerObj = {}
  let footerObj = {}
  return {
    name: 'banner-obj', 
    options: function (options) {
      bannerObj = props.banner||options.output.bannerObj||{}
      footerObj = props.footer||options.output.footerObj||{}
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
exports.objBanner = objBanner;
// 兼容之前写法
exports.Objbanner = objBanner;
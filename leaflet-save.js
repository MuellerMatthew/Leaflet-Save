(function () {
  L.DomUtil.Save = L.DomUtil.Extend({
    options: {
      center          : false,
      zoom            : false,
      bounds          : false,
      lastEvent       : false,
      eventTypes      : "",
      layerVisibility : false,
    },
    
    initialize: function(options) {
      L.Util.setOptions(this, options || {});
      
      
    },
    
    
    
  })
})

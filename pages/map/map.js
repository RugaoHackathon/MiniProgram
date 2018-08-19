Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    scale: 18,
    markers: [],
    circles: [],
    circlesRadius: 10
  },
  onReady: function(e) {
    var that = this;
    that.mapCtx = wx.createMapContext('myMap')
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        that.setData({
          latitude: latitude,
          longitude: longitude,
          circles: [{
            latitude: latitude,
            longitude: longitude,
            fillColor: "#87CEFA",
            radius: that.data.circlesRadius
          }]
        })
      }
    })
  },
  getCenterLocation: function() {
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },
  mapCircle: function(e) {
    console.log(e.detail.value)
    this.setData({
      circles: [{
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        fillColor: "#87CEFA",
        radius: e.detail.value
      }]
    })
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
})
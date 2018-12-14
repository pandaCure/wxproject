Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [{
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/swiper1.jpeg',
        index: 0
      },
      {
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/swiper2.jpeg',
        index: 1
      },
      {
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/swiper3.jpeg',
        index: 2
      },
      {
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/swiper4.jpeg',
        index: 3
      },
      {
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/swiper5.jpeg',
        index: 4
      }
    ],
    tripData: [{},
      {},
      {},
      {}
    ],
    containerBottom: 0,
    isReachBottom: false,
    clientY: 0,
    threshold: 100,
    translate: '',
    top: true
  },
  onPullDownRefresh() {

  },
  getImageInfo({
    detail
  }) {
    console.log(detail)
  },
  onReachBottom() {
    this.setData({
      isReachBottom: true
    })
  },
  onPageScroll({
    scrollTop
  }) {
    const {
      isReachBottom,
      top
    } = this.data
    if (isReachBottom && top) {
      wx.pageScrollTo({
        scrollTop
      })
      this.setData({
        top: false
      })
    }
  },
  start(e) {
    const {
      isReachBottom
    } = this.data
    if (isReachBottom) {
      const clientY = e.changedTouches[0].clientY;
      this.setData({
        clientY
      })
    }
  },
  move(e) {
    const {
      isReachBottom,
      clientY,
      threshold
    } = this.data
    if (isReachBottom) {
      let nowClientY = e.changedTouches[0].clientY;
      let moved = (nowClientY - clientY) / 3;
      if (Math.abs(moved) >= threshold) {

      } else {
        this.setData({
          translate: `transform:translate(0px,${-moved}px) translateZ(0px);
          transition: transform 0 linear`
        })
      }
    }
  },
  end(e) {
    this.setData({
      isReachBottom: false
    })
  },
  onReady() {
    const query = wx.createSelectorQuery()
    const clientRect = query.select('page').boundingClientRect((res) => {
      this.setData({
        containerBottom: `height:800px`
      })
      console.log(res)
    }).exec()
  }
})
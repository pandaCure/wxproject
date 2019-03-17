Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [{
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/swiper1.jpeg',
        index: 0,
        position: ''
      },
      {
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/b.jpg',
        index: 1,
        position: ''
      },
      {
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/swiper3.jpeg',
        index: 2,
        position: ''
      },
      {
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/a.jpeg',
        index: 3,
        position: ''
      },
      {
        imgurl: 'http://pjkva1akb.bkt.clouddn.com/c.jpg',
        index: 4,
        position: ''
      }
    ],
    bottomLoadMore: true,
    column: 2,
    systemInfo: '',
    containerBottom: ''
  },
  // onPullDownRefresh() {

  // },
  getImageInfo({
    detail
  }) {
    console.log(detail)
  },
  onReachBottom() {
    this.setData({
      bottomLoadMore: false
    })
    setTimeout(() => {
      this.setData({
        bottomLoadMore: true,
        swiperData: [...this.data.swiperData, {
            imgurl: 'http://pjkva1akb.bkt.clouddn.com/c.jpg',
            index: 4444
          },
          {
            imgurl: 'http://pjkva1akb.bkt.clouddn.com/swiper4.jpeg',
            index: 99999
          }
        ]
      })
    }, 500)
  },
  onReady() {
    // wx.createSelectorQuery().selectAll('.trip_container').fields({
    //   computedStyle: ['*'],
    //   size: true
    // }, function(res) {
    //   console.log(res)
    // }).exec()
    // wx.createSelectorQuery().selectAll('.trip_container').boundingClientRect().exec(function(res) {
    //   console.log(res)
    // })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          systemInfo: res
        })
      },
    })
  },
  load() {
    // TODO 如何改进
    wx.createSelectorQuery()
      .selectAll('.trip_container')
      .boundingClientRect()
      .exec((res) => {
        this.computerImage(res)
      })
  },
  computerImage([res]) {
    const {
      column,
      swiperData
    } = this.data;
    const imageHeightArr = [];
    for (let i = 0; i < res.length; i++) {
      if (i < column) {
        imageHeightArr.push(res[i].height)
      } else {
        const minImageHeight = Math.min(...imageHeightArr)
        const index = this.getMinHeight(minImageHeight, imageHeightArr)
        swiperData[i].position = `position: absolute;
        top: ${this.exchangePxToNumber((Math.floor(i / 2) + 1) * 2) + minImageHeight}px;
        left: ${this.exchangePxToNumber((47 * index) + 2 * (index + 1))}px;`;
        imageHeightArr[index] = imageHeightArr[index] + res[i].height;
      }
    }
    this.setData({
      swiperData,
      containerBottom: `height: ${Math.max(...imageHeightArr) + this.exchangePxToNumber(2 * (Math.ceil(res.length / 2)))}px`
    })
  },
  getMinHeight(minImageHeight, imageHeightArr) {
    return imageHeightArr.findIndex((value) => {
      return value === minImageHeight
    })
  },
  exchangePxToNumber(vw) {
    console.log()
    const {
      screenWidth
    } = this.data.systemInfo
    return vw * screenWidth / 100
  },
  goDetail(e) {
    const {
      index
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `detail/detail?page=${index}`,
    })
  }
})
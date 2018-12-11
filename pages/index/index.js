Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [
      {
        imgurl:'http://pjkva1akb.bkt.clouddn.com/swiper1.jpeg',
        index:0
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
    tripData: [
      {},
      {},
      {},
      {}
    ]
  },
  onPullDownRefresh(){
    console.log('refresh')
  }
})
// components/navbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    systemInfo: {
      type: Object,
      observer(oldValue, newValue, path){
        const { statusBarHeight, screenHeight, windowHeight, model, system } = oldValue
        const heightValue = screenHeight - windowHeight
        console.log(oldValue)
        this.setData({
          height: `height:${heightValue}pt;`,
          top: `top: ${this.getTop(system, model)}pt;`,
          topBar: `top: ${this.getTop(system, model, true)}pt`
        })
      }
    },
    backgroundColor: {
      type: null,
      value: 'system'
    },
    title: {
      type: 'string',
      value: '微信小程序'
    },
    back: {
      type: 'boolean',
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: '',
    top: '',
    topBar: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setNavHeight(oldValue, newValue, changePath){
      console.log(arguments)
    },
    getTop(system, model, topBar = false){
      if (system.includes('iOS')){
        if (model.includes('iPhone X')) {
          return topBar ? 43.5 : 41
        } else {
          return topBar ? 25.5 : 23
        }
      }else {
        return topBar ? 27 : 25
      }
    }
  },
  pageLifetimes: {
    show: () => {
      
    }
  },
  lifetimes: {
    created () {
      console.log("component is created")
    },
    attached () {
      console.log("component is attached")
      console.log(this.systemInfo)
    },
    ready () {
      console.log("component is ready")
      console.log(this.systemInfo)
    }
  },
  options: {
    multipleSlots: true  // 在组件中支持多slot子节点的支持
  },
})

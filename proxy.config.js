// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/api/farm': function(req, res) {
    res.json({
      success: true,
      data: [
        {
          id: 1,
          cols: [
            {
              id: 1,
              name: '西红柿',
              object: 'farm-persimmon',
              isShow: true,
              hasFloor: false,
              isFloorEmpty: false
            }, {
              id: 2,
              name: '西红柿',
              object: 'farm-persimmon',
              isShow: true,
              hasFloor: false,
              isFloorEmpty: false
            }, {
              id: 3,
              name: '西红柿',
              object: 'farm-persimmon',
              isShow: true,
              hasFloor: false,
              isFloorEmpty: false
            }, {
              id: 4,
              name: '西红柿',
              object: 'farm-persimmon',
              isShow: true,
              hasFloor: false,
              isFloorEmpty: false
            }
          ]
        },
        {
          id: 2,
          cols: [
            {
              id: 1,
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 2,
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 3,
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 4,
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          id: 3,
          cols: [
            {
              id: 1,
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 2,
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 3,
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 4,
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          id: 4,
          cols: [
            {
              id: 1,
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 2,
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 3,
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 4,
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          id: 5,
          cols: [
            {
              id: 1,
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 2,
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 3,
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 4,
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          id: 6,
          cols: [
            {
              id: 1,
              name: '花',
              object: 'farm-flower',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 2,
              name: '花',
              object: 'farm-flower',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 3,
              name: '花',
              object: 'farm-flower',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              id: 4,
              name: '花',
              object: 'farm-flower',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        }
      ]
    });
  },
  '/api/sence': function(req, res) {
    res.json({
      success: true,
      data: [
        {
          id: 1,
          src: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
        },
        {
          id: 2,
          src: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
        },
        {
          id: 3,
          src: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
        },
        {
          id: 4,
          src: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
        },
        {
          id: 5,
          src: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
        },
        {
          id: 6,
          src: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
        },
        {
          id: 7,
          src: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
        },
        {
          id: 8,
          src: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
        },
      ]
    });
  }
};

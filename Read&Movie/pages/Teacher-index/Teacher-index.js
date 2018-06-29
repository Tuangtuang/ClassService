Page({
  data: {
    navItems: [{
        name: '发布公告', //点进去有发布公告和查看公告
        url: '../Publish-post/Publish-post',//创建公告页面
      },
      {
        name: '创建班级',
        url: '../Class-creating/Class-creating',
      },
      {
        name: '查看班级',
        url: '../Class-choice/Class-choice',
      },
      {
        name: '编辑试卷',
        url: '../teacher/Paper-index/Paper-index',
      },
      {
        name: '关于我们',
        url: '',
      },
     {
        name: '试卷分析',
        url: '../Problem-analysis/Problem-analysis',
      }

      // {
      //   name: '敬请期待',
      //   url: '',
      // }

    ]

  },
  logout:function(){
    wx.redirectTo({
      url: '../login/login',
    })
  }

})
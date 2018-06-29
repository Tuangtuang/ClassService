var app = getApp();
Page({
  data: {
    userNumber: '',
    userPassword: '',
    // id_token: '',
    // id_identity: ''
    check: ''
  },

  formSubmit: function(e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      userNumber: e.detail.value.ID,
      userPassword: e.detail.value.code,
      check: ''
    });
    this.SendData();
  },

  SendData: function() {
    wx.request({
      url: 'http://localhost:8081/api/login',
      method: 'POST',
      data: {
        "uid": this.data.userNumber,
        'password': this.data.userPassword
      },
      success: function(res) {
        console.log(res);
        app.globalData.token = res.data.data.token; //设置全局token
        console.log(app.globalData.token);
        //显示
        if (res.data.message == "账号或密码不能为空") {
          wx.showToast({
            title: '内容为空',
            icon: "loading",
            duration: 500
          })
        } else {
          if (res.data.message == "您不是上海大学的用户") {
            wx.showToast({
              title: '账户或密码错误',
              icon: "loading",
              duration: 500
            })
          } else {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 500
            });
            if (res.data.data.identity == 1) {
              console.log(res.data.identity);
              wx.redirectTo({
                url: '../Teacher-index/Teacher-index',
              })
            }
            if (res.data.data.identity == 2) {
              console.log(res.data.identity);
              wx.redirectTo({
                url: '../student/student',
              })
            }
          }
        }

      },
      fail: function() {
        wx.showToast({
          title: '网络错误',
          icon: "loading",
          duration: 500
        })
      }
    })
  }
})
//  }   
//         success: function(res) {
//           console.log(res);
//           app.globalData.token = res.data.token;
//           wx.showToast({
//             title: '成功',
//             icon: 'success',
//             duration: 500
//           })
//           if (res.data.identity == 1) {
//             wx.redirectTo({
//               url: '../student/student',
//             })

//           } else {
//             wx.redirectTo({
//               url: '../Teacher-index/Teacher-Indext',
//             })
//           }

//         }

//       }
// })

// // 获取输入账号
// // numInput: function(e) {
// //   this.setData({
// //     userNumber: e.detail.value
// //   })
// // },

// // // 获取输入密码  
// // pwInput: function(e) {
// //   this.setData({
// //     userPassword: e.detail.value
// //   })
// // },

//     }

// })
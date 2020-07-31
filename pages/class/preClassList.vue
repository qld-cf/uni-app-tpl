<template>
  <view>

    <bar-title bgColor="bg-white" isBack>
      <block slot="content">预约课列表</block>
    </bar-title>


    <!--消息列表-->
    <view class="bg-white zaiui-news-list-box">
      <view class="margin-bottom cu-list menu-avatar">

        <view class="cu-item" @touchstart="ListTouchStart" @touchmove="ListTouchMove" :data-target="'move-box-' + 0"
          @tap="tapNews(0)">
          <view class="cu-avatar round" style="background-image:url(/static/images/home/swiper/1.png);">
            <view class="cu-tag badge" />
          </view>
          <view class="content">
            <view class="text-black">预约课</view>
            <view class="text-gray text-sm text-cut">预约课</view>
            <view class="text-gray text-sm">3小时前</view>
          </view>
          <view class="move">
            <view class="bg-grey">置顶</view>
            <view class="bg-red">删除</view>
          </view>
        </view>

        <view class="cu-item goods" @touchstart="ListTouchStart" @touchmove="ListTouchMove"
          :data-target="'move-box-' + 1" @tap="tapNews(1)">
          <view class="cu-avatar round" style="background-image:url(/static/images/home/swiper/1.png);">
            <view class="cu-tag badge" />
          </view>
          <view class="content">
            <view class="text-black">
              <text class="margin-right-xs">预约课</text>
              <text class="cu-tag bg-blue sm radius">
                <text class="cuIcon-male"></text>
              </text>
            </view>
            <view class="text-gray text-sm text-cut">预约课</view>
            <view class="text-gray text-sm">4小时前</view>
          </view>
          <view class="action">
            <view class="cu-avatar radius" style="background-image:url(/static/images/home/swiper/1.png);" />
          </view>
          <view class="move">
            <view class="bg-grey">置顶</view>
            <view class="bg-red">删除</view>
          </view>
        </view>

        <view class="cu-item goods" @touchstart="ListTouchStart" @touchmove="ListTouchMove"
          :data-target="'move-box-' + 2" @tap="tapNews(2)">
          <view class="cu-avatar round" style="background-image:url(/static/images/home/swiper/1.png);">
            <view class="cu-tag badge" />
          </view>
          <view class="content">
            <view class="text-black">
              <text class="margin-right-xs">预约课</text>
              <text class="cu-tag bg-pink sm radius">
                <text class="cuIcon-female"></text>
              </text>
            </view>
            <view class="text-gray text-sm text-cut">预约课~</view>
            <view class="text-gray text-sm">6小时前</view>
          </view>
          <view class="action">
            <view class="cu-avatar radius" style="background-image:url(/static/images/home/swiper/1.png);" />
          </view>
          <view class="move">
            <view class="bg-grey">置顶</view>
            <view class="bg-red">删除</view>
          </view>
        </view>

      </view>

      <!--占位底部距离-->
      <view class="cu-tabbar-height" />
    </view>
  </view>


</template>

<script>
  import barTitle from '@/components/zaiui-common/basics/bar-title';
  import _tool from '@/static/zaiui/util/tools.js';	//工具函数
  export default {
    components: {
      barTitle
    },
    data() {
      return {
        multiIndex: [0, 0, 0], nameClose: false, phoneClose: false, zipCodeClose: false, addressClose: false,
        multiArray: [['重庆市', '四川省'], ['渝中区', '渝北区', '江北区', '南岸区'], ['周边', '周边地区']],
      }
    },
    onLoad() {

    },
    onReady() {
      _tool.setBarColor(true);
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 0
      });
    },
    methods: {
      nameInput(event) {
        let value = event.detail.value;
        if (value != "") {
          this.nameClose = true;
        } else {
          this.nameClose = false;
        }
      },
      phoneInput(event) {
        let value = event.detail.value;
        if (value != "") {
          this.phoneClose = true;
        } else {
          this.phoneClose = false;
        }
      },
      zipCodeInput(event) {
        let value = event.detail.value;
        if (value != "") {
          this.zipCodeClose = true;
        } else {
          this.zipCodeClose = false;
        }
      },
      addressInput(event) {
        let value = event.detail.value;
        if (value != "") {
          this.addressClose = true;
        } else {
          this.addressClose = false;
        }
      },
      MultiChange(e) {
        this.multiIndex = e.detail.value
      },
      //页面被滚动
      setPageScroll(scrollTop) {
        //console.log(scrollTop);
      },
      //触底了
      setReachBottom() {
        console.log('触底了');
      },
      barTitleRightTap() {
        console.log('标题栏右边被点击');
      },
      // ListTouch触摸开始
      ListTouchStart(e) {
        this.listTouchStart = e.touches[0].pageX
      },
      // ListTouch计算方向
      ListTouchMove(e) {
        this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
      },
      //被点击
      tapNews(index) {
        uni.navigateTo({
          url: '/pages/class/preClassDedail',
        });
      }

    }
  }
</script>

<style lang="scss">
  /* #ifdef APP-PLUS */
  @import "../../static/colorui/main.css";
  @import "../../static/colorui/icon.css";
  @import "../../static/zaiui/style/app.scss";

  /* #endif */
  .wecanui-footer-fixed .flex-direction {
    padding: 18.18rpx;
  }
</style>


<style lang="scss" scoped>
  .zaiui-news-box {
    width: 100%;
    display: none;

    .zaiui-follow-box {
      .action-text-cut {
        width: 70%;
      }
    }

    .zaiui-grid-menu {
      .cu-list.grid.no-border>.cu-item {
        .cu-avatar {
          margin: 0 auto;
        }
      }
    }

    .zaiui-news-list-box {
      padding: 0 9.09rpx;

      .cu-list.menu-avatar>.cu-item>.cu-avatar {
        width: 81.81rpx;
        height: 81.81rpx;
      }

      .cu-list.menu-avatar>.cu-item {
        height: 163.63rpx;
        align-items: inherit;

        .cu-avatar {
          margin-top: 25.45rpx;

          .cu-tag.badge {
            width: 21.81rpx;
            height: 21.81rpx;
            top: 0;
            right: 0;
            border: 1.81rpx solid #fff;
          }
        }

        .content {
          left: 136.36rpx;
          margin-top: 18.18rpx;
          width: calc(100% - 90.9rpx - 54.54rpx - 18.18rpx);
          line-height: 1.7em;

          .cu-tag {
            padding: 0 3.63rpx;

            text {
              position: relative;
              top: -2rpx;
            }
          }
        }

        &:after {
          width: 0;
          height: 0;
          border-bottom: 0;
        }
      }

      .cu-list.menu-avatar>.cu-item.goods {
        .content {
          width: calc(100% - 309.09rpx);
        }

        .action {
          position: absolute;
          right: 23.63rpx;
          width: 127.27rpx;

          .cu-avatar {
            width: 127.27rpx;
            height: 127.27rpx;
            margin-top: 18.18rpx;
          }
        }
      }
    }
  }

  .zaiui-news-box.show {
    display: block;
  }
</style>
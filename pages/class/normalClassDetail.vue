<template>
  <view>
    <!--标题栏-->
    <bar-title bgColor='bg-white'>
      <block slot="content">正式课详情</block>
      <block slot="right">
        <text class="cuIcon-forward" />
        <text class="cuIcon-more" />
      </block>
    </bar-title>

    <!--轮播图-->
    <view class="zaiui-banner-swiper-box">
      <swiper class="screen-swiper" circular autoplay @change="bannerSwiper">
        <swiper-item v-for="(item,index) in bannerList" :key="index">
          <image :src="item.url" mode="aspectFill" />
        </swiper-item>
      </swiper>
      <!--页码-->
      <text class="cu-tag bg-grey round sm zaiui-page">{{bannerCur + 1}} / {{bannerList.length}}</text>
    </view>

    <!--标题-->
    <view class="bg-white zaiui-view-box zaiui-title-view-box">
      <view class="title-view">
        <text class="text-black text-lg text-bold">课程详情</text>
      </view>
    </view>

    <!--服务-->
    <view class="margin-top bg-white zaiui-view-box zaiui-service-view-box" @tap="serviceTap">
      <view class="flex flex-wrap text-sm">
        <view class="basis-1">
          <text class="text-gray">服务</text>
        </view>
        <view class="basis-7">
          <view>

            <text class="tag-view">
              <text class="cuIcon-title text-red" />
              <text>服务</text>
            </text>

          </view>
        </view>
        <view class="basis-2">
          <view class="text-gray text-right icon-view">
            <text class="cuIcon-right icon" />
          </view>
        </view>
      </view>
    </view>

    <!--促销-->
    <!-- <view class="margin-top bg-white zaiui-view-box zaiui-promotion-view-box">
			<view class="flex flex-wrap text-sm" @tap="promotionTap">
				<view class="basis-1">
					<text class="text-gray">促销</text>
				</view>
				<view class="basis-7">
					<view>
						<text class="cu-tag line-orange sm radius">赠品</text>
						<text class="text-view">品胜充电器套装</text>
					</view>
					<view class="margin-top-xs">
						<text class="cu-tag line-orange sm radius">分期</text>
						<text class="text-view">￥318元/月花呗/京东/微信组合支付</text>
					</view>
				</view>
				<view class="basis-2">
					<view class="text-gray text-right icon-view">
						<text class="cuIcon-right icon" />
					</view>
				</view>
			</view>
		</view> -->

    <!--选择-->
    <view class="margin-top bg-white zaiui-view-box zaiui-select-view-box">
      <view class="flex flex-wrap text-sm">
        <view class="basis-1">
          <text class="text-gray">老师</text>
        </view>
        <view class="basis-9">
          <text class="text-sm">陈老师</text>
        </view>
      </view>

      <view class="zaiui-border-view" />
      <view class="flex flex-wrap text-sm">
        <view class="basis-1">
          <text class="text-gray">简介</text>
        </view>
        <view class="basis-9">
          <text class="text-sm">简介...</text>
        </view>
      </view>
      <view class="zaiui-border-view" />
      <view class="flex flex-wrap text-sm">
        <view class="basis-1">
          <text class="text-gray">开课时间</text>
        </view>
        <view class="basis-9">
          <text class="text-sm">2020-07-30 10:00</text>
        </view>
      </view>

      <!-- <view class="flex flex-wrap text-sm" @tap="selectTap">
				<view class="basis-1">
					<text class="text-gray">已选</text>
				</view>
				<view class="basis-8">
					<text class="text-sm">99新深空灰色64G国行三网通</text>
				</view>
				<view class="basis-1">
					<view class="text-gray text-right">
						<text class="cuIcon-right icon" />
					</view>
				</view>
			</view> -->
    </view>

    <!--评论-->
    <view class="margin-top bg-white zaiui-comment-view-box">
      <view class="cu-bar bg-white">
        <view class="action">
          <text class="text-black text-lg">评价（3699）</text>
        </view>
        <view class="action">
          <view class="text-sm">
            <text class="margin-right-xs">好评率</text>
            <text class="text-black text-lg">97%</text>
            <text class="cuIcon-right icon margin-left-xs" />
          </view>
        </view>
      </view>
      <view class="zaiui-border-view" />
      <view class="zaiui-view-box">
        <view class="flex flex-wrap text-sm">
          <view class="basis-1">
            <view class="cu-avatar sm round"
              style="background-image:url(https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg)" />
          </view>
          <view class="basis-9 text-sm">
            <view>仔仔</view>
            <view class="margin-top-xs">书不错,孩子喜欢</view>
            <view class="text-gray margin-top-sm">内容</view>
          </view>
        </view>
      </view>
    </view>

    <!--杂项信息-->
    <!-- <view class="margin-top bg-white zaiui-view-box zaiui-goods-info-view-box">
			<view class="zaiui-shop-view">
				<view class="cu-avatar lg round" style="background-image:url(https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg)" />
				<view class="text-view">
					<view class="margin-bottom-xs">仔仔店铺</view>
					<view class="text-sm text-cut">仔仔店铺，正品保障，售后无忧</view>
				</view>
				<button class="cu-btn radius sm line-red">全部商品</button>
			</view>
			<view class="zaiui-border-view" />
			<view class="live-tag-view">
				<view class="text-view">
					<text class="cu-tag bg-red radius sm">
						<text class="cuIcon-title" />
						<text>直播中</text>
					</text>
					<text class="margin-left-xs text-cut">官方直播自营商品在线答疑</text>
				</view>
				<view class="text-sm text-red text-right-view">
					<text class="margin-right-xs">看直播</text>
					<text class="cuIcon-right" />
				</view>
			</view>
			<view class="zaiui-border-view" />
			<view class="zaiui-recommend-list-box">
				<view class="text-sm">官方推荐</view>
				<view class="recommend-scroll-box">
					<scroll-view class="recommend-scroll" scroll-x>
						<block v-for="(items,indexs) in goodsList" :key="indexs">
							<view :id="['scroll' + (indexs + 1 )]" class="recommend-scroll-item">
								<view class="cu-avatar xl radius" :style="[{backgroundImage:'url('+ items.img +')'}]" />
								<view class="text-cut-2 text-sm text-black margin-tb-sm">{{items.title}}</view>
								<view class="text-red text-price margin-tb-sm text-lg">{{items.price}}</view>
							</view>
						</block>
					</scroll-view>
				</view>
			</view>

		</view> -->

    <!--相似推荐-->
    <!-- <view class="margin-top zaiui-view-box zaiui-recommend-list-view-box">
			<view class="flex flex-wrap">
				<view class="basis-sm text-right">
					<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix" />
				</view>
				<view class="basis-xs text-center">
					<text class="text-black text-lg">相似推荐</text>
				</view>
				<view class="basis-sm text-left">
					<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix" />
				</view>
			</view>

			<view class="margin-bottom zaiui-goods-list-box">
				<view class="grid col-2">
					<block v-for="(items,indexs) in goodsList" :key="indexs">
						<view class="list-itme">
							<view class="bg-white list-radius">
								<view class="goods-img">
									<view class="cu-avatar" :style="[{backgroundImage:'url('+ items.img +')'}]" />
									<view class="mold-view" v-if="items.mold">
										<text class="cu-tag radius sm bg-red">自营</text>
									</view>
								</view>
								<view class="view-goods-info">
									<view class="text-cut-2 text-black text-sm margin-bottom-sm">{{items.title}}</view>
									<view class="text-price text-red text-lg">{{items.price}}</view>
								</view>
							</view>
						</view>
					</block>
				</view>
			</view>
		</view> -->

    <!--占位底部距离-->
    <view class="cu-tabbar-height" />

    <!--底部操作-->
    <view class="zaiui-footer-fixed">
      <view class="cu-bar bg-white tabbar border shop">
        <view class="btn-group">
          <button class="cu-btn bg-orange radius shadow-blur" @tap="selectTap('commit')">评论</button>
          <button class="cu-btn bg-red radius shadow-blur" @tap="selectTap('class')">我要上课</button>
        </view>
      </view>
    </view>

    <!--弹出框-->
    <view class="cu-modal bottom-modal zaiui-bottom-modal-box" :class="bottomModal?'show':''">
      <view class="cu-dialog bg-white">
        <!--标题-->
        <view class="text-black text-center margin-tb text-lg zaiui-title-bar">
          <text>{{modalTitle}}</text>
          <text class="cuIcon-close close-icon" @tap="hideModal"></text>
        </view>

        <!--内容区域-->
        <view class="zaiui-modal-content">

          <!--服务区域-->
          <view class="zaiui-view-box service" v-if="modalType=='service'">
            <view class="text-view">
              <text class="cuIcon-title text-red" />
              <text class="text-cut text-black">可借30天</text>
            </view>
            <!-- <view class="text-view">
							<text class="cuIcon-title text-red" />
							<text class="text-cut text-black">已检验</text>
						</view> -->
            <!-- <view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">借阅&富士康联合制定验机标准，对设备进行专业质检</view>
						</view>
						<view class="text-view">
							<text class="cuIcon-title text-red" />
							<text class="text-cut text-black">可借30天</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">自收到商品7天内，不喜欢可以申请退货，并自付邮费寄回</view>
						</view>
						<view class="text-view">
							<text class="cuIcon-title text-red" />
							<text class="text-cut text-black">180天质保</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">自订单确认收货起180天,提供免费质保</view>
						</view>
						<view class="text-view">
							<text class="cuIcon-title text-red" />
							<text class="text-cut text-black">顺丰包邮</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">16:00前下单，今日发货，顺丰包邮(偏远地区邮政包邮)</view>
						</view>
						<view class="text-view">
							<text class="cuIcon-title text-red" />
							<text class="text-cut text-black">半年电池免费换新</text>
						</view>
						<view class="text-sm text-list-view">
							<view class="margin-left text-cut text-gray">自订单确认收货起半年，如果电池电量低于60%，可申请免费更换原厂品质电池</view>
						</view> -->
          </view>

          <!--促销区域-->
          <view class="zaiui-view-box promotion" v-if="modalType=='promotion'">
            <view class="text-view">
              <text class="cu-tag line-orange radius sm">赠品</text>
              <text class="margin-left-xs text-cut text-black">品胜充电器套装</text>
            </view>

            <view class="text-sm text-list-view">
              <view class="text-cut">充电头+数据线</view>
              <text class="text-right-view">价值￥99</text>
            </view>

            <view class="text-view">
              <text class="cu-tag line-orange radius sm">分期</text>
              <text class="margin-left-xs text-cut text-black">￥318元/月花呗/京东/微信组合支付</text>
            </view>
          </view>

          <!--选择规格-->
          <view class="zaiui-view-box select" v-if="modalType=='select'">
            <!--商品信息-->
            <view class="cu-list menu-avatar">
              <view class="cu-item">
                <view class="cu-avatar radius lg"
                  style="background-image:url(https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/1.png);" />
                <view class="content">
                  <view class="text-price-view">
                    <text class="text-price text-red margin-right-xs">666</text>
                    <text class="text-sm text-gray text-through">￥666</text>
                  </view>
                  <view class="text-black text-sm flex">
                    <view class="text-cut">书籍详情</view>
                  </view>
                </view>
              </view>
            </view>

            <!--规格数据-->
            <view class="zaiui-select-btn-list-boox">
              <!-- <view class="select-item">
								<view class="text-black">成色</view>
								<view class="select-btn">
									<button class="cu-btn">95新</button>
									<button class="cu-btn">9成新</button>
									<button class="cu-btn light bg-red">99新</button>
								</view>
							</view>

							<view class="select-item">
								<view class="text-black">颜色</view>
								<view class="select-btn">
									<button class="cu-btn light bg-red">深空灰色</button>
									<button class="cu-btn" disabled>银色</button>
								</view>
							</view>

							<view class="select-item">
								<view class="text-black">容量</view>
								<view class="select-btn">
									<button class="cu-btn" disabled>256G</button>
									<button class="cu-btn light bg-red">64G</button>
								</view>
							</view> -->

              <view class="select-item">
                <view class="text-black">版本</view>
                <view class="select-btn">
                  <button class="cu-btn">版本1</button>
                  <button class="cu-btn">版本2</button>
                </view>
              </view>

            </view>

          </view>

          <!--公共按钮-->
          <view class="zaiui-footer-fixed">
            <view class="flex flex-direction">
              <button class="cu-btn bg-red lg" @tap="makeOrder()">确定</button>
            </view>
          </view>

        </view>
      </view>
    </view>
    <message ref="Message"></message>

  </view>
</template>

<script>
  import barTitle from '@/components/zaiui-common/basics/bar-title';

  import _goods_data from '@/static/zaiui/data/goods.js';	//虚拟数据
  import _tool from '@/static/zaiui/util/tools.js';	//工具函数
  export default {
    components: {
      barTitle,
    },
    data() {
      return {
        bannerCur: 0, bannerList: [], bottomModal: false, modalTitle: '', modalType: 'promotion', selectType: '',
        goodsList: [],
        handleType: ''
      }
    },
    onLoad() {
      this.bannerList = _goods_data.bannerListData();
      this.goodsList = _goods_data.goodsList();
    },
    onReady() {
      _tool.setBarColor(true);
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 0
      });
    },
    methods: {
      makeOrder(e) {
        if (this.handleType === 'sell') {
          uni.navigateTo({
            url: '/pages/goods/settlement'
          });
        } else {
          uni.navigateTo({
            url: '/pages/goods/my_cart'
          });
        }

      },
      bannerSwiper(e) {
        this.bannerCur = e.detail.current;
      },
      serviceTap() {
        this.modalTitle = "服务";
        this.modalType = 'service';
        this.showModal();
      },
      promotionTap() {
        this.modalTitle = "促销优惠";
        this.modalType = 'promotion';
        this.showModal();
      },
      selectTap(type) {
        if (type === 'class') {
          // uni.navigateTo({
          //   url: '/pages/goods/my_cart'
          // });
        }
        this.$refs['Message'].info('快马加鞭建设中~')

      },
      showModal(e) {
        this.bottomModal = true;
        this.handleType = e
      },
      hideModal(e) {
        this.bottomModal = false;
        this.modalTitle = "";
        this.modalType = '';
      },
      myCartTap() {
        uni.navigateTo({
          url: '/pages/goods/my_cart'
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
  @import "../../static/zaiui/style/goods.scss";
</style>
<template>
	<view class="zaiui-sell-box" :class="show?'show':''">

		<view>
			<view class="zaiui-bar-search-title-box">
				<view class="cu-bar fixed no-shadow bg-white">
					<!-- <view class="content search" @tap="searchTap">
						<view class="search-form round">
							<text class="cuIcon-search" />
							<text class="margin-left-xs">输入您先要查找的书籍</text>
						</view>
					</view> -->
					<view class="search-form round">
						<text class="cuIcon-search" />
						<input @input="searchInput" :value="searchKey" :adjust-position="false" type="text" placeholder="魔镜魔镜告诉我"
							confirm-type="search" />
						<text class="cuIcon-close close-icon" v-if="search_close" @tap="closeInput" />
					</view>
				</view>
				<!--占位的-->
				<view class="zaiui-seat-height" />
			</view>

			<view class="VerticalBox">
				<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop">
					<block v-for="(item,index) in list" :key="index">
						<view class="cu-item" :class="index==tabCur?'text-red cur':''" @tap="TabSelect" :data-id="index">
							<view :class="index==tabCur?'text-black text-bold':''">{{item.name}}</view>
						</view>
					</block>
				</scroll-view>
				<scroll-view class="VerticalMain" scroll-y scroll-with-animation :scroll-into-view="'main-'+mainCur"
					@scroll="VerticalMain">
					<block v-for="(item,index) in list" :key="index">
						<view class="padding-top padding-lr" :id="'main-'+index">

							<!--标题栏-->
							<view class="cu-bar bg-white">
								<view class="action">
									<text class="cuIcon-title text-red" />
									<text>{{item.name}}</text>
								</view>
							</view>

							<!--图标导航-->
							<view class="zaiui-grid-icon-box">
								<view class="cu-list grid col-3 no-border">
									<block v-for="(items,indexs) in item.children" :key="indexs">
										<view class="cu-item">
											<view class="grid-icon">
												<image class="icon" :src="items.img" lazy-load mode="widthFix" />
											</view>
											<text class="text-black">{{items.name}}</text>
										</view>
									</block>
								</view>
							</view>

						</view>
					</block>
				</scroll-view>
			</view>

		</view>
	</view>
</template>

<script>
	import typeList from '@/components/zaiui-common/list/type-list';

	import _sell_data from '@/static/zaiui/data/sell.js';	//虚拟数据

	import _sort_data from '@/static/zaiui/data/sort_vue.js';	//虚拟数据
	import _tool from '@/static/zaiui/util/tools.js';	//工具函数
	import { BookCategory } from '@/config/common'

	export default {
		name: 'sell',
		components: {
			typeList
		},
		data() {
			return {
				typeListData: [],
				list: [], tabCur: 0, mainCur: 0, verticalNavTop: 0, load: true, sortList: [],
				searchKey: '',
				search_close: false
			}
		},
		props: {
			show: {
				type: Boolean,
				default: true
			},
			scrollY: {
				type: Number,
				default: 0
			},
			scrollBottom: {
				type: Number,
				default: 0
			}
		},
		watch: {
			scrollY() {
				//通知他妈的滚动了。
				this.setPageScroll(this.scrollY);
			},
			scrollBottom() {
				if (this.scrollBottom != 0) {
					//通知他妈的触底了
					this.setReachBottom();
				}
			},
		},
		created() {
			//加载虚拟数据
			this.typeListData = _sell_data.typeListData();
		},
		mounted() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
			console.log('BookCategory', BookCategory)
			let list = BookCategory;
			this.list = list;
			this.listCur = list[0];
			this.sortList = BookCategory;
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
		},
		methods: {
			searchInput(event) {
				let value = event.detail.value;
				this.searchKey = value;
				if (value) {
					this.search_close = true;
				} else {
					this.search_close = false;
				}
			},
			closeInput() {
				this.searchKey = '';
				this.search_close = false;
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				return false  //支付宝小程序暂时不支持双向联动
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0;i < this.list.length;i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0;i < this.list.length;i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			},
			searchTap() {
				uni.navigateTo({
					url: "/pages/home/search"
				});
			},
			//页面被滚动
			setPageScroll(scrollTop) {
				//console.log(scrollTop);
			},
			//触底了
			setReachBottom() {
				console.log('触底了');
			},
			closeTap() {
				this.$emit('closeTap');
			},
			typeListTap(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.zaiui-sell-box {
		background: #FAFAFA;
		position: relative;
		min-height: 100vh;
		z-index: 99999;
		width: 100%;
		display: none;

		.zaiui-bar-view-box {
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 999999;
			background: #FAFAFA;

			/* #ifndef MP */
			height: calc(var(--status-bar-height) + 99.99rpx);
			/* #endif */

			/* #ifdef MP */
			height: calc(var(--status-bar-height) + 189rpx);
			/* #endif */

			padding: var(--status-bar-height) 27rpx 0 27rpx;
			align-items: center;

			.zaiui-bar-box {
				position: relative;
				width: 100%;
				align-items: center;
				line-height: 99.99rpx;

				.close {
					position: absolute;
					right: 27rpx;
					font-size: 40rpx;
					bottom: 9rpx;
				}
			}
		}

		.zaiui-seat-height {
			width: 100%;

			/* #ifndef MP */
			height: calc(var(--status-bar-height) + 99.99rpx);
			/* #endif */

			/* #ifdef MP */
			height: calc(var(--status-bar-height) + 199.99rpx);
			/* #endif */
		}

		.zaiui-view-content {
			padding: 0 27rpx 27rpx;
		}
	}

	.zaiui-sell-box.show {
		display: block;
	}
</style>

<style lang="scss">
	/* #ifdef APP-PLUS */
	@import "../../../static/colorui/main.css";
	@import "../../../static/colorui/icon.css";
	@import "../../../static/zaiui/style/app.scss";
	/* #endif */

	@import "../../../static/zaiui/style/sort_vue.scss";
</style>
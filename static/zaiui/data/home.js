//首页虚拟数据库，仔仔编写。

let _home_data = {
	tab() {
		return ['首页', '预约试听', '精彩活动'];
	},
	swiper() {
		return [
			{
				swiper: '/static/images/home/swiper/1.png',
				background: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/swiper/swiper-background-1.png',
			},
			{
				swiper: '/static/images/home/swiper/2.png',
				background: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/swiper/swiper-background-2.png',
			},
			{
				swiper: '/static/images/home/swiper/3.png',
				background: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/swiper/swiper-background-3.png',
			}
		];
	},
	nav() {
		return [{
			id: 1,
			name: '手机11',
			color: 'orange',
			badge: '必看',
			img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/1.png',
		},
			// 	{
			// 	id: 2,
			// 	name: '平板',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/2.png',
			// }, {
			// 	id: 3,
			// 	name: '电脑',
			// 	color: 'orange',
			// 	badge: '热卖',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/3.png',
			// }, {
			// 	id: 4,
			// 	name: '数码',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/4.png',
			// }, {
			// 	id: 5,
			// 	name: '家电',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/5.png',
			// }, {
			// 	id: 6,
			// 	name: '新人红包',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/6.png',
			// }, {
			// 	id: 7,
			// 	name: '手机直播',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/7.png',
			// }, {
			// 	id: 8,
			// 	name: '自营图书',
			// 	color: 'red',
			// 	badge: '必看',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/8.png',
			// }, {
			// 	id: 9,
			// 	name: '游戏',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/9.png',
			// }, {
			// 	id: 10,
			// 	name: '二手车',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/10.png',
			// }, {
			// 	id: 11,
			// 	name: '文玩玉翠',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/11.png',
			// }, {
			// 	id: 12,
			// 	name: '免费领',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/12.png',
			// }, {
			// 	id: 13,
			// 	name: '借钱',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/13.png',
			// }, {
			// 	id: 14,
			// 	name: '拍卖',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/14.png',
			// }, {
			// 	id: 15,
			// 	name: '分期商城',
			// 	color: '',
			// 	badge: '',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/15.png',
			// 	}
		];
	},
	live() {
		return [
			{
				id: 1,
				name: '图文鉴别',
				text: '验过的更放心',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/3.png',
			},
			{
				id: 2,
				name: '免费鉴别',
				text: '专家24h在线',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/4.png',
			},
			{
				id: 3,
				name: '连麦鉴别',
				text: '2114人正在看',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/5.png',
			}
		];
	},
	earn() {
		return [
			{
				text: '小明借阅了2本',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg',
			},
			{
				text: '小红借阅了7本',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/2.jpg',
			},
			{
				text: '小陈借阅了12本',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/3.jpg',
			},
		];
	},
	sellQuickly() {
		return [
			{
				id: 1,
				title: '测试数据',
				text: '测试数据',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/6.png',
			},
			// {
			// 	id: 2,
			// 	title: '拍卖报名',
			// 	text: '24小时高价卖',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/7.png',
			// },
			// {
			// 	id: 3,
			// 	title: '扫码读书',
			// 	text: '好书高价卖',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/8.png',
			// }
		];
	},
	activity() {
		return [
			{
				id: 1,
				title: '借阅社区',
				text: '发现有趣',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/11.png',
			},
			{
				id: 2,
				title: '手机直播',
				text: '直降400元',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/10.png',
			},
			{
				id: 3,
				title: '新人专享',
				text: '',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/12.png',
			},
			{
				id: 4,
				title: '爆款大促',
				text: '',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/13.png',
			},
			{
				id: 5,
				title: '5元3本',
				text: '',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/14.png',
			},
			{
				id: 6,
				title: '全新拍卖',
				text: '',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/sundry/15.png',
			}
		];
	},
	goodsTab() {
		return [
			{
				title: '热门书籍',
				tag: '快来借阅',
			},
			{
				title: '新书上架',
				tag: '',
			},
			{
				title: '课程视频',
				tag: '',
			},
		];
	},
	goodsList() {
		return [
			{
				v: false,
				pay: true,
				type: '',	//空为正常数据，recommend 为推荐感兴趣的，可以此扩展。
				mold: [],
				service: ['质量保证'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '快速借还',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/1.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{ bg: 'red', title: '自营' }],
				service: [],
				price: '5049',
				servicePlus: '质量保证',
				username: '正品保障',
				time: '可借30天',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/2.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/2.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [{ bg: 'blue', title: '寄卖' }],
				service: [],
				price: '2980',
				servicePlus: '已检验',
				username: '仔仔',
				time: '书质保证',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/3.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/3.jpg'
			},
			{
				v: false,
				pay: true,
				type: '',
				mold: [],
				service: ['质量保证'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '快速借还',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/4.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/4.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{ bg: 'red', title: '自营' }],
				service: [],
				price: '5049',
				servicePlus: '质量保证',
				username: '正品保障',
				time: '可借30天',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/5.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/5.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [],
				service: [],
				price: '2980',
				servicePlus: '已检验',
				username: '仔仔',
				time: '书质保证',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/6.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/6.jpg'
			},
			{
				v: false,
				pay: true,
				type: '',
				mold: [],
				service: ['质量保证'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '快速借还',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/7.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/7.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{ bg: 'red', title: '自营' }],
				service: [],
				price: '5049',
				servicePlus: '质量保证',
				username: '正品保障',
				time: '可借30天',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/8.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/8.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [],
				service: [],
				price: '2980',
				servicePlus: '已检验',
				username: '仔仔',
				time: '书质保证',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/9.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg'
			},
			{
				v: false,
				pay: true,
				type: '',
				mold: [],
				service: ['质量保证'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '快速借还',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/10.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/2.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{ bg: 'red', title: '自营' }],
				service: [],
				price: '5049',
				servicePlus: '质量保证',
				username: '正品保障',
				time: '可借30天',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/11.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/3.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [],
				service: [],
				price: '2980',
				servicePlus: '已检验',
				username: '仔仔',
				time: '书质保证',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/12.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/4.jpg'
			},
			{
				v: false,
				pay: true,
				type: '',
				mold: [],
				service: ['质量保证'],
				price: '2280',
				servicePlus: '',
				username: '仔仔',
				time: '快速借还',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/13.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/5.jpg'
			},
			{
				v: true,
				pay: false,
				type: '',
				mold: [{ bg: 'red', title: '自营' }],
				service: [],
				price: '5049',
				servicePlus: '质量保证',
				username: '正品保障',
				time: '可借30天',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/14.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/6.jpg'
			},
			{
				v: false,
				pay: false,
				type: '',
				mold: [],
				service: [],
				price: '2980',
				servicePlus: '已检验',
				username: '仔仔',
				time: '书质保证',
				title: '书籍标题',
				img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/15.png',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/7.jpg'
			}
		];
	},
	recommend() {
		return {
			type: 'recommend',
			list: [
				{
					title: '书籍标题',
					img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/16.png',
				},
				{
					title: '书籍标题',
					img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/15.png',
				},
				{
					title: '书籍标题',
					img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/14.png',
				}, {
					title: '书籍标题',
					img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/goods/13.png',
				}
			]
		};
	},
	liveData() {
		//	tag、tag_title、tag_time 三个参数中，选一个即可。
		//	tag_red、tag_red_bg 两个参数中，选一个即可。
		//	多个填写的话，会显示错位，如有需要，可自行修改。
		return [
			{
				tag: '630人',
				tag_title: [],
				tag_time: '',
				tag_red: '来学习吧',
				tag_red_bg: '',
				title: '老师教学',
				name: '老师教学',
				appreciate: '7.5万',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/1.jpg',
			},
			{
				tag: '',
				tag_title: [],
				tag_time: '',
				tag_red: '',
				tag_red_bg: '',
				title: '',
				name: '',
				appreciate: '',
				avatar: '',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/2.jpg',
			},
			{
				tag: '630人',
				tag_title: [],
				tag_time: '',
				tag_red: '',
				tag_red_bg: '来学习吧',
				title: '老师教学',
				name: '老师教学',
				appreciate: '100+',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/2.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/3.jpg',
			},
			// {
			// 	tag: '',
			// 	tag_title: ['鉴别中', '演戏'],
			// 	tag_time: '',
			// 	tag_red: '',
			// 	tag_red_bg: '',
			// 	title: '刘诗诗的直播',
			// 	name: '刘诗诗',
			// 	appreciate: '98.8万',
			// 	avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/3.jpg',
			// 	cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/4.jpg',
			// },
			// {
			// 	tag: '',
			// 	tag_title: [],
			// 	tag_time: '预约中 - 02/28 22:00',
			// 	tag_red: '',
			// 	tag_red_bg: '',
			// 	title: '某某某的直播',
			// 	name: '某某某',
			// 	appreciate: '2345',
			// 	avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/4.jpg',
			// 	cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/5.jpg',
			// },
			// {
			// 	tag: '',
			// 	tag_title: [],
			// 	tag_time: '鉴别预约中 - 唱歌',
			// 	tag_red: '',
			// 	tag_red_bg: '',
			// 	title: '某某的直播',
			// 	name: '某某-某某',
			// 	appreciate: '9812',
			// 	avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/5.jpg',
			// 	cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/6.jpg',
			// },
			// {
			// 	tag: '630万人',
			// 	tag_title: [],
			// 	tag_time: '',
			// 	tag_red: '抢100元红包',
			// 	tag_red_bg: '',
			// 	title: '莫山山的直播',
			// 	name: '大河国莫山山',
			// 	appreciate: '7.5万',
			// 	avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/6.jpg',
			// 	cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/7.jpg',
			// },
			// {
			// 	tag: '630万人',
			// 	tag_title: [],
			// 	tag_time: '',
			// 	tag_red: '',
			// 	tag_red_bg: '特惠秒杀 00:07:05',
			// 	title: 'XXXX的直播',
			// 	name: 'XXXX',
			// 	appreciate: '100万+',
			// 	avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/7.jpg',
			// 	cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			// },
			// {
			// 	tag: '',
			// 	tag_title: ['鉴别中', '演戏'],
			// 	tag_time: '',
			// 	tag_red: '',
			// 	tag_red_bg: '',
			// 	title: '刘诗诗的直播',
			// 	name: '刘诗诗',
			// 	appreciate: '98.8万',
			// 	avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/8.jpg',
			// 	cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/9.jpg',
			// },
			// {
			// 	tag: '',
			// 	tag_title: [],
			// 	tag_time: '预约中 - 02/28 22:00',
			// 	tag_red: '',
			// 	tag_red_bg: '',
			// 	title: '某某某的直播',
			// 	name: '某某某',
			// 	appreciate: '2345',
			// 	avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg',
			// 	cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/10.jpg',
			// }
		];
	},
	videoData() {
		return [
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/2.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/3.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/4.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/5.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/6.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/7.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/8.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/1.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			},
			{
				title: '某某某的视频',
				name: '某某某',
				appreciate: '499',
				avatar: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/avatar/2.jpg',
				cover_img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/live/8.jpg',
			}
		];
	},
	gridSortData() {
		return [{
			id: 1,
			name: '试听课',
			img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/16.png',
		},
			// 	{
			// 	id: 2,
			// 	name: '平板',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/17.png',
			// }, {
			// 	id: 3,
			// 	name: '电脑',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/18.png',
			// }, {
			// 	id: 4,
			// 	name: '数码',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/19.png',
			// }, {
			// 	id: 5,
			// 	name: '家电',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/20.png',
			// }, {
			// 	id: 6,
			// 	name: '新人红包',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/21.png',
			// }, {
			// 	id: 7,
			// 	name: '手机直播',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/22.png',
			// }, {
			// 	id: 8,
			// 	name: '自营图书',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/23.png',
			// }, {
			// 	id: 9,
			// 	name: '游戏',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/24.png',
			// 	}
		];
	},
	gridSortData1() {
		return [{
			id: 1,
			name: '精彩活动',
			img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/16.png',
		},
		];
	},
	gridSortData2() {
		return [{
			id: 1,
			name: '爱在图书馆',
			img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/16.png',
		},
			// 	{
			// 	id: 2,
			// 	name: '平板',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/17.png',
			// }, {
			// 	id: 3,
			// 	name: '电脑',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/18.png',
			// }, {
			// 	id: 4,
			// 	name: '数码',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/19.png',
			// }, {
			// 	id: 5,
			// 	name: '家电',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/20.png',
			// }, {
			// 	id: 6,
			// 	name: '新人红包',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/21.png',
			// }, {
			// 	id: 7,
			// 	name: '手机直播',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/22.png',
			// }, {
			// 	id: 8,
			// 	name: '自营图书',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/23.png',
			// }, {
			// 	id: 9,
			// 	name: '游戏',
			// 	img: 'https://ss1.ypshengxian.com/feassets/interview/pics/images/home/grid-icon/24.png',
			// 	}
		];
	},
};

export default _home_data;
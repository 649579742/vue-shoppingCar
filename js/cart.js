new Vue({
	el:'#shoppingCar',
	data:{
		title1:"hello vue",
		productList:[],
		totalMoney:0,
		checkAllFlag:false,
		delBox:false,
		delProduct:[],
		mockData:{
		  status: 1,
		  result: {
		    totalMoney: 59,
		    list: [
		      {
		        productId: "000001",
		        productName: "公猫",
		        productPrice: 19,
		        productQuentity: 1,
		        productImage: "img/test.jpg",
		        parts: [
		          {
		            partsId: "1001",
		            partName: "猫粮"
		          },
		          {
		            partsId: "1002",
		            partName: "猫窝"
		          }
		        ]
		      },
		      {
		        productId: "000002",
		        productName: "手机",
		        productPrice: 1000,
		        productQuentity: 2,
		        productImage: "img/goods-1.png",
		        parts: [
		          {
		            partsId: "1003",
		            partName: "耳机"
		          }
		        ]
		      },
		      {
		        productId: "000003",
		        productName: "电脑",
		        productPrice: 3000,
		        productQuentity: 4,
		        productImage: "img/goods-2.png",
		        parts: [
		          {
		            partsId: "1004",
		            partName: "键盘"
		          },
		          {
		            partsId: "1005",
		            partName: "鼠标"
		          },
		          {
		            partsId: "1006",
		            partName: "音响"
		          }
		        ]
		      }
		    ]
		  },
		  message: "1111"
		}
	},
	methods:{
		cartView:function(){
			this.productList=this.mockData.result.list;
			this.totalMoney=this.mockData.result.totalMoney;
		},
		changeMoney:function (product,way) {	
			if(way>0){
				product.productQuentity++;
			}else{
				product.productQuentity--;
				if(product.productQuentity<1){
					product.productQuentity=1;
				}
			}
			
		},
		selectedProduck:function (item) {
			if(typeof item.checked=='undefined'){
				this.$set(item,'checked',true);
			}else{
				item.checked=!item.checked;
			}
						this.checkAllFlag=false;
		},
		checkAll:function (flag) {
			this.checkAllFlag=flag;
			_this=this;
			this.productList.forEach(function (item,index) {
				if(typeof item.checked=='undefined'){
					_this.$set(item,'checked',flag);
				}else{
					item.checked=flag;
				}
			})
			
		},
		totalPrice:function () {
			// _this=this;
			// this.totalMoney=0;
			// this.productList.forEach(function (item,index) {
			// 	if(item.checked){
			// 		_this.totalMoney+=item.productPrice*item.productQuentity;
			// 	}
			// })
		},
		delProductFn:function (item) {
			this.delProduct=item;
			this.delBox=true;
		},
		del:function () {
			var index=this.productList.indexOf(this.delProduct);
			this.productList.splice(index,1);
			this.delBox=false;
		}
	},
	mounted:function(){
		this.$nextTick(function () {
			this.cartView();
		});
	},
	filters:{
		forMartMoney:function(value){
			return '￥'+value.toFixed(2)+'元';
		}
	},
	computed:{
		totalFn:function(){
			_this=this;
			this.totalMoney=0;
			this.productList.forEach(function (item,index) {
				if(item.checked){
					_this.totalMoney+=item.productPrice*item.productQuentity;
				}
			})
			return  this.totalMoney;
		}
	}

});
Vue.filter('money',function(value,type){
	return '￥'+value.toFixed(2)+type;
})
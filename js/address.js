new Vue({
	el:'.container',
	data:{
		mockdata:{
		  status:1,
		  message:"",
		  result:[
		    {
		      addressId:"100001",
		      userName:"JackBean",
		      streetName:"北京市朝阳区朝阳公园",
		      postCode:"100001",
		      tel:"12345678901",
		      isDefault:true
		    },
		    {
		      addressId:"100002",
		      userName:"JackBean",
		      streetName:"北京市朝阳区朝阳公园",
		      postCode:"100001",
		      tel:"12345678901",
		      isDefault:false
		    },
		    {
		      addressId:"100003",
		      userName:"JackBean",
		      streetName:"北京市朝阳区朝阳公园",
		      postCode:"100001",
		      tel:"12345678901",
		      isDefault:false
		    },
		    {
		      addressId:"100004",
		      userName:"JackBean",
		      streetName:"北京市朝阳区朝阳公园",
		      postCode:"100001",
		      tel:"12345678901",
		      isDefault:false
		    },
		    {
		      addressId:"100005",
		      userName:"JackBean",
		      streetName:"北京市朝阳区朝阳公园",
		      postCode:"100001",
		      tel:"12345678901",
		      isDefault:false
		    }
		  ]
		},
		addressList:'',
		listNum:'3',
		checkIndex:0,
		UPS:1
	},
	mounted:function(){
		this.$nextTick(function () {
			this.getAddressList();
		});
	},
	methods:{
		getAddressList:function () {
			// var _this=this;
			// this.$http.get('data/.json').then(function (response) {
			// 	var res =response.data;
			// 	if(status==1){
			// 		_this.addressList=res.result;
			// 	}
			// });
			this.addressList=this.mockdata.result;
		},
		setDefault:function(addressId){
			this.addressList.forEach(function(address,index){
				if(address.addressId==addressId){
					address.isDefault=true;
				}else{
					address.isDefault=false;
				}
			})
		}
	},
	computed:{
		filterAddress:function(){
			return this.addressList.slice(0,this.listNum);
		}
	}
})
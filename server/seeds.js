Meteor.startup(function () {

  if (Posts.find({}).count() === 0) {
		Posts.insert({
			title: Fake.sentence(),
			body: Fake.paragraph(),
			published: Fake.fromArray([true, false])
		});
  }

  if (Vendors.find({}).count() === 0) {
    var data = [
      { 
       name: "御食园川菜馆",
       tel: "415-981-8988",
       image: "/images/1s.jpg",
       website: "http://www.zandyrestaurant.com/",
       published:true
      },

      { 
       name: "重庆麻辣城",
       tel: "626-280-0186",
       image: "/images/2s.jpg",
       website: "http://www.haiwai.com/",
       published:true
      },

      { 
       name: "云南过桥园",
       tel: "626-571-8387",
       image: "/images/3s.jpg",
       website: "http://www.haiwai.com/",
       published:true
      },
     ];

     var datetime = (new Date()).getTime();
    _.each(data, function(vendor) {
      Vendors.insert({
	      	name: vendor.name,
          tel: vendor.tel,
	      	image: vendor.image,
	      	website: vendor.website,
	      	published: vendor.published,
	      	createTime: datetime,
    	});
      datetime += 1;
    });
  }

});

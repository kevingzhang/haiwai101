Template.index.helpers({
  times: function () {
    var times = [];
    _(20).times(function(n){
      times.push(n);
    });
    return times;
  },

  vendorLists: function(){
  	return Vendors.find({}, {sort: {_id : -1}});
  }
});

Template.index.events({
   'click .js-view': function() {
    Router.go('/view/'+this._id);
   },

   'click .js-add': function() {
    Router.go('add');
   },//暂不清楚为什么这个event无法生效？

   'click .js-edit': function() {
    //console.log(this);
    Router.go('/edit/'+this._id);
   },

   'click .js-del': function() {
    Vendors.remove(this._id);
   },
});
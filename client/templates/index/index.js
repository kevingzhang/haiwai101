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
    Router.go('view');
   },

   'click .js-add': function() {
    Router.go('add');
   },

   'click .js-edit': function() {
    Router.go('edit');
   },

   'click .js-del': function() {
    Router.go('index');
   },
});
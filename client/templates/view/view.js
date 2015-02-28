Template.view.events({
   'click .js-edit': function() {
    //console.log(this);
    Router.go('/edit/'+this._id);
   },

   'click .js-del': function() {
    Vendors.remove(this._id);
    Router.go('index');
   },
});
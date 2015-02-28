AutoForm.setDefaultTemplate('ionic');
AutoForm.hooks({
  'edit-vendorinfo-form': {
    onSuccess: function (operation, result, template) {
      alert('商家数据已经成功保存!');
      Router.go("index");
    },

    onError: function(operation, error, template) {
      alert(error.message+'\n商家数据保存操作失败，请与管理员联系!');
      console.log(error);
    }
  }
});

Template.edit.helpers({
  titleStatus: '修改',

  //与router中初始化的变量不同，此处helper中的变量只有在模板中调用时才执行
  vendorInfo: function(){
    // 获得Router 传递过来的URL参数等信息
    var current = Router.current(); 
    // console.log(current);

  	var vendor_id = current.params._id;
    return Vendors.findOne(vendor_id);
  }
});
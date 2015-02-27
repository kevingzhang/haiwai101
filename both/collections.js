Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  body: {
    type: String,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  published: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  }
}));

Vendors = new Mongo.Collection('vendors');

Vendors.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "商家名称",
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  tel: {
    type: String,
    label: "联系电话",
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  image: {
    type: String,
    label: "商家图片",
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  website: {
    type: String,
    label: "网站地址",
    autoform: {
      'label-type': 'stacked'
    }
  },
  published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  }
}));

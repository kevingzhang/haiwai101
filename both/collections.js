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
    },
    optional: true
  },
  image: {
    type: String,
    label: "商家图片",
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    },
    optional: true
  },
  website: {
    type: String,
    label: "网站地址",
    autoform: {
      'label-type': 'stacked'
    },
    optional: true
  },
  published: {
    type: Boolean,
    label: "是否发布",
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  },
  contacts: {
    // label: "联系信息",
    type: Array,
    optional: true
  },
  'contacts.$': {
    label: "联系人",
    type: Object
  },
  'contacts.$.name': {
    label: "姓名",
    type: String
  },
  'contacts.$.phone': {
    label: "电话",
    type: String
  }
}));

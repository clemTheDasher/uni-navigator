// Navigator
const navigator = {
  index: {
    id: 0,
    next: "changeViewHandler",
    type: "bindtap",
    title: "首页",
    data: '{"view": "FRONT_PAGE"}',
  },
  foo: {
    id: 1,
    next: "/pages/index/foo",
    type: "navigate",
    title: "非tabBar页面"
  },
  log: {
    id: 2,
    next: "/pages/logs/logs",
    type: "switchTab",
    title: "tabBar页面"
  },
  welcome: {
    id: 3,
    next: "changeViewHandler",
    type: "bindtap",
    title: "页内切换",
    data: '{"view": "WELCOME", "foo": "bar"}',
  }
}

// Export Config
const config = {
  navigator: navigator
}

export default config
Component({
  properties: {
    navigator: Object,
    current: String,
    exclude: Array
  },
  methods: {
    changeViewHandler: function(event) {
      this.triggerEvent("change", { data: event.target.dataset.data });
    }
  }
})
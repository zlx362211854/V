## V.js is a test used to mimic vuejs.

> use

```
var vm = new V({
        el: '#container',
        template: '<div>{{name}}: {{age}}</div>',
        data: {
            name: 'zlx',
            age: '16'
        }
    });
```

> change vm 

```
 vm.name = 'hsq';
 vm.age = '14';
```

##### then the template will change immediately;

> V.js is simple

```
+(function(w) {
  var V = function(options) {
    let { data, template, el } = options || {};
    const context = this;
    this.node = document.querySelector(el);
    this.template = template;
    // 为每个属性添加get set方法
    Object.keys(data).forEach(function(key) {
      context.define(context, key, data[key]);
    });
    // 初始化时处理模版
    this.renderTemplate(this.node, template);
  };
  var prop = {
    define: function(obj, key, val) {
      Object.defineProperty(obj, key, {
        get() {
          return val;
        },
        set(new_val) {
          // 通知更新
          val = new_val;
          // 更新模版
          this.renderTemplate(this.node, this.template);
        }
      });
    },
    renderTemplate: function(node, template) {
      // 处理模版
      template = template.replace(/{{name}}/, this.name);
      template = template.replace("{{age}}", this.age);
      // 渲染模版
      node.innerHTML = template;
    }
  };
  V.prototype = prop;
  w.V = V;
})(window);
```
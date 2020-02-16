(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{341:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"剖析-react-源码：render-流程（一）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剖析-react-源码：render-流程（一）"}},[t._v("#")]),t._v(" 剖析 React 源码：render 流程（一）")]),t._v(" "),a("p",[t._v("这是剖析 React 源码的第二篇文章，如果你没有阅读过之前的文章，请务必先阅读一下 "),a("a",{attrs:{href:"https://github.com/KieSun/Dream/issues/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("第一篇文章"),a("OutboundLink")],1),t._v(" 中提到的一些注意事项，能帮助你更好地阅读源码。")]),t._v(" "),a("h2",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render")]),t._v(" "),a("p",[t._v("想必大家在写 React 项目的时候都写过类似的代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("APP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这句代码告诉了 React 应用我们想在容器中渲染出一个组件，这通常也是一个 React 应用的入口代码，接下来我们就来梳理整个 "),a("code",[t._v("render")]),t._v(" 的流程，并且会分为几篇文章来讲解，因为流程实在太长了。")]),t._v(" "),a("p",[t._v("首先请大家先定位到 ReactDOM.js 文件的第 702 行代码，开始今天的旅程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032240.png",alt:""}})]),t._v(" "),a("p",[t._v("这部分代码其实没啥好说的，唯一需要注意的是在调用 "),a("code",[t._v("legacyRenderSubtreeIntoContainer")]),t._v(" 函数时写死了第四个参数 "),a("code",[t._v("forceHydrate")]),t._v(" 为 "),a("code",[t._v("false")]),t._v("。这个参数为 "),a("code",[t._v("true")]),t._v(" 时表明了是服务端渲染，因为我们分析的是客户端渲染，因此后面有关这部分的内容也不会再展开。")]),t._v(" "),a("p",[t._v("接下来进入 "),a("code",[t._v("legacyRenderSubtreeIntoContainer")]),t._v(" 函数中，这部分代码分为两块来讲。第一部分是没有 "),a("code",[t._v("root")]),t._v(" 之前我们首先需要创建一个 "),a("code",[t._v("root")]),t._v("（对应这篇文章），第二部分是有 "),a("code",[t._v("root")]),t._v(" 之后的渲染流程（对应接下来的文章）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032241.png",alt:""}})]),t._v(" "),a("p",[t._v("一开始进来函数的时候肯定是没有 "),a("code",[t._v("root")]),t._v(" 的，因此我们需要去创建一个 "),a("code",[t._v("root")]),t._v("，大家可以发现这个 "),a("code",[t._v("root")]),t._v(" 对象同样也被挂载在了 "),a("code",[t._v("container._reactRootContainer")]),t._v(" 上，也就是我们的 DOM 容器上。\n如果你手边有 React 项目的话，在控制台键入如下代码就可以看到这个 "),a("code",[t._v("root")]),t._v(" 对象了。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_reactRootContainer\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032244.png",alt:""}})]),t._v(" "),a("p",[t._v("大家可以看到 "),a("code",[t._v("root")]),t._v(" 是 "),a("code",[t._v("ReactRoot")]),t._v(" 构造函数构造出来的，并且内部有一个 "),a("code",[t._v("_internalRoot")]),t._v(" 对象，这个对象是本文接下来要重点介绍的 "),a("code",[t._v("fiber")]),t._v(" 对象，接下来我们就来一窥究竟吧。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032245.png",alt:""}})]),t._v(" "),a("p",[t._v("首先还是和上文中提到的 "),a("code",[t._v("forceHydrate")]),t._v(" 属性相关的内容，不需要管这部分，反正 "),a("code",[t._v("shouldHydrate")]),t._v(" 肯定为 "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[t._v("接下来是将容器内部的节点全部移除，一般来说我们都是这样写一个容器的的")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这样的形式肯定就不需要去移除子节点了，这也侧面说明了一点那就是容器内部不要含有任何的子节点。一是肯定会被移除掉，二来还要进行 DOM 操作，可能还会涉及到重绘回流等等。")]),t._v(" "),a("p",[t._v("最后就是创建了一个 "),a("code",[t._v("ReactRoot")]),t._v(" 对象并返回。接下来的内容中我们会看到好几个 "),a("code",[t._v("root")]),t._v("，可能会有点绕。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032247.png",alt:""}})]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("ReactRoot")]),t._v(" 构造函数内部就进行了一步操作，那就是创建了一个 "),a("code",[t._v("FiberRoot")]),t._v(" 对象，并挂载到了 "),a("code",[t._v("_internalRoot")]),t._v(" 上。"),a("strong",[t._v("和 DOM 树一样，"),a("code",[t._v("fiber")]),t._v(" 也会构建出一个树结构（每个 DOM 节点一定对应着一个 "),a("code",[t._v("fiber")]),t._v(" 对象），"),a("code",[t._v("FiberRoot")]),t._v(" 就是整个 "),a("code",[t._v("fiber")]),t._v(" 树的根节点")]),t._v("，接下来的内容里我们将学习到关于 "),a("code",[t._v("fiber")]),t._v(" 相关的内容。这里提及一点，"),a("code",[t._v("fiber")]),t._v(" 和 Fiber 是两个不一样的东西，前者代表着数据结构，后者代表着新的架构。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032249.png",alt:""}})]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("createFiberRoot")]),t._v(" 函数内部，分别创建了两个 "),a("code",[t._v("root")]),t._v("，一个 "),a("code",[t._v("root")]),t._v(" 叫做 "),a("code",[t._v("FiberRoot")]),t._v("，另一个 "),a("code",[t._v("root")]),t._v(" 叫做 "),a("code",[t._v("RootFiber")]),t._v("，并且它们两者还是相互引用的。")]),t._v(" "),a("p",[t._v("这两个对象内部拥有着数十个属性，现在我们没有必要一一去了解它们各自有什么用处，在当下只需要了解少部分属性即可，其他的属性我们会在以后的文章中了解到它们的用处。")]),t._v(" "),a("p",[t._v("对于 "),a("code",[t._v("FiberRoot")]),t._v(" 对象来说，我们现在只需要了解两个属性，分别是 "),a("code",[t._v("containerInfo")]),t._v(" 及 "),a("code",[t._v("current")]),t._v("。前者代表着容器信息，也就是我们的 "),a("code",[t._v("document.querySelector('#root')")]),t._v("；后者指向 "),a("code",[t._v("RootFiber")]),t._v("。")]),t._v(" "),a("p",[t._v("对于 "),a("code",[t._v("RootFiber")]),t._v(" 对象来说，我们需要了解的属性稍微多点")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FiberNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WorkTag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tpendingProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tmode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypeOfMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stateNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("return "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effectTag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NoEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alternate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[a("code",[t._v("stateNode")]),t._v(" 上文中已经讲过了，这里就不再赘述。")]),t._v(" "),a("p",[a("code",[t._v("return")]),t._v("、"),a("code",[t._v("child")]),t._v("、"),a("code",[t._v("sibling")]),t._v(" 这三个属性很重要，它们是构成 "),a("code",[t._v("fiber")]),t._v(" 树的主体数据结构。"),a("code",[t._v("fiber")]),t._v(" 树其实是一个单链表树结构，"),a("code",[t._v("return")]),t._v(" 及 "),a("code",[t._v("child")]),t._v(" 分别对应着树的父子节点，并且父节点只有一个 "),a("code",[t._v("child")]),t._v(" 指向它的第一个子节点，即便是父节点有好多个子节点。那么多个子节点如何连接起来呢？答案是 "),a("code",[t._v("sibling")]),t._v("，每个子节点都有一个 "),a("code",[t._v("sibling")]),t._v(" 属性指向着下一个子节点，都有一个 "),a("code",[t._v("return")]),t._v(" 属性指向着父节点。这么说可能有点绕，我们通过图来了解一下这个 "),a("code",[t._v("fiber")]),t._v(" 树的结构。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("APP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nReactDom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("APP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("假如说我们需要渲染出以上组件，那么它们对应的 "),a("code",[t._v("fiber")]),t._v(" 树应该长这样")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-32250.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中我们可以看到，每个组件或者 DOM 节点都会对应着一个 "),a("code",[t._v("fiber")]),t._v(" 对象。另外你手边有 React 项目的话，也可以在控制台输入如下代码，查看 "),a("code",[t._v("fiber")]),t._v(" 树的整个结构。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应着 FiberRoot")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fiber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_reactRootContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_internalRoot\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("另外两个属性在本文中虽然用不上，但是看源码的时候笔者觉得很有意思，就打算拿出来说一下。")]),t._v(" "),a("p",[t._v("在说 "),a("code",[t._v("effectTag")]),t._v(" 之前，我们先来了解下啥是 "),a("code",[t._v("effect")]),t._v("，简单来说就是 DOM 的一些操作，比如增删改，那么 "),a("code",[t._v("effectTag")]),t._v(" 就是来记录所有的 effect 的，但是这个记录是通过位运算来实现的，"),a("a",{attrs:{href:"https://github.com/facebook/react/blob/master/packages/shared/ReactSideEffectTags.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 是 "),a("code",[t._v("effectTag")]),t._v(" 相关的二进制内容。")]),t._v(" "),a("p",[t._v("如果我们想新增一个 "),a("code",[t._v("effect")]),t._v(" 的话，可以这样写 "),a("code",[t._v("effectTag |= Update")]),t._v("；如果我们想删除一个 "),a("code",[t._v("effect")]),t._v(" 的话，可以这样写 "),a("code",[t._v("effectTag &= ~Update")]),t._v("。")]),t._v(" "),a("p",[t._v("最后是 "),a("code",[t._v("alternate")]),t._v(" 属性。其实在一个 React 应用中，通常来说都有两个 "),a("code",[t._v("fiebr")]),t._v(" 树，一个叫做 old tree，另一个叫做 workInProgress tree。前者对应着已经渲染好的 DOM 树，后者是正在执行更新中的 fiber tree，还能便于中断后恢复。两棵树的节点互相引用，便于共享一些内部的属性，减少内存的开销。毕竟前文说过每个组件或 DOM 都会对应着一个 "),a("code",[t._v("fiber")]),t._v(" 对象，应用很大的话组成的 "),a("code",[t._v("fiber")]),t._v(" 树也会很大，如果两棵树都是各自把一些相同的属性创建一遍的话，会损失不少的内存空间及性能。")]),t._v(" "),a("p",[t._v("当更新结束以后，workInProgress tree 会将 old tree 替换掉，这种做法称之为 double buffering，这也是性能优化里的一种做法，有兴趣的同学可以自行查找资料。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("以上就是本文的全部内容了，最后通过一张流程图总结一下这篇文章的内容。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032252.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("阅读源码是一个很枯燥的过程，但是收益也是巨大的。如果你在阅读的过程中有任何的问题，都欢迎你在评论区与我交流。")]),t._v(" "),a("p",[t._v("另外写这系列是个很耗时的工程，需要维护代码注释，还得把文章写得尽量让读者看懂，最后还得配上画图，如果你觉得文章看着还行，就请不要吝啬你的点赞。")]),t._v(" "),a("p",[t._v("下一篇文章还是 render 流程相关的内容。")]),t._v(" "),a("p",[t._v("最后，觉得内容有帮助可以关注下我的公众号 「前端真好玩」咯，会有很多好东西等着你。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032253.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);
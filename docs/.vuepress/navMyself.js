let nav = [
    //跳转到外部网页，需http/https前缀
    {
        text: "参考手册",
        ariaLabel: '📘这里有参考手册哦',
        items: [
            { text: "MDN", link: "https://developer.mozilla.org/zh-CN/docs/Web" },
            { text: "Express", link: "https://www.expressjs.com.cn/en/resources/middleware/session.html" },

            { text: "Vue.js", link: "https://cn.vuejs.org/", alt: '🎉渐进式JavaScript 框架✨' },

            { text: "vuepress", link: "https://vuepress.vuejs.org/zh/" },
            { text: "npm", link: "https://www.npmjs.com/" },
            { text: "webpack", link: "https://webpack.docschina.org/" },
            { text: "elementUI", link: "https://element.eleme.cn/#/zh-CN" },
            { text: "ESlint", link: "https://eslint.bootcss.com/" },
            { text: "uniapp", link: "https://uniapp.dcloud.io/" },
            { text: "微信小程序", link: "https://developers.weixin.qq.com/miniprogram/dev/framework/" }





        ]
    },

    {
        text: "前端基础",
        ariaLabel: '🎉前端基础相关知识在这里诶~✨',   //用于识别的label
        items: [
            { text: "HTML", link: "/frontEnd/00-HTML/" },
            { text: "CSS", link: "/frontEnd/01-CSS/" },
            { text: "javascript", link: "/frontEnd/02-javascript/" },
            { text: "webAPI", link: "/frontEnd/03-webAPI/" },
            { text: "jQuery", link: "/frontEnd/04-jQuery/" },
            { text: "数据可视化", link: "/frontEnd/05-dataVisualization/" },
            { text: "ajax", link: "/frontEnd/06-ajax/" },

        ]
    },


    {
        text: "interview", link: '/interview/'
        // items: [
        //     { text: "Vue", link: '/interview/Vue/' },
        //     { text: "webpack", link: "/interview/webpack/" },

        // ]
    },
    {
        text: "前端框架",
        ariaLabel: '🎉前端框架相关知识在这里诶~✨',
        items: [
            { text: "vue", link: "/frame/vue/" },
            { text: "react", link: "/frame/react/" },
            { text: "uniapp", link: "/frame/uniapp/" },


        ]
    },
    {
        text: "前端工程化", link: "/",
        ariaLabel: '🎉前端工程化相关知识在这里诶~✨',
    },

    {
        text: "✨精华文章", link: '/blog/',
        // items: [
        //     { text: "常用工具", link: "/tools/common-tools/" },
        // ]
    },

    {
        text: "计算机基础",
        ariaLabel: '🎉计算机基础相关知识在这里诶~✨',
        items: [
            { text: "计算机网络", link: "/cs_basic/cs_network/" },
            { text: "数据结构&算法", link: "/cs_basic/data_construct/" },

        ]
    },

    {
        text: "tools",
        items: [
            { text: "常用工具", link: "/tools/common-tools/" },
            { text: "git", link: "/tools/git/" },
            { text: "正则", link: "/tools/regexp/RegExp_class_notes/" },
            { text: "obsidian", link: "/tools/obsidian/" },

        ]
    },

    {
        text: 'Github',
        ariaLabel: '👧lillian\'github',   //用于识别的label
        link: 'https://github.com/Lillian229'
    }
]

module.exports = nav;
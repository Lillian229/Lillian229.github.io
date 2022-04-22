/*
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-01-03 18:38:38
 * @LastEditTime: 2022-03-15 17:08:18
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
 */
let nav = [
    {
        text: "📖本站目录", link: '/list/',
    },
    //跳转到外部网页，需http/https前缀
    {
        text: "参考手册",
        ariaLabel: '📘这里有参考手册哦',
        items: [
            { text: "MDN(新版本)", link: "https://developer.mozilla.org/zh-CN/docs/Web" },
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
        text: "🧸前端基础",
        ariaLabel: '🎉前端基础相关知识在这里诶~✨',   //用于识别的label
        items: [
            { text: "HTML&CSS", link: "/frontEnd/00-HTML&CSS/" },
            { text: "JavaScript", link: "/frontEnd/02-javascript/" },
            // { text: "webAPI", link: "/frontEnd/03-webAPI/" },
            // { text: "jQuery", link: "/frontEnd/04-jQuery/" },
            { text: "数据可视化", link: "/frontEnd/05-dataVisualization/" },
            { text: "ajax", link: "/frontEnd/06-ajax/" },
            { text: "webpack", link: "/frontEnd/07-webpack/" },
            { text: "ES6", link: "/frontEnd/08-ES6/"}

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
            { text: "Vue", link: "/frame/vue/" },
            { text: "React", link: "/frame/react/" },
            { text: "Uniapp", link: "/frame/uniapp/" },


        ]
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
            { text: "计算机基础", link: "/cs_basic/cs_basic/" },
            { text: "计算机网络", link: "/cs_basic/cs_network/" },
            { text: "数据结构&算法", link: "/cs_basic/data_construct/" },

        ]
    },

    {
        text: "⚙️tools",
        items: [
            { text: "🗃Git", link: "/tools/git/" },
            { text: "📏正则", link: "/tools/regexp/RegExp_class_notes/" },
            { text: "🔧常用工具", link: "/tools/common-tools/" },
            { text: "🔮obsidian", link: "/tools/obsidian/" },

        ]
    },

    {
        text: "Plan",
        ariaLabel: '计划准备要做的事情',
        items: [
            { text: "前端工程化", link: "/" },
            { text: "Vue3源码阅读和调试", link: "/" },
            { text: "React的学习",link: "/"},
            { text: "Rust", link: "/" },
        ]
    },


    // {
    //     text: 'Github',
    //     ariaLabel: '👧lillian\'github',   //用于识别的label
    //     link: 'https://github.com/Lillian229'
    // }
]

module.exports = nav;
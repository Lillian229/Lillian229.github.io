// const {getChildren} = require("vuepress-sidebar-atuo")
const sidebarMyself = require("./sidebarMyself")
const navMyself = require("./navMyself")
// const sidebarConfig = require("./sidebarConfig");
// const autosidebar = require('vuepress-auto-sidebar-doumjun')

module.exports = {
    title: '莉安\'blog', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '莉安的前端学习之路', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
    head: [
        ['link', { rel: 'icon', href: '/star_byya.png' }],
    ],
    base: '/',
    // base:'/Lillian229.github.io/',
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5']
    },
    plugins:
        ['@vuepress/active-header-links', '@vuepress/back-to-top'],
    //     '@vuepress/active-header-links', {
    //     sidebarLinkSelector: '.sidebar-link',
    //     headerAnchorSelector: '.header-anchor'
    // },

    // ['@vuepress/back-to-top']


    themeConfig: {


        logo: '/star_byya.png',
        nav: navMyself,
        sidebar: sidebarMyself,
        sidebarDepth: 2,
        collapsable: true,



        // sidebar:{

        //     '/frontEnd/':[
        //         {
        //             title: 'HTML',
        //             collapsable: true,
        //             children:getChildren('./docs/frontEnd/00-HTML/')
        //         },
        //     {
        //             title: 'JS',
        //             collapsable: true,
        //             children:getChildren('./docs/frontEnd/02-javascript/')
        //     }
        //     ],
        //     '/tools/':[
        //         {
        //             title: '常用工具',
        //             collapsable: true,
        //             children:getChildren('./docs/tools/common_tools/')
        //         },
        //         {
        //             title: '正则',
        //             collapsable: true,
        //             children:getChildren('./docs/tools/regexp/')
        //         },
        //     ],
        // }











        // sidebar: 'auto',
        // {
        //     '/frontEnd/00-HTML/':[
        //         '',
        //         '2',
        //         '01-browser&variable'
        //     ],
        //     '/frontEnd/02-javascript/':[
        //         '',
        //         '2',
        //         '45',
        //         'Aliyun_服务器',
        //         'cut_string',
        //         'array'
        //     ],
        //     '/tools/regexp/':[
        //         'RegExp_class_notes'
        //     ]
        // }

        // {
        //     '/frontEnd/00-HTML/': [{
        //         title: 'HTML',
        //         collapsable: true,
        //         sidebarDepth: 1,
        //         children: getChildren('./docs/frontEnd/00-HTML/')
        //         // children:[
        //         //     { title:'浏览器三部分，变量名，数据类型',path:'/01-浏览器，三部分，变量名，数据类型.md'}
        //         // [,'']
        //         //     ]

        //     },
        //     ],
        // }



        // sidebar: sidebarConfig,


        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        // sidebar:
        //         {
        //             '/frontEnd/00-HTML/':[{
        //                 title:'HTML',
        //                 collapsable:true,
        //                 sidebarDepth:1,
        //                 children:autosidebar('/frontEnd/00-HTML/')
        //                 // children:[
        //                 //     { title:'浏览器三部分，变量名，数据类型',path:'/01-浏览器，三部分，变量名，数据类型.md'}
        //                     // [,'']
        //             //     ]

        //             }
        //         ],
        //         }
        //             '/frontEnd/02-javascript/':[{
        //                 title: 'JS基础',   // 一级菜单名称
        //                     collapsable: false, // false为默认展开菜单, 默认值true是折叠,
        //                     sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
        //                     children: [
        //                         ['2.md', '子菜单1'],  
        //                         ['3.md', '子菜单2']
        //                     ]
        //                 },
        //                 {
        //                     title: 'JS进阶',
        //                     collapsable: false, 
        //                     children: [
        //                         ['4.md', '子菜单1']
        //                     ]
        //                 }
        //             ],

        //     //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
        // }













        // nav: [           
        //     //格式一：直接跳转，'/'为不添加路由，跳转至首页
        //     { text: '首页', link: '/' },    

        //     //格式二：添加下拉菜单，link指向的文件路径
        //     {
        //         text: '分类',  //默认显示        
        //         ariaLabel: '分类',   //用于识别的label
        //         items: [
        //             { text: '文章', link: '/pages/JS/基于http网络层——性能优化汇总.md' },  
        //             //点击标签会跳转至link的markdown文件生成的页面
        //             { text: '琐碎', link: '/pages/JS/1.md' },
        //         ]
        //     },
        //     { text: '功能演示', link: '/pages/JS/2.md' },

        //     //格式三：跳转至外部网页，需http/https前缀
        //     { text: 'Github', link: 'https://github.com/Lillian229' },
        // ],

        // //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        // sidebar: {'/pages/JS/':[         
        //         {
        //             title: '大分类1',   // 一级菜单名称
        //             collapsable: false, // false为默认展开菜单, 默认值true是折叠,
        //             sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
        //             children: [
        //                 ['2.md', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/pages/JS/3.md
        //                 ['3.md', '子菜单2']
        //             ]
        //         },
        //         {
        //             title: '大分类2',
        //             collapsable: false, 
        //             children: [
        //                 ['4.md', '子菜单1']
        //             ]
        //         }
        //     ],

        //     //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
        // }



    }
}

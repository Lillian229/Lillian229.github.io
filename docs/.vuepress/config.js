// const { getChildren } = require("vuepress-sidebar-atuo")

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
        extractHeaders: ['h2', 'h3', 'h4']
    },

    themeConfig: {
        // sidebar: 'auto',
        // sidebarDepth: 1,

        logo: '/star_byya.png',
        nav: [
            //跳转到外部网页，需http/https前缀
            {
                text: "参考手册",
                ariaLabel: '📘这里有参考手册哦',
                items: [
                    { text: "MDN", link: "https://developer.mozilla.org/zh-CN/docs/Web" },
                    { text: "Express", link: "https://www.expressjs.com.cn/en/resources/middleware/session.html" },

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
                text: "前端框架",
                ariaLabel: '🎉前端框架相关知识在这里诶~✨',
                items: [
                    { text: "vue", link: "/frame/vue/" },
                    { text: "react", link: "/frame/react/" },

                ]
            },
            {
                text: "前端工程化", link: "/",
                ariaLabel: '🎉前端工程化相关知识在这里诶~✨',
            },

            {
                text: "计算机基础",
                ariaLabel: '🎉计算机基础相关知识在这里诶~✨',
                items: [
                    { text: "计算机网络", link: "/cs_basic/cs_network/" },
                    { text: "数据结构", link: "/cs_basic/data_construct" },

                ]
            },

            {
                text: "tools",
                items: [
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
        ],

        sidebar: {
            '/frontEnd/00-HTML/':[
                '',
                '2',
                '01-browser&variable'
            ],
            '/frontEnd/02-javascript/':[
                '',
                '2',
                '45',
                'Aliyun_服务器',
                'cut_string'
            ],
            '/tools/regexp/':[
                'RegExp_class_notes'
            ]
        }
       
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

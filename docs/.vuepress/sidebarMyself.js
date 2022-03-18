 // 写法一：
let sidebar = {
    // '/frontEnd/':[
    //     ''
    // ],
    // '/list/':[
    //     'LIST'
    // ],
    '/frontEnd/00-HTML&CSS/': [
        '',
        '01-browser&variable',
        '02-tag',
        '03-tables&forms&list',
        '04-css_selector',
        '05-stylesheets&selectors',
        '06-background&eledisplay',
        '07-boxmodel&border&shadow&PS',
        '08-float&position',
        '09-sort&hidden',
        '10-sprite&icon&tri',
        '11-UIstyle&veralign&layout',
        '12-html5&SEO',
        '13-css3',
        '14-2D',
        '15-3D',
        '16-animation',
        '17-webmobile',
        '18-layout_fluid',
        '19-layout_flex',
        '20-layout_rem',
        '21-layout_response'


    ],

    '/frontEnd/02-javascript/': [
        '',
        '00-basicconcepts',
        '01-js&variable&datatype',
        '02-datatype.md',
        '02-01-array',
        '02-02-string',
        '02-03-function',
        '03-operators&process',
        '04-scope',
        '04-array&function',
    ],

    '/interview/': [
        '',

        {
            title: 'HTML&CSS',
            // path: '/cs_basic/data_construct/',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            // initialOpenGroupIndex: -1,
            // initialOpenGroupIndex: 0,
            children: [
                'html&css',
            ]
        },

 
        // 'html&css',
        'JavaScript_basic',
        'JavaScript_pro',
        'Vue',
        'ES6',
        'Ajax',
        'Webpack'


    ],
        // {
        //     // title: '时间复杂度',
        //     // path: '/cs_basic/data_construct/',
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 1,    // 可选的, 默认值是 1
        //     // initialOpenGroupIndex: -1,
        //     // initialOpenGroupIndex: 0,
        //     children: [
        //         '',
        //         'html&css',
        //         'JavaScript_basic',
        //         'JavaScript_pro',
        //         'Vue',
        //         'ES6',
        //         'Ajax',
        //         'Webpack'
        //     ]
        // },

        // {
        //     title: 'interview_review',
        //     path: '/interview/',
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 2,    // 可选的, 默认值是 1
        //     // initialOpenGroupIndex: -1,
        //     // initialOpenGroupIndex: 0,
        //     children: [
        //         '',
        //         // 'JavaScript_basic',
        //         // 'JavaScript_pro',
        //         // 'Vue',
        //         // 'ES6',
        //         // 'Ajax',
        //         // ''
        //         // 'Vue1',
        //     ]
        // },
        // {
        //     title: 'JavaScript基础',
        //     path: '/interview/JavaScript_basic/',
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 2,    // 可选的, 默认值是 1
        //     // initialOpenGroupIndex: -1,
        //     // initialOpenGroupIndex: 0,
        //     children: [
        //         '',
        //         'JavaScript_basic',
        //         //     // 'Vue1',
        //     ]
        // },
        // {
        //     title: 'JavaScript高级',
        //     path: '/interview/JavaScript_pro/',
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 2,    // 可选的, 默认值是 1
        //     // initialOpenGroupIndex: -1,
        //     // initialOpenGroupIndex: 0,
        //     children: [
        //         '',
        //         'JavaScript_pro',
        //         // 'Vue1',
        //     ]
        // },


        // {
        //     title: 'vue',
        //     path: '/interview/Vue/',
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 2,    // 可选的, 默认值是 1
        //     // initialOpenGroupIndex: -1,
        //     // initialOpenGroupIndex: 0,
        //     children: [
        //         '',
        //         'Vue',
        //         // 'Vue1',
        //     ]
        // },
        // {
        //     title: 'ES6',
        //     path: '/interview/ES6/',
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 2,    // 可选的, 默认值是 1
        //     // initialOpenGroupIndex: -1,
        //     // initialOpenGroupIndex: 0,
        //     children: [
        //         '',
        //         'ES6',
        //     ]
        // },
        // {
        //     title: 'Ajax',
        //     path: '/interview/Ajax/',
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 2,    // 可选的, 默认值是 1
        //     // initialOpenGroupIndex: -1,
        //     // initialOpenGroupIndex: 0,
        //     children: [
        //         '',
        //         'Ajax',
        //     ]
        // },
        // {
        //     title: 'Webpack',
        //     path: '/interview/Webpack/',
        //     collapsable: true, // 可选的, 默认值是 true,
        //     sidebarDepth: 2,    // 可选的, 默认值是 1
        //     children: [
        //         '',
        //         'Webpack',
        //     ]
        // },


    '/frame/vue/': [
        '',
        'vue',
        'vue-directives'


    ],
    '/frame/uniapp/': [
        '',
        'uniapp',


    ],



    '/blog/': [
        '',
        'performance_optimization',
        'HTTP1.0 VS HTTP1.1 VS HTTP2.0',
        // 'performance'
    ],



    '/cs_basic/cs_basic/': [
        'cs_basic',
        'Aliyun',

    ],

    '/cs_basic/cs_network/': [
        '',
    ],


    '/cs_basic/data_construct/': [
        {
            title: '时间复杂度',
            path: '/cs_basic/data_construct/',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            // initialOpenGroupIndex: -1,
            // initialOpenGroupIndex: 0,
            children: [
                '',
                'time_complexity'
            ]
        },
    ],



    '/tools/git/': [
        '',
        'git',
        'git-intro',
        'git-team'
    ],

    '/tools/regexp/': [
        // 'emoji',
        '',
        'RegExp_class_notes'
    ],

    '/tools/common-tools/': [
        '',
        '01qualitySoftware&tools',
        '02mac_shortcut',
        '03win_shortcut_command',
        '04little_issue',
        '05vscode',
        'common-code-blocks'
    ],
    
    '/tools/obsidian/': [
        '',
        'FAQ',
        'shortcut&plugin',
        'qualityAbstracts',
        'markdown'
    ], 

}


module.exports = sidebar;





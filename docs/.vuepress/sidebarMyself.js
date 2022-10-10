// 写法一：
let sidebar = {
    // '/frontEnd/':[
    //     ''
    // ],
    '/list/': [
        ''
    ],
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
        // '02-datatype.md',
        {
            title: '2.2.数据类型',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '02-00-00-concept',
                '02-00-01-basictype',
                '02-00-02-reference',
                '02-00-03-transfer',
                '02-00-04-detection',
            ]
        },
        {
            title: '2.2.1.数组中的常用方法',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '02-01-00-array',
                '02-01-01-method',
                '02-01-02-traverse',
                '02-01-03-transfer',
                '02-01-04-deduplication',
                '02-01-05-sort',
                '02-01-06-other'
            ]
        },
        '02-02-string',
        '02-03-function',
        '02-04-date',
        '03-operators&process',
        '04-scope',
        '05-jsstack',
        '06-closure',
        '07-this',
        {
            title: '2.8.JavaScript面向对象',
            // path: '/cs_basic/data_construct/',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            // initialOpenGroupIndex: -1,
            // initialOpenGroupIndex: 0,
            children: [
                '08-00-js-oo',
                '08-01',
                '08-inherit'
            ]
        },
        '09-sync&async.md',
        'DOM'
    ],

    // '/frontEnd/03-webAPI/': [
    //     '',
    // ],

    // '/frontEnd/04-jQuery/': [
    //     '',
    // ],

    '/frontEnd/05-dataVisualization/': [
        '',
    ],


    '/frontEnd/06-ajax/': [
        '',
        '01-ajax'
    ],


    '/frontEnd/07-webpack/': [
        '',
        '00-module',
        '01-concept',
        '02-use',
        '03-configuration',
        '04-server',
        'wpissue'
    ],

    '/frontEnd/08-ES6/': [
        '',
        '01-let&const',
        '02-destructuring&assignment',
        '03-arrow',
        '04-object',
        '05-Set&Map',
        '07-Symbol',
        '08-ESModule',
        'clone',
        'class',
        'Generatoe&Iterator',
        'Proxy&Reflect',
        'compose',
    ],

    '/interview/': [
        '',
        'daily',
        'basic',
        {
            title: 'HTML&CSS',
            // path: '/cs_basic/data_construct/',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            // initialOpenGroupIndex: -1,
            // initialOpenGroupIndex: 0,
            children: [
                'html',
                'css'
            ]
        },
        {
            title: 'JavaScript',
            // path: '/cs_basic/data_construct/',
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            // initialOpenGroupIndex: -1,
            // initialOpenGroupIndex: 0,
            children: [
                'JavaScript_basic',
                'JavaScript_pro',
            ]
        },


        // 'html&css',
        // 'JavaScript_basic',
        // 'JavaScript_pro',
        'Vue',
        'ES6',
        'Ajax',
        'Webpack',
        'http'


    ],




    '/frame/vue/': [
        '',
        'vue',
        'vue-directives'
    ],

    '/frame/react/': [
        '',
        '01-react_basic',
        '02-JSX_basic',
        '03-component',
        '04-component-communication'
    ],

    '/frame/uniapp/': [
        '',
        'uniapp',


    ],


    '/FEDeploy/': [
        '',
        'docker'
    ],


    '/blog/': [
        '',
        'performance_optimization',
        'HTTP1.0 VS HTTP1.1 VS HTTP2.0',
        'SEO',
        'speedread',
        'quicker'

        // 'performance'
    ],



    '/cs_basic/cs_basic/': [
        '',
        'Aliyun',

    ],

    '/cs_basic/cs_network/': [
        '',
        'network',
        'Nginx',
        'JWT'
    ],


    '/cs_basic/data_construct/': [
        {
            title: '数据结构和算法',
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
        'git-team',
        'git-issue',
        'git-webstorm'
    ],

    '/tools/regexp/': [
        // 'emoji',
        '',
        'RegExp_class_notes'
    ],

    '/tools/Linux/': [
        '',
        '01basic_command'
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

    '/plan/study_everyweek/': [
        '',
        '2022',
    ],

    '/plan/ngineering/': [
        '',
        'engineering'


    ]



}


module.exports = sidebar;





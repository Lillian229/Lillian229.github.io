const {getChildren} = require("./vuepress-sidebar-atuo/vuepress-sidebar-auto");
let sidebar={};
/**
 * */
sidebar={       //左侧列表
        '/fontEnd/': [
            {
                title: '前端基础',
                collapsable: false,//来让一个组永远都是展开状态
                sidebarDepth: 2,
                children: getChildren('./docs','/fontEnd')
            }
        ],

        // '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
    };
module.exports = sidebar;
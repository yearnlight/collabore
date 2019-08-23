export default [
    {
        name: "首页",
        path: "/home",
        deadline: "",
        id: "1",
        level: "1",
        children: [
            {
                name: "首页",
                id: "11",
                level: "2",
                icon: "el-icon-monitor",
                path: "/home"
            }
        ]
    },
    {
        name: "面试管理",
        path: "/interview",
        deadline: "",
        id: "3",
        level: "1",
        children: [
            {
                name: "面试题库",
                id: "31",
                level: "2",
                icon: "el-icon-document-copy",
                path: "/interview/questions"
            },
            {
                name: "出题记录",
                id: "32",
                level: "2",
                icon: "el-icon-notebook-2",
                path: "/interview/draw"
            }
        ]
    },
    {
        name: "员工管理",
        path: "/employe",
        deadline: "",
        id: "4",
        level: "1",
        children: [
            {
                name: "员工列表",
                id: "41",
                level: "2",
                icon: "el-icon-s-custom",
                path: "/employe/list"
            },
            {
                name: "组织架构",
                id: "42",
                level: "2",
                icon: "el-icon-share",
                path: "/employe/topology"
            }
        ]
    },
    {
        name: "福利管理",
        path: "/welfare",
        deadline: "",
        id: "5",
        level: "1",
        children: [
            {
                name: "福利采购",
                id: "51",
                level: "2",
                icon: "el-icon-shopping-cart-full",
                path: "/welfare/procurement"
            },
            {
                name: "福利发放",
                id: "52",
                level: "2",
                icon: "el-icon-present",
                path: "/welfare/issue"
            },
            {
                name: "兑换记录",
                id: "53",
                level: "2",
                icon: "el-icon-goods",
                path: "/welfare/exchange"
            }
        ]
    },
    {
        name: "访客管理",
        path: "/visitor",
        deadline: "",
        id: "6",
        level: "1",
        children: [
            {
                name: "访客列表",
                id: "61",
                level: "2",
                icon: "el-icon-s-check",
                path: "/visitor/list"
            }
        ]
    },
    {
        name: "绩效管理",
        path: "/result",
        deadline: "",
        id: "7",
        level: "1",
        children: [
            {
                name: "红黑事件",
                id: "71",
                level: "2",
                icon: "el-icon-s-claim",
                path: "/result/redBlack"
            },
            {
                name: "内推记录",
                id: "74",
                level: "2",
                icon: "el-icon-s-order",
                path: "/result/push"
            },
            {
                name: "考核记录",
                id: "75",
                level: "2",
                icon: "el-icon-s-marketing",
                path: "/result/assessment"
            },
            {
                name: "积分列表",
                id: "72",
                level: "2",
                icon: "el-icon-medal-1",
                path: "/result/integral"
            }
        ]
    },
    {
        name: "设置",
        path: "/setting",
        deadline: "",
        id: "2",
        hide: true,
        level: "1",
        children: [
            {
                name: "个人设置",
                id: "21",
                level: "2",
                icon: "el-icon-user",
                deadline: "",
                path: "/setting",
                children: [
                    {
                        name: "账号管理",
                        id: "21",
                        level: "2",
                        icon: "el-icon-s-custom",
                        deadline: "",
                        path: "/setting/account"
                    }
                ]
            }
        ]
    }
]


export const AsideData =()=>{
    return [
        {
        name:'开始',
        children: [
            {
                name:'介绍',
                path:'/'
            },
            {
                name:'下载与使用',
                path:'/Use'
            }
        ]
        },
        {
            name: '样式',
            children:[
                {
                    name:'Color色彩',
                    path:'/Color'
                },
                {
                    name:'字体',
                    path:'/Font'
                },
                {
                    name:'Layout布局',
                    path:'/Layout'
                },
                {
                    name:'Container容器布局',
                    path:'/Container'
                },
            ]
        },
        {
            name:'组件',
            children:[
                {
                    name:'Switch组件',
                    path:'/Switch'
                },
                {
                    name:'Button组件',
                    path:'/Button'
                },
                {
                    name:'Dialog组件',
                    path:'/Dialog'
                },
                {
                    name:'Tab组件',
                    path:'/Tab'
                },
                {
                    name:'Table组件',
                    path:'/Table'
                },
            ]
        }
    ]

}
export function Partner(){
    const partnerDatas = [
        {
            organization: "國立清華大學 資訊工程系",
            name: "黃婷婷",
            title: "教授",
            website: "https://www.cs.nthu.edu.tw/~tingting/",
            descriptions: [
                "硬體安全"
            ]
        },
        {
            organization: "鈦昇科技股份有限公司",
            name: "吳曉玲",
            title: "博士",
            website: "",
            descriptions: [
                "通訊安全、密碼學"
            ]
        },
        {
            organization: "國立宜蘭大學 資訊工程系",
            name: "曾國鈞",
            title: "助理教授",
            website: "https://sites.google.com/view/kctseng",
            descriptions: [
                "量子密碼學（先進安全計算實驗室）"
            ]
        },
        {
            organization: "國立清華大學 資訊工程系",
            name: "吳中浩",
            title: "教授",
            website: "http://www.allenwuuw.com/",
            descriptions: [
                "人工智慧、AI Art"
            ]
        },
        {
            organization: "大連理工大學 軟件學院",
            name: "郭成",
            title: "教授",
            website: "http://faculty.dlut.edu.cn/2012011156/zh_CN/index.htm",
            descriptions: [
                "通訊安全、密碼學"
            ]
        }
    ]
    const getName = (name: string, website: string) => {
        if(website === ""){
            return <span>{name}</span>
        }else{
            return <a href={website} target="_blank">{name}</a>
        }
    }
    return (
        <div className="partner">
            <ul>
                {
                    partnerDatas.map(data => {
                        return (
                            <li>{data.organization} {getName(data.name, data.website)}{data.title}
                                <ul>
                                    { data.descriptions.map(description => {
                                        return <li>{description}</li>
                                    })}
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
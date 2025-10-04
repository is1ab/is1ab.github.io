import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export function Member(){
    const phdUserTableItem = [
        {
            key: '1',
            name: "陳勝舢",
            joinDate: "2022.07",
            role: "博三",
            coAdvisor: '白敦文',
            experience: "奧義智慧科技股份有限公司實習生",
            certificate: "CEH",
            website: "/#/Member/2022/Ryan"
        }
    ]
    const masterUserTableItem = [
        {
            key: '0',
            name: "顏柏耀",
            joinDate: "2023.03",
            role: "碩三，資安碩士",
            coAdvisor: '',
            experience: "雙聯學位籌備中",
            certificate: "應用機器學習技術偵測 EDoS 攻擊於雲端微服務成本分析",
            website: "/#/Member/2023/Y"
        },
        {
            key: '1',
            name: "許貽昇",
            joinDate: "2023.03",
            role: "碩三，資安碩士",
            coAdvisor: '',
            experience: "奧義智慧科技股份有限公司、研發替代役籌備中",
            certificate: "使用程式碼屬性圖萃取技術於自動化漏洞挖掘與風險路徑分析",
            website: "/#/Member/2023/Eason"
        },
        {
            key: '2',
            name: "吳冠廷",
            joinDate: "2023.12",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "前保華資安股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Guan4Tou2"
        },
        {
            key: '3',
            name: "李宜鴻",
            joinDate: "2024.11",
            role: "碩二，資安碩士",
            coAdvisor: '陳昱圻',
            experience: "美國辛辛那提大學 雙聯學位",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Rock"
        },
        {
            key: '4',
            name: "李宇揚",
            joinDate: "2023.12",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Young"
        },
        {
            key: '5',
            name: "黃廷翰",
            joinDate: "2023.12",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Win"
        },
        {
            key: '6',
            name: "陳彥宇",
            joinDate: "2024.01",
            role: "碩二，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Adb2"
        },
        {
            key: '7',
            name: "李佳軒",
            joinDate: "2024.01",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（中級）、iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/WIFI"
        },
        {
            key: '8',
            name: "王立翔",
            joinDate: "2024.04",
            role: "碩二，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/PaulWang"
        },
        {
            key: '9',
            name: "黃奕評",
            joinDate: "2024.06",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/ypp"
        },
        {
            key: '10',
            name: "廖哲霈",
            joinDate: "2024.08",
            role: "碩二，資工碩士",
            coAdvisor: '郭忠義',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/RobertLiao"
        },
        {
            key: '11',
            name: "黃昱翔",
            joinDate: "2025.05",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "Cymetrics 實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/member/2024/Marco"
        },
        {
            key: '12',
            name: "連羿婷",
            joinDate: "2024.12",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/member/2025/Ting"
        },
        {
            key: '13',
            name: "沈柏安",
            joinDate: "2024.12",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/member/2025/483"
        },
        {
            key: '14',
            name: "郭竣安",
            joinDate: "2025.01",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/member/2025/JunAn"
        },
        {
            key: '15',
            name: "劉章佑",
            joinDate: "2025.01",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/member/2025/Yueric"
        },
        {
            key: '16',
            name: "劉業閎",
            joinDate: "2025.03",
            role: "碩一，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/member/2025/Yeyeye",
        },
        {
            key: '17',
            name: "鄭羽農",
            joinDate: "2025.04",
            role: "碩一，資工碩士",
            coAdvisor: '郭忠義',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/member/2025/Yunung"
        },
        {
            key: '18',
            name: "楊育誠",
            joinDate: "2025.05",
            role: "碩一，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/member/2025/Victor"
        },
    ]
        
    const consultantUserTableItem = [
        {
            key: '1',
            name: "黃漢軒 Clyde",
            joinDate: "2023.04",
            role: "",
            coAdvisor: '',
            ability: "國立陽明交通大學 - 資訊安全研究所",
            experience: "",
            certificate: "技術顧問",
            website: "https://github.com/c1ydehhx"
        },
        {
            key: '2',
            name: "林妍蓁",
            joinDate: "2023.06",
            role: "",
            coAdvisor: '',
            ability: "國立臺北科技大學 - 資訊工程學系",
            experience: "網頁攻防技術",
            certificate: "比賽選手"
        },
        {
            key: '3',
            name: "陳昱臻",
            joinDate: "2024.04",
            role: "",
            coAdvisor: '',
            ability: "國立東華大學 - 資訊工程學系",
            experience: "",
            certificate: "比賽選手"
        },
        {
            key: '4',
            name: "白又銘/郭思彤/吳宛軒/黃奕文",
            joinDate: "2024.10",
            role: "",
            coAdvisor: '林易民',
            ability: "",
            experience: "",
            certificate: "比賽選手"
        },
        {
            key: '5',
            name: "江赫霆",
            joinDate: "2025.02",
            role: "",
            coAdvisor: '',
            ability: "自學生",
            experience: "",
            certificate: "比賽選手"
        },
        {
            key: '6',
            name: "林逸凡 dkri3c1",
            joinDate: "2025.06",
            role: "",
            coAdvisor: '',
            ability: "國立臺北科技大學 - 資訊工程學系",
            experience: "網頁攻防技術/滲透",
            certificate: "比賽選手"
        },
        {
            key: '7',
            name: "張意昌",
            joinDate: "2024.06",
            role: "",
            coAdvisor: '',
            ability: "國立臺北科技大學 - 資訊工程學系",
            experience: "",
            certificate: "程式能力、物件導向程式設計TA"
        },
    ]
    
    const undergraduateStudentTableItem = [
        {
            group: "114#1",
            members: [
                {
                    name: "林妍蓁",
                    intern: ""
                },
                {
                    name: "吳哲丞",
                    intern: ""
                },
                {
                    name: "李馥亘",
                    intern: ""
                }
            ],
            note: "保留",
            progress: 0
        },
        {
            group: "114#2",
            members: [
                {
                    name: "林希芸",
                    intern: ""
                },
                {
                    name: "潘雙永",
                    intern: ""
                }
            ],
            note: "參與SunBird計畫（dcTrack 組）",
            progress: 0
        },
        {
            group: "113#1",
            members: [
                {
                    name: "張意昌",
                    intern: ""
                },
                {
                    name: "吳耀東",
                    intern: ""
                },
                {
                    name: "林品緯",
                    intern: ""
                },
                {
                    name: "張睿恩",
                    intern: ""
                }
            ],
            note: "專案型評測系統設計方法（通過大專生計畫 - 編號:114-2813-C-027-053-E）",
            progress: 5
        },
        {
            group: "113#2",
            members: [
                {
                    name: "陳奕翔",
                    intern: ""
                },
                {
                    name: "廖峰瑞",
                    intern: ""
                },
                {
                    name: "張峻誠",
                    intern: ""
                },
                {
                    name: "黃政豪",
                    intern: ""
                }
            ],
            note: "輕量化本地程式碼生成模型之設計與優化",
            progress: 5
        }
    ]
    const tableColumns: ColumnType<any>[] = [
        {
            title: "姓名",
            dataIndex: 'name',
            key: "name",
            width: '15%',
            render: (_text: string, render: any, _index: number) => {
                return (
                    <>
                        {render.website === undefined ? <p>{render.name}</p> : <a href={render.website}>{render.name}</a>}
                    </>
                )
            }
        },
        {
            title: "加入時間",
            render: (_text: string, render: any, _index: number) => {
                return (
                    <>
                        <p>{render.joinDate}
                        { render.role !== "" ? <span>（{render.role}）</span> : null}
                        </p>
                        { render.coAdvisor == "" ? null : <p>－與 <span style={{fontWeight: "800"}}>{render.coAdvisor}</span> 老師共同指導</p> }
                    </>
                )
            },
            width: '25%'
        },
        {
            title: "特殊經歷&身份",
            render: (_text: string, render: any, _index: number) => {
                return (
                    <div className="d-flex flex-column">
                        { render.ability == '' ? null : <p>{render.ability}</p> }
                        { render.experience == '' ? null : <p className="fst-italic" style={{color: "#0693e3"}}>{render.experience}</p> }
                        { render.certificate == '' ? null : <p style={{color: "lightgreen"}}>{render.certificate}</p> }
                    </div> 
                )  
            },
            width: '25%'
        }
    ]
    const undergraduatedStudentTableColumns: ColumnType<any>[] = [
        {
            key: 'group',
            dataIndex: 'group',
            title: "組別",
            width: "10%"
        },
        {
            key: 'name',
            dataIndex: 'name',
            title: "姓名",
            render: (_text: string, render: any, _index: number) => {
                return (
                    <div className="d-flex flex-column gap-2">
                        { 
                            render.members.map((member: any) => {
                                return (
                                    <div className="d-flex flex-column flex-md-row">
                                        <p>
                                            {member.name} &nbsp;
                                        </p>
                                        <p>
                                            {member.intern !== "" ? <span style={{color: "#0693e3"}}>{member.intern}</span> : null}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            },
            width: "45%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "30%"
        },
        {
            key: 'progress',
            dataIndex: 'progress',
            title: "進度",
            render: (_text: string, render: any, _index: number) => {
                const progress = render.progress
                return <p>{"█ ".repeat(progress)}{"░ ".repeat(10-progress)}</p>
            },
            width: "25%"
        }
    ]
    /*const otherStudentTableColumns: ColumnType<any>[] = [
        {
            key: 'name',
            dataIndex: 'name',
            title: "姓名",
            width: "25%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "75%"
        }
    ]*/
    return (
        <div className="member">
            <>
                <h4 className="text-center fw-bold">博士生（Ph.D. students）</h4>
                <Table columns={tableColumns} dataSource={phdUserTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">碩士生（Master students）</h4>
                <Table columns={tableColumns} dataSource={masterUserTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">合作學生（Others）</h4>
                <Table columns={tableColumns} dataSource={consultantUserTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">專題生（Undergraduate students）</h4>
                <Table columns={undergraduatedStudentTableColumns} dataSource={undergraduateStudentTableItem} pagination={false} bordered></Table>
            </>
        </div>
    )
}

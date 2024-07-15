import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export function Member(){
    const phdUserTableItem = [
        {
            key: '1',
            name: "陳勝舢",
            joinDate: "2022.07",
            role: "博二",
            coAdvisor: '白敦文',
            experience: "奧義智慧科技股份有限公司實習生",
            certificate: "CEH",
            website: "/#/Member/2022/Ryan"
        }
    ]
    const masterUserTableItem = [
        {
            key: '1',
            name: "張家維",
            joinDate: "2022.12",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "台積電 - 資訊安全部實習生、前動力安全資訊股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）"
        },
        {
            key: '2',
            name: "林幸慧",
            joinDate: "2022.12",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "果核數位實習生，前中華資安國際股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）"
        },
        {
            key: '3',
            name: "陳荷文",
            joinDate: "2022.12",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: ""
        },
        {
            key: '4',
            name: "許貽昇",
            joinDate: "2023.03",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）"
        },
        {
            key: '5',
            name: "曹凱翔",
            joinDate: "2023.03",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）"
        },
        {
            key: '6',
            name: "顏柏耀",
            joinDate: "2023.03",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）"
        },
        {
            key: '7',
            name: "廖家賢",
            joinDate: "2023.08",
            role: "碩一，資安碩士",
            coAdvisor: '林敬皇',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）"
        },
        {
            key: '8',
            name: "吳冠廷",
            joinDate: "2023.12",
            role: "碩零，資安碩士",
            coAdvisor: '',
            experience: "保華資安股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）"
        },
        {
            key: '9',
            name: "李宇揚",
            joinDate: "2023.12",
            role: "碩零，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: ""
        },
        {
            key: '10',
            name: "黃廷翰",
            joinDate: "2023.12",
            role: "碩零，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/Jason"
        },
        {
            key: '11',
            name: "楊閔恩",
            joinDate: "2023.12",
            role: "碩零，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/Joe"
        },
        {
            key: '12',
            name: "陳彥宇",
            joinDate: "2024.01",
            role: "碩零，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/Adb2"
        },
        {
            key: '13',
            name: "李佳軒",
            joinDate: "2024.01",
            role: "碩零，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/WIFI"
        },
        {
            key: '14',
            name: "王立翔",
            joinDate: "2024.04",
            role: "碩零，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/PaulWang"
        },
        {
            key: '15',
            name: "黃奕評",
            joinDate: "2024.06",
            role: "碩零，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/ypp"
        }
    ]
    const consultantUserTableItem = [
        {
            key: '1',
            name: "張洸銘",
            joinDate: "2022.11",
            role: "",
            coAdvisor: '',
            ability: "網頁攻防技術、網路安全技術、安全程式設計 TA",
            experience: "如梭 ZUSO 實習生、前 DEVCORE 實習生",
            certificate: ""
        },
        {
            key: '2',
            name: "黃漢軒",
            joinDate: "2023.04",
            role: "",
            coAdvisor: '',
            ability: "系統安全、程式能力、物件導向程式設計 TA",
            experience: "前中華民國電腦技能基金會實習生",
            certificate: "",
            website: "/#/Member/2023/Uriah"
        },
        {
            key: '3',
            name: "黃政",
            joinDate: "2023.04",
            role: "",
            coAdvisor: '',
            ability: "程式能力、物件導向程式設計 TA",
            experience: "",
            certificate: ""
        },
        {
            key: '4',
            name: "林妍蓁",
            joinDate: "2024.06",
            role: "",
            coAdvisor: '',
            ability: "網頁攻防技術",
            experience: "",
            certificate: ""
        },
    ]
    const undergraduateStudentTableItem = [
        {
            group: "112#1",
            members: [
                {
                    name: "陳思群",
                    intern: "博仲法律事務所"
                },
                {
                    name: "顏睿寬",
                    intern: ""
                },
                {
                    name: "許宸瑋",
                    intern: "博仲法律事務所"
                }
            ],
            note: "結合語言模型與特徵機制之整合式網路入侵偵測告警系統",
            progress: 7
        },
        {
            group: "112#2",
            members: [
                {
                    name: "吳奕萱",
                    intern: "叡揚資訊股份有限公司"
                },
                {
                    name: "程邦博",
                    intern: "微鋒自動科技股份有限公司"
                },
                {
                    name: "何穎宣",
                    intern: ""
                }
            ],
            note: "基於 API 呼叫序列的深度學習模型用於勒索病毒偵測（大專生計畫編號:113-2813-C-027-054-E）",
            progress: 7
        },
        {
            group: "112#3",
            members: [
                {
                    name: "黃政",
                    intern: "智安數據科技股份有限公司"
                },
                {
                    name: "劉硯皓",
                    intern: "中央研究院"
                },
                {
                    name: "張庭偉",
                    intern: "智安數據科技股份有限公司"
                }
            ],
            note: "Practice Tools for Simple Design",
            progress: 9
        },
        {
            group: "112#4",
            members: [
                {
                    name: "林蔚",
                    intern: "起而行綠能股份有限公司"
                },
                {
                    name: "許恩誠",
                    intern: ""
                },
                {
                    name: "魏名宏",
                    intern: ""
                }
            ],
            note: "網路攻防教學用平台之設計",
            progress: 6
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
            note: "-",
            progress: 1
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
            note: "-",
            progress: 1
        }
    ]
    const otherStudentTableItem = [
        {
            name: "白又銘",
            note: "三重商工 - 與林易民主任共同指導"
        },
        {
            name: "郭思彤",
            note: "三重商工 - 與林易民主任共同指導"
        },
        {
            name: "劉毅",
            note: "德明財金科技大學資科系"
        },
        {
            name: "劉宜蓁",
            note: "國立臺北科技大學 - 智慧自動化工程科（專四）"
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
            title: "特殊經歷、專長與資安證照",
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
            width: "35%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "35%"
        },
        {
            key: 'progress',
            dataIndex: 'progress',
            title: "進度",
            render: (_text: string, render: any, _index: number) => {
                const progress = render.progress
                return <p>{"█ ".repeat(progress)}{"░ ".repeat(10-progress)}</p>
            },
            width: "20%"
        }
    ]
    const otherStudentTableColumns: ColumnType<any>[] = [
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
    ]
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
                <h4 className="text-center fw-bold">顧問團隊（Consultant）</h4>
                <Table columns={tableColumns} dataSource={consultantUserTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">專題生（Undergraduate students）</h4>
                <Table columns={undergraduatedStudentTableColumns} dataSource={undergraduateStudentTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">合作學生（Others）</h4>
                <Table columns={otherStudentTableColumns} dataSource={otherStudentTableItem} pagination={false} bordered></Table>
            </>
        </div>
    )
}

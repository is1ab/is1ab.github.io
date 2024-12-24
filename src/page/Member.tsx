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
            key: '1',
            name: "張家維",
            joinDate: "2022.12",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "Cymetrics 實習生、前台積電-資訊安全部暑期實習生、前動力安全資訊股份有限公司",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2023/CHW"
        },
        {
            key: '2',
            name: "林幸慧",
            joinDate: "2022.12",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "前果核數位實習生，前中華資安國際股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2023/Ravin"
        },
        {
            key: '3',
            name: "陳荷文",
            joinDate: "2022.12",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: ""
        },
        {
            key: '4',
            name: "許貽昇",
            joinDate: "2023.03",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "奧義智慧科技股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2023/Eason"
        },
        {
            key: '5',
            name: "曹凱翔",
            joinDate: "2023.03",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "中華資安國際股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2023/Bobo"
        },
        {
            key: '6',
            name: "顏柏耀",
            joinDate: "2023.03",
            role: "碩二，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2023/Y"
        },
        {
            key: '7',
            name: "廖家賢",
            joinDate: "2023.08",
            role: "碩二，資安碩士",
            coAdvisor: '林敬皇',
            experience: "前台灣圖靈鏈股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2023/Salt"
        },
        {
            key: '8',
            name: "吳冠廷",
            joinDate: "2023.12",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "保華資安股份有限公司實習生",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Guan4Tou2"
        },
        {
            key: '9',
            name: "李宇揚",
            joinDate: "2023.12",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Young"
        },
        {
            key: '10',
            name: "黃廷翰",
            joinDate: "2023.12",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/Jason"
        },
        {
            key: '11',
            name: "陳彥宇",
            joinDate: "2024.01",
            role: "碩一，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Adb2"
        },
        {
            key: '12',
            name: "李佳軒",
            joinDate: "2024.01",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/WIFI"
        },
        {
            key: '13',
            name: "王立翔",
            joinDate: "2024.04",
            role: "碩一，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/PaulWang"
        },
        {
            key: '14',
            name: "黃奕評",
            joinDate: "2024.06",
            role: "碩一，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/ypp"
        },
        {
            key: '15',
            name: "廖哲霈",
            joinDate: "2024.08",
            role: "碩一，資工碩士",
            coAdvisor: '郭忠義',
            experience: "",
            certificate: "",
            website: ""
        },
        {
            key: '16',
            name: "李宜鴻",
            joinDate: "2024.11",
            role: "碩一，資安碩士",
            coAdvisor: '陳昱圻',
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            website: "/#/Member/2024/Rock"
        },
        {
            key: '17',
            name: "林鈺翔",
            joinDate: "2024.11",
            role: "碩一，資工碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "/#/Member/2024/Ian"
        },
        {
            key: '18',
            name: "連羿婷",
            joinDate: "2024.12",
            role: "碩零，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: ""
        },
        {
            key: '19',
            name: "沈柏安",
            joinDate: "2024.12",
            role: "碩零，資安碩士",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: ""
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
            progress: 3
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
            progress: 3
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

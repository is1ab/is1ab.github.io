import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export function Alumni(){
    const masterAlumniDatas = [
        {
            name: "何亞翰",
            joinDate: "2022.09-",
            title: "使用生成式模型於公開來源情報去識別化技術之應用",
            ability: "密碼學、硬體安全",
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            status: "準備畢業中..."
        },
        {
            name: "李昆積",
            joinDate: "2022.09-",
            title: "Prompt Injection 分析與緩解策略之研究 – 以大語言模型聊天機器人為例",
            ability: "Web 攻防",
            experience: "",
            certificate: "iPAS 資訊安全工程師檢定（初級）",
            status: "準備畢業中..."
        },
        {
            name: "陳丹妮",
            joinDate: "2022.09-",
            title: "輔助乳癌術後重建病人醫病共同決策之人工智慧聊天機器人",
            ability: "人工智慧",
            experience: "美國德州大學阿靈頓分校 雙聯學位",
            certificate: "",
            status: "準備畢業中..."
        }
    ]
    const alumniColumns: ColumnType<any>[] = [
        {
            key: 'name',
            dataIndex: 'name',
            title: "姓名",
            width: "10%"
        },
        {
            key: 'joinDate',
            dataIndex: 'joinDate',
            title: "參與時間",
            width: "5%"
        },
        {
            key: 'title',
            dataIndex: 'title',
            title: "題目",
            width: "30%"
        },
        {
            key: 'ability',
            dataIndex: 'ability',
            title: "專長",
            width: "15%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "25%",
            render: (_text: string, record: any, _index: number) => {
                return (
                    <>
                        { record.experience == '' ? null : <p className="fst-italic" style={{color: "#0693e3"}}>{record.experience}</p> }
                        { record.certificate == '' ? null : <p style={{color: "lightgreen"}}>{record.certificate}</p> }
                    </>
                )
            }
        },
        {
            key: 'status',
            dataIndex: 'status',
            title: "狀態",
            width: "15%"
        }
    ]
    const undergraduateAlumniStudentTableDatas = [
        {
            year: "112",
            name: "張洸銘",
            title: "CVE-2023-35936發現以及0-day",
            note: "通過"
        }
    ]
    const undergraduatedAlumniStudentTableColumns: ColumnType<any>[] = [
        {
            key: 'year',
            dataIndex: 'year',
            title: "學年",
            width: "10%"
        },
        {
            key: 'name',
            dataIndex: 'name',
            title: "姓名",
            width: "10%"
        },
        {
            key: 'title',
            dataIndex: 'title',
            title: "專題名稱",
            width: "60%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "20%"
        },
    ]
    const othersStudentTableDatas = [
        {
            name: "李子儀",
            joinTime: "2022.11-2023.11",
            title: "<大學部>",
            status: "萬芳醫院",
            note: "-"
        },
        {
            name: "葉子多",
            joinTime: "2022.09-2023.08",
            title: "",
            status: "美國賓州州立大學 雙聯學位",
            note: "與楊士萱老師合作指導"
        },
        {
            name: "蔡峻傑",
            joinTime: "2022.09-",
            title: "含加權要項可驗證分散式聚合函數之低隱私預算差分隱私方案",
            status: "畢業準備中…",
            note: "與楊士萱老師合作指導"
        }
    ]
    const othersStudentTableColumns: ColumnType<any>[] = [
        {
            key: 'name',
            dataIndex: 'name',
            title: "姓名",
            width: "10%"
        },
        {
            key: 'joinTime',
            dataIndex: 'joinTime',
            title: "參與時間",
            width: "10%"
        },
        {
            key: 'title',
            dataIndex: 'title',
            title: "題目",
            width: "35%"
        },
        {
            key: 'status',
            dataIndex: 'status',
            title: "目前狀態",
            width: "20%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "25%"
        },
    ]
    return (
        <div className="w-100">
            <div className="overflow-x-auto">
                <h4 className="text-center fw-bold">碩士生（Master students）</h4>
                <Table columns={alumniColumns} dataSource={masterAlumniDatas} pagination={false}></Table>
            </div>
            <hr />
            <div className="overflow-x-auto">
                <h4 className="text-center fw-bold">專題生（Undergraduate students）</h4>
                <Table columns={undergraduatedAlumniStudentTableColumns} dataSource={undergraduateAlumniStudentTableDatas} pagination={false}></Table>
            </div>
            <hr />
            <div className="overflow-x-auto">
                <h4 className="text-center fw-bold">合作學生（Others）</h4>
                <Table columns={othersStudentTableColumns} dataSource={othersStudentTableDatas} pagination={false}></Table>
            </div>
        </div>
    )
}
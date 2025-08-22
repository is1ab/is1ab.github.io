import news from "../assets/news.json"

export function News(){

    const NewsItem = (props: {
        people: string
        description: string
        extraDescription?: string
        time: string
    }) => {
        return (
            <tr>
                <td className="border border-1">
                    <span className="title">👑賀！</span>
                    <strong>{props.people}</strong>&nbsp;
                    <span>{props.description}</span>
                    {props.extraDescription === undefined ? null : <span className="extra-description">{props.extraDescription}</span>}
                </td>
                <td className="border border-1">
                    <span>{props.time}</span>
                </td>
            </tr>
        )
    }

    return (
        <div className="news">
            <h4 className="text-center fw-bold">榮譽榜 Honors</h4>
            <div className="d-flex flex-column">
                <small>若同學（包含本校五專、大學部、研究所）有意願參加<a href="https://hackmd.io/@SunCY/rJvKd1642">「資安」相關競賽，</a></small>
                <small>本實驗室有團隊與業師協助，以提供相關課程訓練、解題、來栽培選手，</small>
                <small>歡迎寄信與我聯繫：cysun@ntut.edu.tw</small>
                <br/>
                <table className="table-bordered">
                    { 
                        news.map((data) => {
                            return (
                                <NewsItem 
                                    people={data.people} 
                                    description={data.description}
                                    time={data.time}
                                    extraDescription={data.extraDescription}
                                ></NewsItem>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}
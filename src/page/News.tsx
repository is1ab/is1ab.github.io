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
                    <NewsItem 
                        people="簡嘉頤、林妍蓁、劉宜蓁" 
                        description="榮獲 2024 尋找資安女婕思（資安組）- 第二名"
                        time="2024.04.27"
                    ></NewsItem>
                    <NewsItem 
                        people="吳奕萱、何穎宣、莊于潔" 
                        description="榮獲 2024 尋找資安女婕思（資安組）- 佳作"
                        time="2024.04.27"
                    ></NewsItem>
                    <NewsItem 
                        people="李佳軒、黄湘婷、陳欣霈" 
                        description="榮獲 2024 尋找資安女婕思（資安組）- 佳作"
                        time="2024.04.27"
                    ></NewsItem>
                    <NewsItem 
                        people="林星主、李子儀、詹採晴" 
                        description="榮獲 2024 尋找資安女婕思（資安組）- 佳作"
                        time="2024.04.27"
                    ></NewsItem>
                    <NewsItem 
                        people="胡瑀涵、歐佳昀、黃曉筠" 
                        description="榮獲 2024 尋找資安女婕思（資安組）- 佳作"
                        time="2024.04.27"
                    ></NewsItem>
                    <NewsItem 
                        people="吳奕萱、何穎宣、莊于潔、李佳軒、黄湘婷、陳欣霈、簡嘉頤、林妍蓁、劉宜蓁、胡瑀涵、歐佳昀、黃曉筠、林星主、李子儀、詹採晴" 
                        description="晉級 2024 尋找資安女婕思（資安組）決賽"
                        extraDescription="（晉級率 15/21 = 71%）"
                        time="2024.04.16"
                    ></NewsItem>
                    <NewsItem 
                        people="白又銘、郭思彤" 
                        description="榮獲第 54 屆全國技能競賽（北區分區-青年組）網路安全職類第二名"
                        time="2024.03.30"
                    ></NewsItem>
                    <NewsItem 
                        people="李昆積、張家維" 
                        description="晉級 2024 AIS3 EOF 攻防競賽決賽"
                        time="2024.01.21"
                    ></NewsItem>
                    <NewsItem 
                        people="黃漢軒" 
                        description="錄取 國立清華大學 資訊安全研究所、國立陽明交通大學 資訊安全研究所"
                        time="2024.01.21"
                    ></NewsItem>
                    <NewsItem 
                        people="顏柏耀、張家維、許貽昇" 
                        description="通過 112 年 iPAS 初級資訊安全工程師鑑定"
                        time="2023.12.05"
                    ></NewsItem>
                    <NewsItem 
                        people="張家維、顏柏耀" 
                        description="榮獲 2023 T 貓盃全國資安基礎實務能力競賽 - 佳作"
                        time="2023.11.23"
                    ></NewsItem>
                    <NewsItem 
                        people="陳勝舢" 
                        description="榮獲 DEVCORE 戴夫寇爾 獎學金資格"
                        time="2023.10.18"
                    ></NewsItem>
                    <NewsItem 
                        people="李昆積、李子儀、吳奕萱、何穎宣、莊于潔" 
                        description="錄取 2023 AIS3 新型態資安實務主題課程"
                        time="2023.07.07"
                    ></NewsItem>
                    <NewsItem 
                        people="陳勝舢" 
                        description="榮任第 53 屆全國技能競賽暨國手選拔賽青年組「網路安全」職類解說技術顧問"
                        time="2023.06.17"
                    ></NewsItem>
                    <NewsItem 
                        people="張君瑋、郭丞軒、呂凱達、林蔚、林星主、林正峰、林威立、吳承諺、王育嵐、林承孝、洪嘉璘、劉柏鑫、盧岳劭、温淇淼、黃柏喆、吳威勝、楊子毅、李之正、邱凡洺、何亞翰、李昆積、陳雅音、江柔萱" 
                        description="通過 112 年 iPAS 初級資訊安全工程師鑑定"
                        extraDescription="（課程同學通過率 23/37 = 62%）"
                        time="2023.06.16"
                    ></NewsItem>
                    <NewsItem 
                        people="陸詠涵、陳佳均、陳琴蓮" 
                        description="榮獲 2023 尋找資安女婕思（資安組）- 優勝"
                        time="2023.04.16"
                    ></NewsItem>
                    <NewsItem 
                        people="吳奕萱、何穎宣、莊于潔" 
                        description="榮獲 2023 尋找資安女婕思（資安組）- 佳作"
                        time="2023.04.16"
                    ></NewsItem>
                    <NewsItem 
                        people="張洸銘" 
                        description="榮獲 2023 AIS3 EOF攻防競賽 特別獎 - 蟒蛇專家獎"
                        time="2023.02.13"
                    ></NewsItem>
                    <NewsItem 
                        people="陳勝舢" 
                        description="錄取 TeamT5 Security Camp 2023 資安培訓營"
                        time="2023.12.23"
                    ></NewsItem>
                    <NewsItem 
                        people="陳勝舢" 
                        description="榮獲 AIS3 新型態資安暑期課程最佳專題獎"
                        time="2022.07.31"
                    ></NewsItem>
                </table>
            </div>
        </div>
    )
}
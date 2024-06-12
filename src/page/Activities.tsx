export function Activities(){
    const ActivitiesItem = (props: {
        time: string
        descriptionItem: JSX.Element
    }) => {
        return (
            <tr>
                <td className="border border-1">
                    {props.time}
                </td>
                <td className="border border-1">
                    {props.descriptionItem}
                </td>
            </tr>
        )
    }

    return (
        <div className="activities">
            <h4 className="text-center fw-bold">歷史活動</h4>
            <table className="w-100 table-bordered">
                <ActivitiesItem
                    time="2024.04.27"
                    descriptionItem={
                        <div>
                            <p>尋找資安女婕思（決賽）</p>
                            <p>＊地點：臺南工業局沙崙資安服務基地</p>
                            <a href="https://drive.google.com/drive/folders/1cNsRbVRvl7-K91PliXc-jLQwc7VA8mdO?usp=sharing" target="_blank">活動照片</a>
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2024.03.18"
                    descriptionItem={
                        <div>
                            <p>邀請演講（線上會議）</p>
                            <p>逢甲資工系 劉新惠（idk）：資安女婕思 參賽經驗分享</p>
                            <p>＊2023資安女婕思第一名</p>
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2024.01.21"
                    descriptionItem={
                        <div>
                            <p>實驗室尾牙：旭集和食集錦 SUNRISE</p>
                            <a href="https://drive.google.com/drive/folders/1U6XlB5iYi8IZ_zxsanV-Ddvi7Ho-hQbj?usp=sharing" target="_blank">活動照片</a>
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.07.22"
                    descriptionItem={
                        <div>
                            <p>參與第四屆的奧義學院實習生發表會＆AI 資安社群論壇</p>
                            <a href="https://drive.google.com/drive/folders/1K5nFV4XaeNVoBWK7AJVirJAATYlWYBrQ?usp=sharing" target="_blank">活動照片</a>
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.07.17"
                    descriptionItem={
                        <div>
                            <p>參與 2023 ICCE-TW 會議</p>
                            <p>＊Next Generation Cyberseucrity – Session Chair</p>
                            <p>＊學生論文發表</p>
                            <a href="https://drive.google.com/drive/folders/1apLzvp0RNLh24v1aRKKM7y7BSnIm6jIH?usp=sharing" target="_blank">活動照片</a>
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.05.06"
                    descriptionItem={
                        <div>
                            <p>2023 尋找資安女婕思（決賽）</p>
                            <p>＊地點：臺南工業局沙崙資安服務基地</p>
                            <a href="https://drive.google.com/drive/folders/1oGpl4CE0QH2zLfNcTmrRPu7aN0PcFdbs?usp=sharing" target="_blank">活動照片</a>
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.03.30"
                    descriptionItem={
                        <div>
                            <p>邀請演講（線上會議）</p>
                            <p>臺大資工系 陳妍姍：資安女婕思 參賽經驗分享</p>
                            <p>＊2022資安女婕思第一名</p>
                            <p>奧義實習生</p>
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.01.21"
                    descriptionItem={
                        <div>
                            <p>實驗室尾牙：豐 Food 海陸百匯</p>
                            <a href="https://drive.google.com/drive/folders/1wpcEuu9HB1LHrLiRWxqnrK6kG41wP-no?usp=sharing" target="_blank">活動照片</a>
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2022.12.02"
                    descriptionItem={
                        <div>
                            <p>課程邀請演講</p>
                            <p>1. 杜浦數位安全 廖子慶（DuckLL）：你想成為駭客嗎？</p>
                            <p>＊威脅情資研究員／逆向工程</p>
                            <p>＊講師: AIS3／台灣好厲駭／HITCON／Black Hat Asia／Code Blue</p>
                            <p>2. 杜浦數位安全 （Turkey）：競無止境 – 找出你的特等席</p>
                            <p>＊漏洞研究／情資威脅／資安緊急應變小組 PM</p>
                            <p>＊HITCON GIRLS 共同創辦人</p>
                        </div>
                    }
                ></ActivitiesItem>
            </table>
        </div>
    )
}
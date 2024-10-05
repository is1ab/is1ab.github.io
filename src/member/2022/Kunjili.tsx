import { Sample } from "../Sample"
import Kunjili from "../../assets/member/kunjili.jpg" //這行要改
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const KunjiliMemberPage = () => { //這行要改
    //自我介紹
    const bio = <div className="d-flex flex-column gap-3">
        <p>那年我22歲，剛從名門大學畢業。</p>
        <p>畢業典禮那天，櫻花樹下的微風輕拂著我的臉龐，仿佛在祝福我即將展開的嶄新人生。大學四年裡，我不僅成績優異，還在校園中積累了許多珍貴的友情。特別是那位在圖書館偶遇的少女——鈴木美咲，總是默默地支持著我。畢業後，我順利進入了一家知名的科技公司，成為了一名工程師。</p>
        <br></br>
        <p>24歲的我，已經在公司嶄露頭角，憑藉著出色的工作能力，我獲得了升職的機會。</p>
        <p>這一年的我，不僅薪水增加，還有了更多的自由時間來追求自己的興趣與愛好。而鈴木美咲，也成為了我生活中不可或缺的一部分。兩人一起度過了無數個美好的日子，從春日的賞櫻，到夏日的祭典，再到冬日的雪景，每一刻都充滿了甜蜜與幸福。</p>
        <br></br>
        <p>30歲的我，終於鼓起勇氣，向美咲求婚。</p>
        <p>那天夜晚，銀白色的月光灑在我們身上，美咲流著淚，點頭答應了我的求婚。結婚後的生活依然美滿，我和美咲共同迎來了我們的第一個孩子。</p>
        <br></br>
        <p>33歲的我們，已經適應了為人父母的角色。</p>
        <p>儘管生活偶爾會有些小困難，但夫妻兩人總是攜手面對。</p>
        <br></br>
        <p>36歲，孩子即將上小學。</p>
        <p>一天，學校的家長會上，老師滿臉驚訝地看著我：「你這麼年輕，怎麼會如此成功呢？」。我微微一笑，從皮夾裡取出了那張早已塵封的學生證，輕輕放在桌上。老師驚訝地看著那張學生證，原來這位年輕的父親，正是來自於那所享譽全國的名校——<b><span color="color: red;"><a href="https://csie.ntut.edu.tw/p/426-1070-17.php?Lang=zh-tw">國立臺北科技大學資訊工程學系碩士班</a></span></b>的傑出校友。</p>
        <br></br>
        <p>臺北科技大學連續四年榮登世界五百大之列，並由上屆第431名，進步為第425名，名列全台第六名，締造歷年來最佳表現。在進入QS世界五百大的台灣學校裡，北科大是唯一連續七年穩健向上的大學。</p>
        <p>北科大教師論文發表總數與人均篇數、國科會計畫平均金額連年上升，高品質論文比例持續提升，有72%的SCI論文刊登於排名前25%的國際期刊。近年平均每位教師發表SCI論文高達2.86篇，實力有目共睹。</p>
        <p>由QS日前公布的2024年學科排名觀察，北科大「工程與科技」主領域及「化學工程」、「材料科學」、「建築」、「機械、航空與製造工程」、「電機與電子工程」、「土木及結構工程」、「電腦科學與資訊工程」等學科均在國內居前段班。</p>
        <br></br>
        <p>歡迎各位同學報考<b><span color="color: red;"><a href="https://www.ntut.edu.tw/p/404-1007-85221.php">國立臺北科技大學</a></span></b>。</p>
    </div>
    //證照
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2023.06.21"
        }
    ]
    //比賽
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "2024 AIS3 Pre-exam CTF",
            result: "32th",
            datetime: "2024.05.25-2024.05.27"
        },
        {
            title: "TSCCTF 2024",
            result: "",
            datetime: "2024.01.19-2024.01.22"
        },
        {
            title: "2024 AIS3 EOF CTF",
            result: "91th",
            datetime: "2024.01.05-2024.01.07"
        },
        {
            title: "2023 CGGC 網路守護者挑戰賽",
            result: "",
            datetime: "2023.12.01-2023.12.02"
        },
        {
            title: "2023 T貓盃全國資安基礎實務能力競賽",
            result: "",
            datetime: "2023.11.10-2023.11.13"
        },
        {
            title: "112年度教育體系資安攻防演練之攻防檢測員",
            result: "佳作",
            datetime: "2023.11.04"
        },
        {
            title: "2023 神盾盃資安競賽預賽",
            result: "",
            datetime: "2023.10.19"
        },
        {
            title: "112年資安技能金盾獎初賽",
            result: "",
            datetime: "2023.10.14"
        },
        {
            title: "2023 AIS3 pre-exam CTF",
            result: "86th",
            datetime: "2023.05.13-2023.05.15"
        },
        {
            title: "2023 MyFirstCTF",
            result: "12th",
            datetime: "2023.05.13"
        }
    ]
    //活動
    const participates: MemberParticipateType[] = [
        {
            title: "2024 AIS3 新型態資安實務暑期課程 跨域資訊安全組",
            datetime: "2024.07.29-2024.08.04"
        },
        {
            title: "CyberSec 2024  台灣資安大會會眾",
            datetime: "2024.05.14-2024.05.16"
        },
        {
            title: "DEVCORE CONFERENCE 2024 會眾",
            datetime: "2024.03.16"
        },
        {
            title: "2024 TeamT5 Security Camp",
            datetime: "2024.01.23-2024.02.01"
        },
        {
            title: "HITCON CMT 2023 台灣駭客年會 會眾",
            datetime: "2023.08.18-2023.08-19"
        },
        {
            title: "2023 AIS3 新型態資安實務暑期課程 網頁安全組",
            datetime: "2023.07.24-2023.07.30"
        },
        {
            title: "CyberSec 2023 台灣資安大會 會眾",
            datetime: "2023.05.09-2024.05.11"
        },
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        //個人資料
        <Sample
            zhName="李昆積" //這行要改
            enName="Li, Kun-Ji" //這行要改
            avatar={Kunjili} //這行要改
            institutes={["國立臺北科技大學 資訊工程所 資訊安全實驗室"]} //這行要改
            bio={bio}
            experiences={competitionExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}


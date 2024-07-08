import { Sample } from "../Sample"
import WIFI from "../../assets/member/WIFI.gif"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberRaceExperienceType } from "../../type/MemberCertificateType"

export const WIFIMemberPage = () => {
    const bio = "嗨伊，大家可以喊我「WIFI」就好，因為這個名字比較好記(*‘ v`*) 後面我再想想寫些什麼...(施工中)"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2023.06.21"
        },
        {
            title: "Microsoft Certified: Azure AI Fundamentals",
            datetime: "2024.06.24"
        }
    ]
    const raceExperiences: MemberRaceExperienceType[] = [
        {
            title: "第28屆 Innoserve 資訊應用服務創新競賽 ",
            result: "資安創新技術組 第二名",
            datetime: "2023.11.04"
        },
        {
            title: "GICS 尋找資安女捷思",
            result: "資安闖天關 佳作",
            datetime: "2024.04.27"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "AIS3 情資運用與惡意程式分析",
            datetime: "2023.07.31"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="李佳軒"
            enName="Lee, Chia-Hsuan"
            avatar={WIFI}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩零"]}
            bio={bio}
            experiences={raceExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}


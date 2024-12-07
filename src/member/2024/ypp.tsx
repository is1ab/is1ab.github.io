import { Sample } from "../Sample"
import ypp from "../../assets/member/ypp.gif"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YPPMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>不是在睡覺就是在裝忙</p>
        <p>大學讀 EE，不會傅立葉，碩士唸資安，密碼都用 123 </p>
        <p>喜歡數學 meme，看懂梗很好笑，看不懂也很好笑</p>
        

    </div>
    const certificates: MemberCertificateType[] = [

    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "N1CTF 2024 ",
            result: "199/260",
            datetime: "2024/11/09"
        },
        {
            title: "idekCTF 2024 ",
            result: "263/1070",
            datetime: "2024/08/19"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: " 2022 AIS3 新型態資安暑期課程",
            datetime: "2022.07.25 - 2022.07.31"
        }

    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "中國信託商業銀行",
            info: "軟體開發實習生",
            datetime: "2023.02 - 2023.06"
        }
    ]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃奕評"
            enName="Huang, Yi-Ping"
            avatar={ypp}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程"]}
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


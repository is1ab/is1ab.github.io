import { Sample } from "../Sample"
import PaulWang from "../../assets/member/PaulWang.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const PaulWangMemberPage = () => {
    // const bio = "<br>hello"
    const bio = <div className="d-flex flex-column gap-3">
                    <p>大家好，我是王立翔，在 IsLab 中參與攻防相關的學術論文研究、也研究逆向工程相關技術、CTF 題目等，歡迎有興趣可以找我討論！</p>
                    <p>不定期會將 Crackmes、CTF 比賽的結果寫成 Writeups</p>
                    
                    <p>- <a href="https://www.notion.so/Paul-s-CTF-writeups-1bb9074f33df80e78ba9ee4abfd64528" target="_blank" rel="noopener noreferrer">我的一般 CTF</a></p>
                    <p>- <a href="https://github.com/paulwang19/ctf-writeups" target="_blank" rel="noopener noreferrer">我的競賽 CTF</a></p>
                    <p>- <a href="https://github.com/paulwang19/crackmes-writeups" target="_blank" rel="noopener noreferrer">我的 Crackmes</a></p>
                </div>
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "TSCCTF 2025",
            result: "排名: 137/509",
            datetime: "2025/01/13-2025/01/16"
        },
        {
            title: "picoCTF 2025",
            result: "隊伍排名: 1287/10460 (Team: NTUT_Is1ab)",
            datetime: "2025/03/08-2025/03/18"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "HITCON CTF x 菁英人才交流活動",
            datetime: "2024.11.09-2024.11.10"
        },
        {
            title: "SITCON 2025 學生計算機年會",
            datetime: "2025/03/08"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="王立翔"
            enName="Wang, Li-Siang"
            avatar={PaulWang}
            institutes={["國立臺北科技大學 資訊工程所 碩一"]}
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

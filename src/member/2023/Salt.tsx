import { Sample } from "../Sample"
import Salt from "../../assets/member/Salt_icon_top.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const SaltMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>大家好我叫家賢，可以叫我「鹽」或「Salt」🧂  </p>
        <p style={{ color: 'black' }}> 隱寫術不是密碼學 !!!!! </p>
        <p>現為 is1ab攻防組「BT組」於 2024/06 成立並加入 ; 原為 is1ab攻防組「Crypto組」<span style={{ color: 'black' }}> 🔒但可以用 隱寫術 來隱匿 金鑰</span> <span style={{ backgroundColor: 'transparent', color: 'transparent' }}>🔑</span> </p>
        <p>現為 is1ab學術組「低軌衛星組」屬於「國科會TACC研究計劃」並於 2024/06 完成一篇會議論文</p>
        <p style={{ color: 'black' }}> 你現在這個動作也是隱寫術 </p>
        <p>碩一期間接觸 : 密碼學 身份驗證 零知識 PPSC 後量子加密LWE</p>
        <p>碩二預計接觸 : iPAS中級 滲透 OSCP Random-Oracle 後量子數位簽章 後量子加密Kyber</p>
        <p style={{ color: 'black' }}> 另外編碼也不是加密 </p>
        <p>踏上資安之旅不久 自認還是新手一枚 覺得資安的路很長 歡迎交流指教 一起精進學習</p>
        <p style={{ color: 'black' }}> aHR0cHM6Ly9naXRodWIuY29tL0hleU1yU2FsdC9pczFhYkNURi0yMDI0LUNoYWxsZW5nZXMvdHJlZS9tYWluL2NyeXB0by9zdGVLZ2Fub0VncmFwaFl5 </p>
        <p>最後很高興認識你 請多多指教 😊 </p>
    </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.01"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "CRYPTO CTF 2024",
            result: "隊名 : SaltShaker ; 排名 : 213/371",
            datetime: "2024.06.08 - 2024.06.09 (UTC)"
        },
        {
            title: "AIS3 Pre-exam 2024",
            result: "隊名 : Salt ; 排名 : 80/493",
            datetime: "2024.05.25 - 2024.05.27"
        },
        {
            title: "My First CTF 2024",
            result: "隊名: Salt",
            datetime: "2024.05.25"
        },
        {
            title: "picoCTF 2024",
            result: "",
            datetime: "2024.03.13 - 2024.03.27"
        },
        {
            title: "HTB : Cyber Apocalypse CTF 2024",
            result: "隊名 : ISLAB@NTUT ; 排名 : 1443/5693",
            datetime: "2024.03.09 - 2024.03.13 (UTC)"
        },
        {
            title: "TSCCTF 2024",
            result: "",
            datetime: "2024.01.19 - 2024.01.22"
        },
        {
            title: "AIS3 EOF CTF 2024",
            result: "",
            datetime: "2024.01.05 - 2024.01.07"
        },
        {
            title: "CGGC 2023",
            result: "",
            datetime: "2023.12.01 - 2023.12.02"
        },
        {
            title: "T貓盃 2023",
            result: "",
            datetime: "2023.11.10 - 2023.11.13"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "擔任 第三十四屆全國資訊安全會議 CISC 2024 工作人員",
            datetime: "2024.08.29 - 2024.08.30"
        },
        {
            title: "參與 HITCOM CMT 2024",
            datetime: "2024.08.23 - 2024.08.24"
        },
        {
            title: "參與 NISRA Enlightened 2024",
            datetime: "2024.08.12 - 2024.08.15"
        },
        {
            title: "錄取 2024 AIS3 新型態資安暑期課程",
            datetime: "2024.07.29 - 2024.08.04"
        },
        {
            title: "參與 工研院後量子密碼技術人才培育系列課程 【初階】後量子密碼學導論",
            datetime: "2024.07.26"
        },
        {
            title: "參與 2024 CraftCon Taiwan 奧義 AI 資安年會",
            datetime: "2024.07.12"
        },
        {
            title: "參與 QSMC 量子安全遷移課程與講座",
            datetime: "2024.05.21"
        },
        {
            title: "參與 資安大會 CyberSec 2024",
            datetime: "2024.05.14 - 2024.05.16"
        },
        {
            title: "參與 HITCON Carnival 2023",
            datetime: "2023.11.14"
        },
        {
            title: "參與 2023 神盾盃資安論壇",
            datetime: "2023.11.02"
        },
        {
            title: "參與 HITCOM CMT 2023",
            datetime: "2023.08.18 - 2023.08.19"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = [
        {
            authors: " Chia-Hsien Liao and Chin-Yu Sun",
            title: "Note on “Learning with error-based key agreement and authentication scheme for satellite communication”",
            target: "In Proceedings of 20th Taiwan Conference on Software Engineering (TCSE 2024)",
            details: "pp. 354-358, Taipei, Taiwan, July 2024"
        }
    ]
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="廖家賢"
            enName="Chia-Hsien Liao"
            avatar={Salt}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩二","is1ab 第二期研究生"]}
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
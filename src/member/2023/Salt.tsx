import { Sample } from "../Sample"
import Salt from "../../assets/member/Salt_icon_top.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const SaltMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>大家好我叫家賢，可以叫我「鹽」或「Salt」🧂 　 <a href="https://github.com/HeyMrSalt" target="_blank"><span style={{ color: 'white' }}>Welcome to My Github </span> </a></p>
        <p style={{ color: 'black' }}> 恭喜！你目前的方向對了！</p>
        <p style={{ color: 'black' }}> 這個挑戰 攸關於 密碼學 編碼 隱寫術 雜湊函數！難度為適合新手！</p>
        <p>現為 is1ab攻防組「BT組」於 2024/06 成立並加入 ; 原為 is1ab攻防組「Crypto組」<span style={{ color: 'black' }}> 🔒但可以用 隱寫術 來隱匿 金鑰</span> <span style={{ backgroundColor: 'transparent', color: 'transparent' }}>🔑</span> </p>
        <p>現為 is1ab學術組「低軌衛星組」屬於「國科會TACC研究計劃」並於 2024/06 完成一篇會議論文</p>
        <p style={{ color: 'black' }}> 你要知道 隱寫術不是密碼學 !!!!! </p>
        <p style={{ color: 'black' }}> 你現在這個動作也是一種 隱寫術 </p>
        <p>碩一期間接觸 : 密碼學 PPSC 零知識 BlockChain 後量子加密LWE LEO身份驗證</p>
        <p>碩二期間接觸 : iPAS中級 OSCP 滲透Skill PQC-數位簽章 PQC-Kyber Random-Oracle 數位憑證 OID4VC</p>
        <p style={{ color: 'black' }}> 然後你還得知道 雜湊函數與加密無關 </p>
        <p style={{ color: 'black' }}> 具有固定長度 雪崩效應 單向 等特性 你也能解讀成不可逆的編碼/映射 </p>
        <p>個性上屬於假E人一枚 51%的E 算喜歡聊天 這能讓我充電 但偶爾也享受安靜時光 變成角落生物</p>
        <p>喜歡數理的我 也喜歡哈利波特的魔法世界🪄 邏輯很魅力 但想像力能走向無限可能 討厭死框架</p>
        <p>踏上資安之旅不久 認為這條路很長 歡迎交流指教 一起精進學習 🛐</p>
        <p style={{ color: 'black' }}> 最後 編碼也不是加密 </p>
        <p style={{ color: 'black' }}> aHR0cHM6Ly9naXRodWIuY29tL0hleU1yU2FsdC9pczFhYkNURi0yMDI0LUNoYWxsZW5nZXMvdHJlZS9tYWluL2NyeXB0by9zdGVLZ2Fub0VncmFwaFl5 </p>
        <p>最後很高興認識你 請多多指教 😊 </p>
        <p style={{ color: 'gray' }}> 另外 我在這個人簡介頁面 藏了一道CTF挑戰 歡迎挑戰</p>
    </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.01"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "CRYPTO CTF 2025",
            result: "隊名 : NTUT is1ab ; 排名 : 185/364",
            datetime: "2025.07.12 - 2025.07.13 (UTC)"
        },
        {
            title: "AIS3 Pre-exam 2025",
            result: "",
            datetime: "2025.05.24 - 2025.05.26"
        },
        {
            title: "臺灣資安大會 CyberRange 2025 初賽 Day1",
            result: "排名 : 4",
            datetime: "2025.04.15"
        },
        {
            title: "DEFCON CTF Qual 2025",
            result: "隊名 : 星爆牛炒竹狐",
            datetime: "2025.04.12 - 2025.04.14"
        },
        {
            title: "AIS3 EOF CTF 2025 Final",
            result: "",
            datetime: "2025.02.07 - 2025.02.08"
        },
        {
            title: "HTB : University CTF 2024",
            result: "隊名 : NTUTis1ab",
            datetime: "2024.12.13 - 2024.12.15 (UTC)"
        },
        {
            title: "CTF種子培訓工作坊 NICSCTF 2024",
            result: "隊名 : Team04 ; 排名 : 1/12",
            datetime: "2024.11.23"
        },
        {
            title: "網路守護者挑戰賽 CGGC 2024",
            result: "隊名 : x北科F4x",
            datetime: "2024.11.02"
        },
        {
            title: "Hack The Boo 2024",
            result: "隊名 : NTUTis1ab ; 排名 : 2748/8152",
            datetime: "2024.10.21 - 2024.10.26 (UTC)"
        },
        {
            title: "資安技能金盾獎競賽 2024 初賽",
            result: "隊名 : x北科三劍客x",
            datetime: "2024.10.12"
        },
        {
            title: "神盾盃資安競賽 AEGIS 2024 預賽",
            result: "隊名 : 被PWN的你又Blue了嗎?",
            datetime: "2024.09.14"
        },
        {
            title: "idekCTF 2024",
            result: "",
            datetime: "2024.08.17 - 2024.08.19 (UTC)"
        },
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
            title: "HITCOM CMT 2025",
            datetime: "2025.08.15 - 2023.08.16"
        },
        {
            title: "參與 114 年度教育體系資安攻防演練 - 攻擊手",
            datetime: "2025.07.01 - 2025.09.11"
        },
        {
            title: "參與 臺灣資安大會 CyberSec 2025",
            datetime: "2025.04.15 - 2025.04.17"
        },
        {
            title: "參與 CTF種子培訓工作坊 台北場",
            datetime: "2024.11.23"
        },
        {
            title: "參與 工研院後量子密碼技術人才培育系列課程【進階】後量子密碼學導論",
            datetime: "2024.11.06"
        },
        {
            title: "參與 HITCON ENTERPTRISE 2024",
            datetime: "2024.10.30"
        },
        {
            title: "參與 後量子創新應用推廣說明會",
            datetime: "2024.10.30"
        },
        {
            title: "參與 後量子密碼偵測與遷移工作坊",
            datetime: "2024.10.14"
        },
        {
            title: "參與 工研院後量子密碼技術人才培育系列課程【中階】後量子密碼學導論",
            datetime: "2024.09.25"
        },
        {
            title: "出題 is1abCTF 2024 2-Crypto 2-Misc 協助比賽出題",
            datetime: "2024.09.02 - 2024.09.09"
        },
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
            title: "參與 工研院後量子密碼技術人才培育系列課程【初階】後量子密碼學導論",
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
    const internExperiences: MemberInternType[] = [
        {
            company: "Turing Space 美商圖靈 - \n 台灣圖靈鏈股份有限公司",
            info: "Tech Researcher Intern: OID4VC , DID/VC",
            datetime: "2024.09 - 2024.12"
        }
    ]
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
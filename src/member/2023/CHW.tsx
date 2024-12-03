import { Sample } from "../Sample"
import Uriah from "../../assets/member/CHW.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const CHWMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <blockquote style={{ fontStyle: 'italic', color: 'gray', margin: '10px 0', padding: '5px', borderLeft: '10px solid #ccc' }}>
            <p>&nbsp;Roses are red, Violets are blue<br/>
            &nbsp;My botnet is huge, How about you?</p>
             <footer style={{ textAlign: 'right', fontSize: '1em', color: '#bcbcbc' }}>
                — “沒人說過”
            </footer>
        </blockquote>
        <p>嗨，我是 CHW，可以叫我也可以不要叫我。</p>
        <p>我只有 Github 沒有 Tinder </p>
        <p>Hey, I'm CHW, but you don't have to call me that if you don't want to. My username is chw41.</p>
        <p> I only have a GitHub account, no Tinder.</p>
        <p>Github：<a href="https://github.com/Chw41" target="_blank">github.com/Chw41</a></p>
        <p>Linkedin：<a href="https://tw.linkedin.com/in/chw41" target="_blank">linkedin.com/chw41</a></p>
        <div style={{ marginTop: '20px' }}> <img src="https://raw.githubusercontent.com/Chw41/Chw41/d28284aca3245575b3222eb8bd3532d49a23afbc/github-contribution-grid-snake.svg" alt="CHW snake"/></div>
        <form>
            <button type="button" onClick={() => { alert('W3lc0m3 CHW !'); window.location.href = 'https://github.com/Chw41';}}> DON'T click </button>
        </form>
    </div>
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "2024 AEGIS 神盾盃 Qual",
            result: " Team : I'm down QQ ; Rank : 3 ",
            datetime: "2024.09"
        },
        {
            title: "2024 TSMC DNA Internship Final Competition",
            result: " Honorable Mention of the Supporting - IT Group ",
            datetime: "2024.08"
        },
        {
            title: "AIS3 Pre-exam CTF 2024",
            result: " Team : CHW ; Rank : 31/493 ",
            datetime: "2024.05"
        },
        {
            title: "picoCTF 2024",
            result: " Team : ISLAB#NTUT ; Rank : 461/69574 ",
            datetime: "2024.03"
        },
        {
            title: "Cyber Apocalypse 2024: Hacker Royale",
            result: " Team : ISLAB@NTUT ; Rank : 1443/5693 ",
            datetime: "2024.03"
        },
        {
            title: "AIS3 EOF CTF 2024 final",
            result: " Team : 請隊長在30秒內回覆 ; Rank : 7 ",
            datetime: "2024.02"
        },
        {
            title: "HackTheBox: University CTF 2023: Brains & Bytes",
            result: " Team : NTUT ; Rank : 364/955 ",
            datetime: "2023.12"
        },
        {
            title: "2023 T貓盃全國資安基礎實務能力競賽",
            result: " Rank : 佳作 ",
            datetime: "2023.11"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "國家資通安全研究院 電商產業外網資安檢測服務攻擊手",
            datetime: "2024.12 - now"
        }, 
        {
            title: "第九屆臺灣好厲駭 (高階培訓 & 導師深度輔導)",
            datetime: "2024.08 - now"
        },
        {
            title: "Google 資安人才培育計畫",
            datetime: "2024.07 - 2024.12"
        },
        {
            title: "HITCON CMT 2024",
            datetime: "2024.08"
        },
        {
            title: "CYBERSEC 2024 臺灣資安大會",
            datetime: "2024.05"
        },
        {
            title: "DEVCORE CONFERENCE 2024",
            datetime: "2024.03"
        },
        {
            title: "HITCON Carnival 2023",
            datetime: "2023.11"
        },
        {
            title: "2023 神盾盃資安論壇",
            datetime: "2023.11"
        }
    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "Cymetrics 新加坡商甯寶數位科技有限公司台灣分公司",
            info: "Security Engineering Intern: Pentesting & Vulnerability scanning",
            datetime: "2024.09 - now"
            },
        {
        company: "TSMC 台灣積體電路製造股份有限公司",
        info: "Information Technology Security Engineer Intern: Pentesting, Privilege Escalation, Automation Script Development. Achieving Honorable Mention of the Supporting - IT Group in the 2024 DNA Internship Final Competition",
        datetime: "2024.07 - 2024.08"
        },
        {
        company: "祐群科技有限公司",
        info: "Full-stack Developer (Project): Setting up an Apache server, database, XAMPP, SSL application and installation, WAF security configuration. Fixing CVE-2024-4577 PHP-CGI vulnerability",
        datetime: "2023.09 - 2024.03"
        },
        {
        company: "Dynasafe 動力安全資訊股份有限公司",
        info: "Cyber Security Engineer Intern: F5, WAF, Load Balancer, DNS, Network architecture deployment",
        datetime: "2022.08 - 2023.09"
        },
        {
        company: "佳音藝術品有限公司",
        info: "Full-stack Developer (Project): Setting up a cloud server, page design, database, domain registration, and e-commerce payment gateway configuration.",
        datetime: "2022.02 - 2022.07"
        }
    ]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="張家維"
            enName="Chang, Chia-Wei"
            avatar={Uriah}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程", "Security Research @Cymetrics @TSMC | M.S. NTUT is1ab"]}
            bio={bio}
            intern={internExperiences}
            experiences={competitionExperiences}
            participates={participates}
            certificates={certificates}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}
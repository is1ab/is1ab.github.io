import { Sample } from "../Sample"
import Uriah from "../../assets/member/CHW.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType,MemberZeroDayType } from "../../type/MemberCertificateType"

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
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6DXuvit57V1DmjnlLcwst4O-sTL5D37gIQ&s" alt="GitHub" width="25" style={{ verticalAlign: 'text-bottom', marginRight: '10px' }} />
            Github：<a href="https://github.com/Chw41" target="_blank" rel="noopener noreferrer">github.com/Chw41</a>
        </p>
        <p><img src="https://hackmd.io/favicon.ico" alt="HackMD" width="25" style={{ verticalAlign: 'text-bottom', marginRight: '10px' }} />
            HackMD：<a href="https://hackmd.io/@CHW" target="_blank" rel="noopener noreferrer">hackmd.io/@CHW</a>
        </p>
        <p><img src="https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico" alt="LinkedIn" width="25" style={{ verticalAlign: 'text-bottom', marginRight: '10px' }} />
            LinkedIn：<a href="https://tw.linkedin.com/in/chw41" target="_blank" rel="noopener noreferrer">linkedin.com/chw41</a>
        </p>
        <img src="https://raw.githubusercontent.com/Chw41/Chw41/output/github-contribution-grid-snake-dark.svg?palette=github-dark" alt="GitHub Contribution Snake" width="900" height="200" />
        <form>
            <button type="button" onClick={() => { alert('W3lc0m3 CHW !'); window.location.href = 'https://github.com/Chw41';}}> DON'T click </button>
        </form>
    </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "OffSec Certified Professional Plus (OSCP+)",
            datetime: "2025.09"
        },
        {
            title: "Google Cybersecurity Professional Certificate",
            datetime: "2024.09"
        },
        {
            title: "iPAS 資訊安全工程師 - 初級能力鑑定",
            datetime: "2023.11"
        }

    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "HITCON CTF 2025 Quals",
            result: " Team : 竹狐 ; Rank : 13/717 ",
            datetime: "2025.08"
        },
        {
            title: "SekaiCTF 2025",
            result: " Team : TakeKitsune ; Rank : 81/1060 ",
            datetime: "2025.08"
        },
        {
            title: "WHY2025 CTF",
            result: " Team : NTUT_Is1ab ; Rank : 188/1806 ",
            datetime: "2025.08"
        },
        {
            title: "第九屆資安實務導師制度 AIS3 好厲駭培訓",
            result: " 表現優異獎 ; Mentor: Allen Own ",
            datetime: "2025.07"
        },
        {
            title: "DEF CON CTF Qualifier 2025",
            result: " Team : Starburst Beef Stir-Fried BambooFox ; Rank : 31 ",
            datetime: "2025.04"
        },
        {
            title: "Cyber Apocalypse CTF 2025: Tales from Eldoria",
            result: " Team : TakeKitsune ; Rank : 752/8129 ",
            datetime: "2025.03"
        },
        {
            title: "Kashi CTF 2025",
            result: " Team : TakeKitsune ; Rank : 48/1174 ",
            datetime: "2025.02"
        },
        {
            title: "AIS3 EOF CTF 2025 final",
            result: " Team : I'm down QQ ; Rank : 6 ",
            datetime: "2024.09"
        },
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
            title: "行政院國家資通安全網路攻防演練攻擊手",
            datetime: "2025.04 - now"
        },
        {
            title: "CYBERSEC 2025 臺灣資安大會",
            datetime: "2025.04"
        }, 
        {
            title: "DEVCORE CONFERENCE 2025",
            datetime: "2025.03"
        }, 
        {
            title: "國家資通安全研究院 電商產業外網資安檢測服務攻擊手",
            datetime: "2024.12 - 2025.03"
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
            datetime: "2024.09 - 2025.02"
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
    const zeroday: MemberZeroDayType[] = [
        {
            id: ( 
                <div>
                    <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00674">ZD-2024-00674</a> 
                </div>
            ),
            title: "KFC 數位智能未來店 取餐權限漏洞 🍗",
            datetime: "2024.08.12"
        },
        {
            id: ( 
                <div>
                    <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00320">ZD-2024-00320</a> 
                </div>
            ),
            title: "非常機車官網 SQL Injection 🛵 ",
            datetime: "2024.06.05"
        }
]
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
            zeroday={zeroday}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}
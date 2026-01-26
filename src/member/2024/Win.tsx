import { Sample } from "../Sample"
import Jason from "../../assets/member/Win.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const WinMemberPage = () => {
    const bio =
  <div
    style={{
      backgroundColor: '#1e1e24',
      color: '#abb2bf',
      fontFamily: 'monospace',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem',
        borderBottom: '1px solid #333',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
      </div>
      <span style={{ fontSize: 14, color: '#61afef' }}>bio.txt</span>
      <div style={{ width: 36 }} />
    </div>

    <div style={{ padding: '1rem' }}>
      {/* whoami */}
      <p><span style={{ color: '#ff5555' }}>$ whoami</span></p>
      <p>{'{'}</p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#c678dd' }}>Name</span> = <span style={{ color: '#61afef' }}>'黃廷翰'</span>
      </p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#c678dd' }}>RealName_en</span> = <span style={{ color: '#61afef' }}>'Ting-Han Huang'</span>
      </p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#c678dd' }}>NickName_en</span> = <span style={{ color: '#61afef' }}>'Win'</span>
      </p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#c678dd' }}>CTF_ID</span> = <span style={{ color: '#61afef' }}>'VV1N'</span>
      </p>
      <p>{'}'}</p>

      <div style={{ height: '0.6rem' }} />

      {/* interest */}
      <p><span style={{ color: '#ff5555' }}>$ cat /home/vv1n/interest</span></p>
      <p>{'{'}</p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#56b6c2' }}>CyberSecurity</span>,
      </p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#56b6c2' }}>CTF</span>,
      </p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#56b6c2' }}>WebHacking</span>,
      </p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#56b6c2' }}>PenetrationTesting</span>,
      </p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#56b6c2' }}>Sleeping</span>
      </p>
      <p>{'}'}</p>

      <div style={{ height: '0.6rem' }} />

      {/* blog */}
      <p><span style={{ color: '#ff5555' }}>$ cat /home/vv1n/blog</span></p>
      <p>{'{'}</p>
      <p style={{ paddingLeft: '2rem' }}>
        <span style={{ color: '#56b6c2' }}>https://blog.vv1n.me</span> - <em>Coming Soon...</em>
      </p>
      <p>{'}'}</p>
    </div>
  </div>;


    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2025.06"
        },
        {
            title: "Google Cybersecurity Certificate",
            datetime: "2025.06"
        }
    ]
    
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "WHYCTF 2025",
            result: "188/1806 Team(Name: NTUT_Is1ab)",
            datetime: "2025.08.09 - 2025.08.12"
        },
        {
            title: "AIS3 Pre-exam 2025",
            result: "55/344 Individual(Name: VV1N)",
            datetime: "2025.05.24 - 2025.05.26"
        },
        {
            title: "BYUCTF 2025",
            result: "477/1074 Team(Name: NTUT_Is1ab)",
            datetime: "2025.05.17 - 2025.05.18"
        },
        {
            title: " DEF CON CTF Qualifier 2025",
            result: "31/195 Team(Name: 星爆牛炒竹狐)",
            datetime: "2025.04.12 - 2025.04.14"
        },
        {
            title: "squ1rrel CTF 2025",
            result: "227/611 Team(Name: NTUT_Is1ab)",
            datetime: "2025.04.05 - 2025.04.07"
        },
        {
            title: "SwampCTF 2025",
            result: "219/751 Team(Name: NTUT_Is1ab)",
            datetime: "2025.03.29 - 2025.03.31"
        },
        {
            title: "Cyber Apocalypse CTF 2025: Tales from Eldoria",
            result: "715/8129 Team(Name: NTUT_Is1ab)",
            datetime: "2025.03.21 - 2025.03.26"
        },
        {
            title: "picoCTF 2025",
            result: "305/10460 Team(Name: NTUT Is1ab)",
            datetime: "2025.03.08 - 2025.03.18"
        },
        {
            title: "PwnMe CTF Quals 2025",
            result: "349/955 Team(Name: NTUT_Is1ab)",
            datetime: "2025.03.01 - 2025.03.03"
        },
        {
            title: "TUCTF 2024",
            result: "153/485 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.25 - 2025.01.27"
        },
        {
            title: "x3CTF 2025 (feat. mvm)",
            result: "320/528 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.25 - 2025.01.27"
        },
        {
            title: "Srdnlen CTF 2025",
            result: "117/848 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.19 - 2025.01.20"
        },
        {
            title: "Platypwn 2024",
            result: "195/328 Team(Name: NTUT_Is1ab)",
            datetime: "2024.12.07 - 2024.12.08"
        },
        {
            title: "CTF 種子培訓工作坊",
            result: "金獎",
            datetime: "2024.11.23"
        },
        {
            title: "N1CTF 2024",
            result: "199/260",
            datetime: "2024.11.09"
        },
        {
            title: "CGGC 2024",
            result: "19/64 Team(Name: CGGC一日遊)",
            datetime: "2024.11.02 - 2024.11.03"
        },
        {
            title: "2024 AEGIS 神盾盃",
            result: "N/A",
            datetime: "2024.09"
        },
    ]
    
    const participates: MemberParticipateType[] = [
    {
        title: "SITCON 2024 - 會眾",
        datetime: "2024.03.09"
    },
    {
        title: "CYBERSEC 2024 臺灣資安大會 - 會眾",
        datetime: "2024.05.14"
    },
    {
        title: "HITCON CMT 2024 - 會眾",
        datetime: "2024.08.23 - 2024.08.24"
    },
    {
        title: "CTF 種子培訓工作坊 - 臺北場",
        datetime: "2024.11.23"
    },
    {
        title: "HITCON CTF Ｘ 菁英人才交流活動",
        datetime: "2024.11.09"
    },
    {
        title: "Google 資安人才培育計畫 - 學員",
        datetime: "2025.02.01 - 2025.06.30"
    },
    {
        title: "SITCON 2025 - 會眾",
        datetime: "2025.03.08"
    },
    {
        title: "AIS3 CLUB 北區黑客松 2025 - 助教",
        datetime: "2025.05.03 - 2025.05.04"
    },
    {
        title: "11th AIS3 新型態資安實務暑期課程 進階資安攻防競技組 - 學員",
        datetime: "2025.07.28 - 2025.08.03"
    },
    {
        title: "HITCON CMT 2025 - 會眾",
        datetime: "2025.08.15 - 2025.08.16"
    },
    {
        title: "CYBERSEC 2025 臺灣資安大會 - 會眾",
        datetime: "2025.04.15 - 2025.04.17"
    },
    {
        title: "10th AIS3 好厲駭（高階培訓 & 導師深度輔導）- 學員",
        datetime: "2025.08.22 - now"
    }
    ]

    const internExperiences: MemberInternType[] = [
        {
            company: "國立臺北科技大學 推廣教育中心",
            info: "設備網路維護，Python助教",
            datetime: "2020.08 - now"
        },
        {
            company: "康和綜合證券股份有限公司",
            info: "Full Stack Engineer Intern",
            datetime: "2024.02.19 - 2024.08.31"
        }
    ]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃廷翰"
            enName="Ting-Han Huang"
            avatar={Jason}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩二"]}
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


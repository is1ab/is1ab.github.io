import { Sample } from "../Sample";
import { useEffect } from "react";
import {
	MemberArticleType,
	MemberCertificateType,
	MemberInternType,
	MemberParticipateType,
	MemberCompetitionExperienceType,
	MemberPresentationType
} from "../../type/MemberCertificateType";

// 個人簡介
const bio = () => {
	useEffect(() => {
		const styleTag = document.createElement("style");
		styleTag.innerHTML = `
			.yeyeyeBioBlock .yeyeyeRgbText {
				background: linear-gradient(
					to right, 
					#ff7f50, #daa520, #3cb371, #87ceeb, #ba55d3, #ff7f50
				);
				background-size: 200% auto;
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				
				animation: shine 4s linear infinite;
			}

			@keyframes shine {
				to {
					background-position: 200% center;
				}
			}
		`;
		document.head.appendChild(styleTag);
		return () => {
			document.head.removeChild(styleTag);
		};
	}, []);
	return (
		<div className="yeyeyeBioBlock">
			<p>
				我是劉業閎，可以叫我 <strong className="yeyeyeRgbText">夜</strong>{" "}
				也可以叫我 <strong className="yeyeyeRgbText">業</strong> 又或者是{" "}
				<strong className="yeyeyeRgbText">葉</strong> ，看你喜歡哪個
			</p>
		</div>
	);
};

// 圖片來源
import avatarSrc from "../../assets/member/yeyeye.jpg";

// 比賽經歷
const competitionExp: MemberCompetitionExperienceType[] = [
	{
		title: "TSCCTF 2025",
		result: "112/509",
		datetime: "2025/01/13 - 2025/01/16",
	},
	{
		title: "SwampCTF 2025",
		result: "219/751",
		datetime: "2025/03/28 - 2025/03/30",
	},
	{
		title: "AIS3 Pre-exam CTF 2025",
		result: "201/493",
		datetime: "2025/05/25 - 2025/05/27",
	},
	{
		title: "DownUnderCTF 2025",
		result: "500/1667 Team(Name: NTUT_Is1ab)",
		datetime: "2025/07/18 - 2025/07/20",
	},
	{
		title: "WHYCTF 2025",
		result: "188/1806 Team(Name: NTUT_is1ab)",
		datetime: "2025/08/09 - 2025/08/11",
	},
	{
		title: "SekaiCTF 2025",
		result: "199/1060 Team(Name: NTUT_Is1ab)",
		datetime: "2025/08/16 - 2025/08/18",
	},
	{
		title: "FortID CTF 2025",
		result: "249/553 Team(Name: NTUT_Is1ab)",
		datetime: "2025/09/12 - 2025/09/14",
	},
	{
		title: "AEGIS 2025 (神盾盃初賽)",
		result: "7/40 Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
		datetime: "2025/09/27",
	},
	{
		title: "osu!gaming CTF 2025",
		result: "124/740",
		datetime: "2025/10/25 - 2025/10/27",
	},
	{
		title: "Patriot CTF 2025",
		result: "591/1362 Team(Name: Is1ab_Web)",
		datetime: "2025/11/21 - 2025/11/23",
	},
	{
		title: "AIS3 EOF 2025 (初賽)",
		result: "33/82 Team(Name: NTUT_ba1si)",
		datetime: "2025/12/20 - 2025/12/22",
	},
	{
		title: "KnightCTF 2026",
		result: "426/890 Team Name: NTUT_Is1ab",
		datetime: "2026/01/15 ~ 2026/01/16",
	},
	{
		title: "Pascal CTF 2026",
		result: "121/855 Team Name: NTUT_Is1ab",
		datetime: "2026/01/31 ~ 2026/02/01",
	},
	{
		title: "pico CTF 2026",
		result: "261/8747 Team Name: NTUT_is1ab",
		datetime: "2026/03/10 ~ 2026/03/20",
	}
];

// 資安證照／檢定
const certificates: MemberCertificateType[] = [
	{
		title: "iPAS 資訊安全工程師-初級能力鑑定",
		datetime: "2024/11/23",
	},
];

// 活動參與
const participates: MemberParticipateType[] = [
	{
		title: "SITCON 2025",
		datetime: "2025/03/08 - 2025/03/10",
	},
	{
		title: "CYBERSEC 2024 臺灣資安大會",
		datetime: "2024/05/14 - 2024/05/16",
	},
	{
		title: "HITCON 2025",
		datetime: "2025/08/15 ~ 2025/08/16",
	},
];

// 實習經歷
const internExperiences: MemberInternType[] = [];

// 期刊論文
const journals: MemberArticleType[] = [];

// 會議論文
const conferences: MemberArticleType[] = [];

// 技術會議論文
const techConfs: MemberArticleType[] = [];

const presentations: MemberPresentationType[] = [
		{
			title: "XSSky: Detecting XSS Vulnerabilities through Local Path-Persistent Fuzzing",
			authors: "Youkun Shi, Yuan Zhang, Tianhao Bai, Feng Xue, Jiarun Dai, Fengyu Liu, Lei Zhang, Xiapu Luo, and Min Yang",
			journal: "USENIX Security Symposium",
			datetime: "2025.08.13"
		}
	]

export const YeyeyeMemberPage = () => {
	return (
		<Sample
			zhName="劉業閎"
			enName="Liu, Yeah Hung"
			avatar={avatarSrc}
			institutes={["國立臺北科技大學 資工系碩士班 碩一"]}
			bio={bio()}
			presentations={presentations}
			experiences={competitionExp}
			certificates={certificates}
			participates={participates}
			intern={internExperiences}
			journals={journals}
			conferences={conferences}
			techConfs={techConfs}
		/>
	);
};

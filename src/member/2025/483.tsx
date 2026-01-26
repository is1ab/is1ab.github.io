import { Sample } from "../Sample";
import _483 from "../../assets/member/483.jpg";
import {
	MemberArticleType,
	MemberCertificateType,
	MemberInternType,
	MemberParticipateType,
	MemberCompetitionExperienceType,
} from "../../type/MemberCertificateType";

export const _483MemberPage = () => {
	const bio = "我是沈柏安，你可以稱呼我為 483 。 CTF 比賽 Player Name 通常是 pudding483";
	const certificates: MemberCertificateType[] = [
		{
			title: "iPAS 資訊安全工程師-初級能力鑑定",
			datetime: "2024/12/31",
		},
	];
	const competitionExperiences: MemberCompetitionExperienceType[] = [
		{
			title: "TSC CTF 2025",
			result: "Player Name: pudding483, Rank: 103/509",
			datetime: "2025/01/15 ~ 2025/01/16",
		},
		{
			title: "pico CTF 2025",
			result: "Team Name: NTUT Is1ab, Rank: 305/10460",
			datetime: "2025/03/08 ~ 2025/03/18",
		},
		{
			title: "Cyber Apocalypse CTF 2025: Tales from Eldoria",
			result: "Team Name: NTUT_Is1ab, Rank: 715/8130",
			datetime: "2025/03/21 ~ 2025/03/26",
		},
		{
			title: "Swamp CTF 2025",
			result: "Team Name: NTUT_Is1ab, Rank: 219/751",
			datetime: "2025/03/29 ~ 2025/03/31",
		},
		{
			title: "Squ1rrel CTF 2025",
			result: "Team Name: NTUT_Is1ab, Rank: 227/611",
			datetime: "2025/04/05 ~ 2025/04/07",
		},
		{
			title: "DEFCON CTF 2025",
			result: "Team Name: 星爆牛炒竹狐, Rank: 31/195",
			datetime: "2025/04/12 ~ 2025/04/14",
		},
		{
			title: "AIS3 Pre-exam CTF 2025",
			result: "Player Name: pudding483, Rank: 224/344",
			datetime: "2025/05/24 ~ 2025/05/26",
		},
		{
			title: "No Hack No CTF 2025",
			result: "Team Name: NTUT_Is1ab, Rank: 53/473",
			datetime: "2025/07/05 ~ 2025/07/07",
		},
		{
			title: "DownUnder CTF 2025",
			result: "Team Name: NTUT_Is1ab, Rank: 508/1667",
			datetime: "2025/07/18 ~ 2025/07/20",
		},
		{
			title: "WHY CTF 2025",
			result: "Team Name: NTUT_Is1ab, Rank: 188/1806",
			datetime: "2025/08/09 ~ 2025/08/11",
		},
		{
			title: "SEKAI CTF 2025",
			result: "Team Name: NTUT_Is1ab, Rank: 200/1060",
			datetime: "2025/08/16 ~ 2025/08/18",
		},
		{
			title: "FortID CTF 2025",
			result: "Team Name: NTUT_Is1ab, Rank: 249/553",
			datetime: "2025/09/12 ~ 2025/09/14",
		},
		{
			title: "AEGIS 2025 (神盾盃初賽)",
			result: "Team Name: 在小小的實驗室裡挖阿挖阿挖, Rank: 7/40",
			datetime: "2025/09/27",
		},
		{
			title: "Patriot CTF 2025",
			result: "Team Name: Is1ab_Web, Rank: 591/1362",
			datetime: "2025/11/21 ~ 2025/11/23",
		},
		{
			title: "AIS3 EOF 2025 (初賽)",
			result: "Team Name: NTUT_ba1si, Rank: 33/82",
			datetime: "2025/12/20 ~ 2025/12/22",
		}
	];
	const participates: MemberParticipateType[] = [
		{
			title: "SITCON 2025",
			datetime: "2025/03/08",
		},
		{
			title: "CYBERSEC 2025 臺灣資安大會",
			datetime: "2025/04/15 ~ 2024/04/17",
		},
		{
			title: "HITCON 2025",
			datetime: "2025/08/15 ~ 2024/08/16",
		},
		{
			title: "第十屆臺灣好厲駭 高階學員培訓",
			datetime: "2025/09 ~ now",
		}
	];
	const internExperiences: MemberInternType[] = [];
	const journals: MemberArticleType[] = [];
	const conferences: MemberArticleType[] = [];
	const techConfs: MemberArticleType[] = [];
	return (
		<Sample
			zhName="沈柏安"
			enName="Shen, Bo-An"
			avatar={_483}
			institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩零"]}
			bio={bio}
			experiences={competitionExperiences}
			certificates={certificates}
			participates={participates}
			intern={internExperiences}
			journals={journals}
			conferences={conferences}
			techConfs={techConfs}
		></Sample>
	);
};

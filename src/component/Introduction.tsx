import { useNavigate } from "react-router-dom"
import { Topics } from "./Topics"
import topics from "../assets/topics.json"

export function Introduction(){
    const navigate = useNavigate()
    return (
        <div className="p-3 py-4 introduction">
            <h4 className="text-center fw-bold mb-3">簡介</h4>
            <p> 國立臺北科技大學資訊工程系 <span style={{fontWeight: 800}}>資訊安全實驗室</span> （is1ab@NTUT）於 2022 年 8 月成立，由 <a className="text-decoration-underline" onClick={() => navigate("/Profile")} style={{cursor: 'pointer'}}> 孫勤昱 </a>教授領導。我們的團隊致力於設計原創的方法論，並開發實用的資安系統，以滿足不同客戶的需求；另一方面，我們熱衷專研白帽駭客攻防技術。我們歡迎對研究懷抱熱情與創新想法的學生加入，一同探索資訊安全／網路安全的前沿課題。期盼透過研究計畫，能為電腦與資訊安全提供更強而有力的防護。</p>
            
            <br></br>
            <p> 我們的研究主題涵蓋以下方向： </p>
            
            {topics.map((topic) => <Topics topic={topic.title} description={topic.description}></Topics>)}
            
            <br></br>
            <p> 欲加入實驗室之同學，請先行閱讀《<a className="text-decoration-underline" style={{cursor: 'pointer'}} onClick={() => navigate("/rules")}>實驗室規則</a>》，再與《<a href="mailto:cysun@ntut.edu.tw">我</a>》聯繫。 </p>
        </div>
    )
}

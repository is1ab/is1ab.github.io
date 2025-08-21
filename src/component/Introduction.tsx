import { useNavigate } from "react-router-dom"
import { Topics } from "./Topics"
import topics from "../assets/topics.json"

export function Introduction(){
    const navigate = useNavigate()
    return (
        <div className="p-3 py-4 introduction">
            <h4 className="text-center fw-bold mb-3">簡介</h4>
            <p> 國立臺北科技大學資訊工程系<span style={{fontWeight: 800}}>資訊安全實驗室</span> (is1ab@NTUT) 於 2022 年 8 月成立，. 由 <a className="text-decoration-underline" onClick={() => navigate("/Profile")} style={{cursor: 'pointer'}}>孫勤昱</a>教授領導, our team aims to design original methodologies and develop practical security systems to meet the different demands of clients.</p>
            <p> Our research topics include: </p>
            
            {topics.map((topic) => <Topics topic={topic.title} description={topic.description}></Topics>)}
            
            <p> We welcome students with <span className="bold-red">research passion</span> and <span className="bold-red">crazy ideas</span> to join us and expect our research projects can have great protection on improving computer security. </p>
            <br></br>
            <p> 欲加入實驗室之同學，請先行閱讀《<a className="text-decoration-underline" style={{cursor: 'pointer'}} onClick={() => navigate("/rules")}>實驗室入場手冊</a>》，再與《<a href="mailto:cysun@ntut.edu.tw">我</a>》聯繫。 </p>
        </div>
    )
}

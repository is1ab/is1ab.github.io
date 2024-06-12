import { useNavigate } from "react-router-dom"
import { Topics } from "./Topics"
import topics from "../assets/topics.json"

export function Introduction(){
    const navigate = useNavigate()
    return (
        <div className="p-3 py-4 introduction">
            <h4 className="text-center fw-bold mb-3">簡介</h4>
            <p> <span style={{fontWeight: 800}}>Information Security Laboratory</span> (ISLab@NTUT) was founded in August 2022 in the Department of Computert Science and Information Engineering, National Taipei University of Technology. Led by professor <a className="text-decoration-underline" onClick={() => navigate("/Profile")} style={{cursor: 'pointer'}}>Chin-Yu Sun</a>, our team aims to design original methodologies and develop practical security systems to meet the different demands of clients.</p>
            <p> Our research topics include: </p>
            <ul style={{lineHeight: 2}}>
                <li className="text-white">
                    { topics.map((topic) => <Topics topic={topic.title} description={topic.description}></Topics>) }
                </li>
            </ul>
            <p> We welcome students with <span className="bold-red">research passion</span> and <span className="bold-red">crazy ideas</span> to join us and expect our research projects can have great protection on improving computer security. </p>
            <br></br>
            <p> 欲加入實驗室之同學，請先行閱讀《<a className="text-decoration-underline" style={{cursor: 'pointer'}} onClick={() => navigate("/rules")}>本實驗室入場手冊</a>》，再與《<a href="mailto:cysun@ntut.edu.tw">我</a>》聯繫。 </p>
        </div>
    )
}
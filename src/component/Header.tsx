import { useNavigate } from "react-router-dom";

export function Header(){
    const navigate = useNavigate()

    return (
        <div className="w-100 pt-5 pb-4 rounded">
            <p className="fs-2 fw-bold" onClick={() => window.location.href = "/"} style={{cursor: "pointer"}}>資訊安全實驗室</p>
            <h6 className="m-0" ><small style={{color: "#ffffff99"}}>國立臺北科技大學 資訊工程學系</small></h6>
        </div>
    )
}
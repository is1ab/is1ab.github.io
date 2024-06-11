import { useNavigate } from "react-router-dom"

export function Introduction(){
    const navigate = useNavigate()
    return (
        <div className="p-3 py-4 introduction">
            <h4 className="text-center fw-bold mb-3">簡介</h4>
            <p> <span style={{fontWeight: 800}}>Information Security Laboratory</span> (ISLab@NTUT) was founded in August 2022 in the Department of Computert Science and Information Engineering, National Taipei University of Technology. Led by professor <a className="text-decoration-underline" onClick={() => navigate("/about_prof")} style={{cursor: 'pointer'}}>Chin-Yu Sun</a>, our team aims to design original methodologies and develop practical security systems to meet the different demands of clients.</p>
            <p> Our research topics include: </p>
            <ul style={{lineHeight: 2}}>
                <li className="text-white"><p><span className="bold-red">Cryptography</span>: <span className="fst-italic">Encryption/Decription, Digital signatures, Authentication schemes, and Privacy issues.</span></p></li>
                <li className="text-white"><p><span className="bold-red">Network security</span>: <span className="fst-italic">Intrusion Detection/Prevention System (IPS/IDS), Secure network protocols, and Hacking techniques.</span></p></li>
                <li className="text-white"><p><span className="bold-red">Hardware security</span>: <span className="fst-italic">Cache side-channel attach, Memory protection, Logic locking, and Physically Unclonable Function (PUF).</span></p></li>
                <li className="text-white"><p><span className="bold-red">Applied cryptography</span>: <span className="fst-italic">Security/Privacy issues on E-commerce, Blockchain, Machine/Deep learning, and Fintech.</span></p></li>
                <li className="text-white"><p><span className="bold-red">Quantum cryptography</span>: <span className="fst-italic">Quantum Key Distribution protocols (QKD), Quantum Key Agreement (QKA), Quantum Secret Sharing (QSS), and Quantum Direct Communication (QDC).</span></p></li>
            </ul>
            <p> We welcome students with <span className="bold-red">research passion</span> and <span className="bold-red">crazy ideas</span> to join us and expect our research projects can have great protection on improving computer security. </p>
            <br></br>
            <p> 欲加入實驗室之同學，請先行閱讀《本實驗室入場手冊》，再與《我》聯繫。 </p>
        </div>
    )
}
import { Alert } from "../component/Alert";
import { Introduction } from "../component/Introduction";
import { Location } from "../component/Location";

export function Home(){
    return (
        <div>
            <Alert></Alert>
            <Introduction></Introduction>
            <hr className="bg-white m-0" style={{padding: "0.05rem"}}></hr>
            <Location></Location>
        </div>
    )
}
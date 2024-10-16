import meeting from "../assets/meeting.json"

export function Meeting(){

    const MeetingItem = (props: {
        title: string
        time: string
    }) => {
        return (
            <tr>
                <td className="border border-1">
                    <span className="title"></span>
                    <strong>{props.title}</strong>&nbsp;
                </td>
                <td className="border border-1">
                    <span>{props.time}</span>
                </td>
            </tr>
        )
    }

    return (
        <div className="news">
            <h4 className="text-center fw-bold">報告日程 Meeting</h4>
            <div className="d-flex flex-column">
                <table className="table-bordered">
                    { 
                        meeting.map((data) => {
                            return (
                                <MeetingItem 
                                    title={data.title} 
                                    time={data.time}
                                ></MeetingItem>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

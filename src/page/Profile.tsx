import datas from "../assets/profile.json"

export function Profile(){
    return (
        <>
            <h4 className="text-center fw-bold">簡介</h4>
            <table className="table-bordered">
                {datas.map(data => {
                    return (
                        <tr>
                            <td className="w-50 border border-1 p-3">
                                <p>{data.title}</p>
                            </td>
                            <td className="w-100 border border-1 p-3">
                                {data.descriptions.map(description => {
                                    return <p>{description}</p>
                                })}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
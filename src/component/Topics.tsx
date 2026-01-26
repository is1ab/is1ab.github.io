export function Topics(props: {
    topic: string,
    description: string
}){
    return (
        <p>
            <span className="bold-red">{props.topic}</span>：<span className="fst-italic">{props.description}</span>
        </p>
    )
}

import ReactMarkdown from "react-markdown";

interface Props {
    source: string,
    className: string
}
function Markdown ({ className, source }: Props) {
    return (
        <ReactMarkdown className={className}>{source}</ReactMarkdown>
    )
}

export default Markdown
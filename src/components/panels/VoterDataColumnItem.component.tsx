import { formatNumberWithCommas } from "../helpers/SegmentHelpers"

interface VoterDataColumnItemProps {
    text: string | number
    highlighted?: boolean
    selected?: boolean
}

const VoterDataColumnItem = ({ text, highlighted, selected }: VoterDataColumnItemProps) => {
    return (
        <div className={"col-element "
            + (highlighted ? "highlighted" : "")
            + (selected ? "selected" : "")}
        >
            <p>{typeof text !== 'string' ? formatNumberWithCommas(text) : text}</p>
        </div>
    )
}

export default VoterDataColumnItem
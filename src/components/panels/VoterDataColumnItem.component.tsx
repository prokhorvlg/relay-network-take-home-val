import { formatNumberWithCommas } from "../helpers/SegmentHelpers"

interface VoterDataColumnItemProps {
    text: string | number
    selected?: boolean
}

const VoterDataColumnItem = ({ text, selected }: VoterDataColumnItemProps) => {
    return (
        <div className={"col-element " + (selected ? "selected" : "")}>
            <p>{typeof text !== 'string' ? formatNumberWithCommas(text) : text}</p>
        </div>
    )
}

export default VoterDataColumnItem
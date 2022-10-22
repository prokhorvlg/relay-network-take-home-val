import { formatNumberWithCommas } from "../helpers/SegmentHelpers"

interface VoterDataColumnItemProps {
    text: string | number
}

const VoterDataColumnItem = ({ text }: VoterDataColumnItemProps) => {
    return (
        <div className="col-element">
            <p>{typeof text !== 'string' ? formatNumberWithCommas(text) : text}</p>
        </div>
    )
}

export default VoterDataColumnItem
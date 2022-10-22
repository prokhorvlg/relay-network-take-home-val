import { IDropdownOption, ISegment } from "../../interfaces/VoterData";
import { formatNumberWithCommas, getSegmentByKey } from "../helpers/SegmentHelpers";

interface SummaryDetailsProps {
    text: string
    segment: ISegment
    selected: boolean
}

const SummaryDetails = ({ text, segment, selected }: SummaryDetailsProps) => {
    if (!segment.percentage) return null
    return (
        <div data-testid="summary-details" className={"details " + (selected ? "selected" : "")}>
            <p>{text}</p>
            <h2>{segment.name} - {formatNumberWithCommas(segment.count || 0)}</h2>
            <p className="percent">{segment.percentage.toFixed(2)}%</p>
        </div>
    )
}

export default SummaryDetails;

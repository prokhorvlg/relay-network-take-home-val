import { ISegment } from "../../interfaces/VoterData";
import { getSegmentByKey } from "../helpers/SegmentHelpers";

interface SummaryPanelProps {
	segments: ISegment[]
	topSegmentKey: string | undefined
}

const SummaryPanel = ({ segments, topSegmentKey }: SummaryPanelProps) => {
	// If there is no top segment, stop display.
	if (!topSegmentKey) return null

	const topSegment: ISegment | undefined = getSegmentByKey(topSegmentKey, segments)
	const isTopSegmentCalculated = topSegment !== undefined

	// If something about the top segment is wrong, stop display.
	if (!isTopSegmentCalculated || !topSegment.percentage) return null
	else {
		return (
			<div className="summary-panel">
				<div>Top Segment of All Voters</div>
				<div>{topSegment.name} - {topSegment.count}</div>
				<div>{isTopSegmentCalculated ? topSegment.percentage * 100 : "0.00"}%</div>
			</div>
		)
	}

}

export default SummaryPanel;

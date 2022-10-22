import { IDropdownOption, ISegment } from "../../interfaces/VoterData";
import { getSegmentByKey } from "../helpers/SegmentHelpers";
import SegmentDropdown from "./SegmentDropdown.component";

interface SummaryPanelProps {
	segments: ISegment[]
	topSegmentKey: string | undefined
	selectedSegment: IDropdownOption | undefined
	setSelectedSegment: Function | undefined
}

const SummaryPanel = ({ segments, topSegmentKey, selectedSegment, setSelectedSegment }: SummaryPanelProps) => {
	// If there is no top segment, stop display.
	if (!topSegmentKey) return null

	const topSegment: ISegment | undefined = getSegmentByKey(topSegmentKey, segments)
	const isTopSegmentCalculated = topSegment !== undefined

	// If something about the top segment is wrong, stop display.
	if (!isTopSegmentCalculated || !topSegment.percentage) return null
	else {
		return (
			<div className="summary-panel" data-testid="summary-panel">
				<div className="dropdown">
					<SegmentDropdown
						segments={segments}
						selectedSegment={selectedSegment}
						setSelectedSegment={setSelectedSegment}
					/>
				</div>
				<div className="details">
					<p>Top Segment of All Voters</p>
					<h2>{topSegment.name} - {topSegment.count}</h2>
					<p>{isTopSegmentCalculated ? topSegment.percentage.toFixed(2) : "0.00"}%</p>
				</div>
			</div>
		)
	}

}

export default SummaryPanel;

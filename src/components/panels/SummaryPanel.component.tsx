import { IDropdownOption, ISegment } from "../../interfaces/VoterData";
import { getSegmentByKey } from "../helpers/SegmentHelpers";
import SegmentDropdown from "./SegmentDropdown.component";
import SummaryDetails from "./SummaryDetails.component";

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

		// Starr formulating a segment details object.
		let detailsSegment: ISegment
		let detailsText: string
		let detailsSelected: boolean
		// If there is a selected segment, details segment reflects selected
		if (selectedSegment) {
			const selectedSegmentObj = getSegmentByKey(selectedSegment.value, segments)
			if (!selectedSegmentObj || !selectedSegmentObj.percentage) return null
			detailsSegment = selectedSegmentObj
			detailsText = "Percentage of all voters that are:"
			detailsSelected = true
		}
		// If there isn't, details segment reflects top segment
		else {
			detailsText = "Top segment of all voters:"
			detailsSegment = topSegment
			detailsSelected = false
		}

		return (
			<div className="summary-panel" data-testid="summary-panel">
				<SegmentDropdown
					segments={segments}
					selectedSegment={selectedSegment}
					setSelectedSegment={setSelectedSegment}
				/>
				<SummaryDetails
					segment={detailsSegment}
					text={detailsText}
					selected={detailsSelected}
				/>
			</div>
		)
	}

}

export default SummaryPanel;

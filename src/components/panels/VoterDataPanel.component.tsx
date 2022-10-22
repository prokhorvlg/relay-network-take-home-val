import { IDropdownOption, ISegment, IWard } from "../../interfaces/VoterData";
import { formatNumberWithCommas } from "../helpers/SegmentHelpers";
import VoterDataRowItem from "./VoterDataRowItem.component";

interface VoterDataPanelProps {
	wards: IWard[]
	segments: ISegment[]
	selectedSegment: IDropdownOption | undefined
}

const VoterDataPanel = ({ wards, segments, selectedSegment }: VoterDataPanelProps) => {
	return (
		<div className="voter-data-panel">
			<div className="voter-data-headers">
				{segments.map((segment: ISegment) => {
					const isSameAsSelected = selectedSegment?.value === segment.key
					return (
						<div
							className={"col-element " + (isSameAsSelected ? "emphasized" : "")}
							key={segment.key}
						>
							<h3>{segment.name}</h3>
						</div>
					)
				})}
			</div>
			<div className="voter-data-list">
				{wards.map((ward: IWard) =>
					<VoterDataRowItem
						key={ward.ward}
						ward={ward}
					/>
				)}
			</div>
			<div className="voter-data-totals">
				{segments.map((segment: ISegment) => {
					const isSameAsSelected = selectedSegment?.value === segment.key
					return (
						<div
							className={"col-element " + (isSameAsSelected ? "emphasized" : "")}
							key={segment.key}
						>
							<h3>{formatNumberWithCommas(segment.count || "-")}</h3>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default VoterDataPanel;

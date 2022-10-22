import { IDropdownOption, ISegment, IWard } from "../../interfaces/VoterData";
import VoterDataColumnItem from "./VoterDataColumnItem.component";

interface VoterDataRowItemProps {
	ward: IWard
	segments: ISegment[]
	selectedSegment?: IDropdownOption
}

const VoterDataRowItem = ({ ward, segments, selectedSegment }: VoterDataRowItemProps) => {
	return (
		<div className="voter-data-row-item">
			{segments.map((segment: ISegment) => {
				let text: string
				let highlighted: boolean
				let selected: boolean = segment.key === (selectedSegment?.value || "")

				if (segment.key === "percentage") {
					if (ward.percentage) {
						text = ward.percentage.toFixed(2) + "%"
						highlighted = true
					} else {
						text = "-"
						highlighted = false
					}
				} else {
					text = ward[segment.key as keyof IWard] as string || ""
					highlighted = false
				}
				return (
					<VoterDataColumnItem
						key={segment.key}
						text={text}
						highlighted={highlighted}
						selected={selected}
					/>
				)
			})}
		</div>
	)
}

export default VoterDataRowItem
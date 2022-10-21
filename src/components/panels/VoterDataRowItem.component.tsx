import { IWard } from "../../interfaces/VoterData";

interface VoterDataRowItemProps {
    ward: IWard
}

const VoterDataRowItem = ({ ward }: VoterDataRowItemProps) => {
	return (
		<div className="voter-data-row-item">
			TODO: Contains item data for each ward
		</div>
	)
}

export default VoterDataRowItem;

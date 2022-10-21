import { VoterDataHeaders } from "../../data/VoterDataHeaders";
import { IVoterDataHeader, IWard } from "../../interfaces/VoterData";
import VoterDataHeaderItem from "./VoterDataHeaderItem.component";
import VoterDataRowItem from "./VoterDataRowItem.component";

interface VoterDataPanelProps {
	wards: IWard[]
}

const VoterDataPanel = ({ wards }: VoterDataPanelProps) => {
	return (
		<div className="voter-data-panel">
			<div className="voter-data-headers">
				{VoterDataHeaders.map((headerData: IVoterDataHeader) => 
					<VoterDataHeaderItem 
						text={headerData.text}
					/>
				)}
			</div>
			<div className="voter-data-list">
				{wards.map((ward: IWard) => 
					<VoterDataRowItem 
						ward={ward}
					/>
				)}
			</div>
			<div className="voter-data-footer">

			</div>
		</div>
	)
}

export default VoterDataPanel;

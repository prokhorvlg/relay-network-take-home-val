import { VoterDataHeaders } from "../../data/VoterDataHeaders";
import { IVoterDataHeader } from "../../interfaces/VoterData";
import VoterDataHeaderItem from "./VoterDataHeaderItem.component";

const VoterDataPanel = () => {
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
				TODO: List data from store here
			</div>
			<div className="voter-data-footer">

			</div>
		</div>
	)
}

export default VoterDataPanel;

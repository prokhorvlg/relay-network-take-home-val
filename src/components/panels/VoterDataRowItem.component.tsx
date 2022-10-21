import { IWard } from "../../interfaces/VoterData";

interface VoterDataRowItemProps {
    ward: IWard
}

const VoterDataRowItem = ({ ward }: VoterDataRowItemProps) => {
	return (
		<div className="voter-data-row-item">
			<div className="col-element">{ward.ward}</div>
            <div className="col-element">{ward.rep}</div>
            <div className="col-element">{ward.dem}</div>
            <div className="col-element">{ward.other_party}</div>
            <div className="col-element">{ward.male}</div>
            <div className="col-element">{ward.female}</div>
            <div className="col-element">{ward.unknown_sex}</div>
            <div className="col-element">{ward.black}</div>
            <div className="col-element">{ward.hispanic}</div>
            <div className="col-element">{ward.white}</div>
            <div className="col-element">{ward.other_race}</div>
            <div className="col-element">{ward.total}</div>
            <div className="col-element">%</div>
		</div>
	)
}

export default VoterDataRowItem
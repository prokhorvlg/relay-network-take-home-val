import { IWard } from "../../interfaces/VoterData";
import VoterDataColumnItem from "./VoterDataColumnItem.component";

interface VoterDataRowItemProps {
    ward: IWard
}

const VoterDataRowItem = ({ ward }: VoterDataRowItemProps) => {
    return (
        <div className="voter-data-row-item">
            <VoterDataColumnItem text={ward.ward} />
            <VoterDataColumnItem text={ward.rep} />
            <VoterDataColumnItem text={ward.dem} />
            <VoterDataColumnItem text={ward.other_party} />
            <VoterDataColumnItem text={ward.male} />
            <VoterDataColumnItem text={ward.female} />
            <VoterDataColumnItem text={ward.unknown_sex} />
            <VoterDataColumnItem text={ward.black} />
            <VoterDataColumnItem text={ward.hispanic} />
            <VoterDataColumnItem text={ward.white} />
            <VoterDataColumnItem text={ward.other_race} />
            <VoterDataColumnItem text={ward.total} />
            <VoterDataColumnItem text="-" />
        </div>
    )
}

export default VoterDataRowItem
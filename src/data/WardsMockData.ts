import { IWard } from "../interfaces/VoterData";

// Contains a list of sample wards for use in unit testing.

const SampleWards: IWard[] = [
    {
        ward: "WD01",
        dem: 9401,
        rep: 1402,
        other_party: 1705,
        total: 12508,
        white: 4446,
        black: 566,
        hispanic: 393,
        other_race: 650,
        male: 4576,
        female: 4927,
        unknown_sex: 3005
    }
]

export default SampleWards
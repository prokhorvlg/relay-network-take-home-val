import { IWard } from "../interfaces/VoterData";

// Contains a list of sample wards for use in unit testing.

const WardsMock: IWard[] = [
	{
		ward: "WD01",
		dem: 2,
		rep: 3,
		other_party: 4,
		total: 10,
		white: 3,
		black: 2,
		hispanic: 4,
		other_race: 1,
		male: 6,
		female: 3,
		unknown_sex: 1
	},
	{
		ward: "WD02",
		dem: 2,
		rep: 1,
		other_party: 2,
		total: 5,
		white: 1,
		black: 3,
		hispanic: 1,
		other_race: 0,
		male: 1,
		female: 3,
		unknown_sex: 1
	}
]

export default WardsMock
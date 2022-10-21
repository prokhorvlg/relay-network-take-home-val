import { IGetVoterDataResponse, ISegment, IWard } from "../interfaces/VoterData";

// List of sample wards for use in unit testing.
export const mockWards: IWard[] = [
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

// Mock response from the given fetch endpoint.
export const mockGetVoterData: IGetVoterDataResponse = {
	rows: mockWards,
	time: 1,
	total_rows: 2
}
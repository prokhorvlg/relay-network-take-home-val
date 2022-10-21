// VoterData.ts
// Contains all interfaces pertaining to voter data.

export interface IGetVoterDataRequest {}

export interface IGetVoterDataResponse {
    rows: IWard[]
    time: number
    total_rows: number
}

export interface IWard {
    ward: string
    dem: number
    rep: number
    other_party: number
    total: number
    white: number
    black: number
    hispanic: number
    other_race: number
    male: number
    female: number
    unknown_sex: number
}

export interface IVoterDataHeader {
    text: string
    emphasized?: boolean
}
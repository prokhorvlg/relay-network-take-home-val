// VoterData.ts
// Contains all interfaces pertaining to voter data.

export interface IGetVoterDataRequest { }

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
    percentage?: number
}


export interface ISegment {
    key: string
    name: string
    count?: number
    percentage?: number
    ignoreForCount?: boolean            // Ignore this segment when counting totals
    ignoreForPercent?: boolean          // Ignore this segment when calculating percentage
    ignoreForTop?: boolean              // Ignore this segment when calculating top segment
    ignoreForDropdown?: boolean         // Ignore this segment when creating dropdown option
}

export interface IDropdownOption {
    value: string
    label: string
}
import { ISegment, SegmentKey } from "../interfaces/VoterData";

export const baseSegments: ISegment[] = [
    {
        key: SegmentKey.Ward,
        name: "Ward",
        ignoreForCount: true,
        ignoreForPercent: true,
        ignoreForTop: true,
        ignoreForDropdown: true
    },
    {
        key: SegmentKey.Republican,
        name: "Republican"
    },
    {
        key: SegmentKey.Democrat,
        name: "Democrat"
    },
    {
        key: SegmentKey.OtherParty,
        name: "Other Party"
    },
    {
        key: SegmentKey.Male,
        name: "Male"
    },
    {
        key: SegmentKey.Female,
        name: "Female"
    },
    {
        key: SegmentKey.UnknownSex,
        name: "Unknown Sex"
    },
    {
        key: SegmentKey.Black,
        name: "Black"
    },
    {
        key: SegmentKey.Hispanic,
        name: "Hispanic"
    },
    {
        key: SegmentKey.White,
        name: "White"
    },
    {
        key: SegmentKey.OtherRace,
        name: "Other Race"
    },
    {
        key: SegmentKey.Total,
        name: "Total",
        percentage: 100.00,
        ignoreForPercent: true,
        ignoreForTop: true
    },
    {
        key: SegmentKey.Percentage,
        name: "%",
        ignoreForCount: true,
        ignoreForPercent: true,
        ignoreForTop: true,
        ignoreForDropdown: true
    }
]
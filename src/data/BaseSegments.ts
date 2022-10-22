import { ISegment } from "../interfaces/VoterData";

export const baseSegments: ISegment[] = [
    {
        key: "ward",
        name: "Ward",
        ignoreForCount: true,
        ignoreForPercent: true,
        ignoreForTop: true,
        ignoreForDropdown: true
    },
    {
        key: "rep",
        name: "Republican"
    },
    {
        key: "dem",
        name: "Democrat"
    },
    {
        key: "other_party",
        name: "Other Party"
    },
    {
        key: "male",
        name: "Male"
    },
    {
        key: "female",
        name: "Female"
    },
    {
        key: "unknown_sex",
        name: "Unknown Sex"
    },
    {
        key: "black",
        name: "Black"
    },
    {
        key: "hispanic",
        name: "Hispanic"
    },
    {
        key: "white",
        name: "White"
    },
    {
        key: "other_race",
        name: "Other Race"
    },
    {
        key: "total",
        name: "Total",
        percentage: 100.00,
        ignoreForPercent: true,
        ignoreForTop: true
    },
    {
        key: "percentage",
        name: "%",
        ignoreForCount: true,
        ignoreForPercent: true,
        ignoreForTop: true,
        ignoreForDropdown: true
    }
]
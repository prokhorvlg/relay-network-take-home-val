import { ISegment, IWard } from "../../interfaces/VoterData";

export const getSegmentsFromWards = (wards: IWard[]): ISegment[] => {
    // Create dictionary to contain ward data.
    let segments: ISegment[] = [
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
            percentage: 100.00
        }
    ]

    // TOTAL COUNTS
    // Cycle through each ward and aggregate the total counts for each segment.
    wards.forEach((ward) => {
        segments.forEach((segment) => {
            const wardValue = ward[segment.key as keyof IWard] as number
            // Add to the total count for that segment
            if (segment.count) {
                segment.count = segment.count + wardValue
            } else {
                segment.count = wardValue
            }
        })
    })
    
    // PERCENTAGES
    const totalSegment = getSegmentByKey("total", segments)
    // Calculate percentages based on relation to total segment count
    if (totalSegment) {
        segments.forEach((segment) => {
            if (segment.count && totalSegment.count) {
                segment.percentage = segment.count / totalSegment.count
            }
        })
    }

    return segments
}

export const getSegmentByKey = (key: string, segments: ISegment[]): ISegment | undefined => {
    return segments.find((segment) => segment.key === key)
}

export const getTopSegmentFromSegments = (segments: ISegment[]): string => {
    let currentTopSegment = ""
    let currentTopCount = -1
    // For each segment, oust the top if its count is higher
    segments.forEach((segment) => {
        if (segment.count && segment.key !== "total") {
            if (currentTopSegment === "") {
                // If this just started, set this as the top segment
                currentTopSegment = segment.key
                currentTopCount = segment.count
            } else {
                // Compare to current top and oust if higher
                if (segment.count > currentTopCount) {
                    currentTopSegment = segment.key
                    currentTopCount = segment.count
                }
            }
        }
    })
    return currentTopSegment
}
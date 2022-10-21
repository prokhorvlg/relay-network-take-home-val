import { useEffect, useState } from "react";
import { getSegmentsFromWards, getTopSegmentFromSegments } from "../components/helpers/SegmentHelpers";
import { ISegment, IWard } from "../interfaces/VoterData";

// useVoterData.ts
// Contains hook that handles all data and functionality related to voter data.

const useVoterData = () => {
    // Contains data pertaining to voter information.
    const [wards, setWards] = useState<IWard[]>([])
    const [segments, setSegments] = useState<ISegment[]>([])
    const [topSegmentKey, setTopSegmentKey] = useState<string>()

    // Whenever wards are updated...
    useEffect(() => {
        // Calculate new segment totals and percentages.
        setSegments(getSegmentsFromWards(wards))
        // Calculate top segment. (the segment with the largest total)
        setTopSegmentKey(getTopSegmentFromSegments(segments))
    }, [wards])

    return {
        // store
        wards,
        segments,
        topSegmentKey,
        // actions
        setWards
    }
}

export default useVoterData

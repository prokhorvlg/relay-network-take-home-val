import { useEffect, useState } from "react";
import { getSegmentsFromWards, getTopSegmentFromSegments } from "../components/helpers/SegmentHelpers";
import { IDropdownOption, ISegment, IWard } from "../interfaces/VoterData";

// useVoterData.ts
// Contains hook that handles all data and functionality related to voter data.

const useVoterData = () => {
    // Contains data pertaining to voter information.
    const [wards, setWards] = useState<IWard[]>([])
    // Contains the aggregate for each segment of voters.
    const [segments, setSegments] = useState<ISegment[]>([])
    // Contains a key referring to the top segment of voters.
    const [topSegmentKey, setTopSegmentKey] = useState<string>()
    // Contains the current state of the selected segment.
    const [selectedSegment, setSelectedSegment] = useState<IDropdownOption>()

    // Whenever wards are changed...
    useEffect(() => {
        if (wards.length) {
            // Calculate new segment totals and percentages.
            setSegments(getSegmentsFromWards(wards))
            // Calculate top segment. (the segment with the largest total)
            setTopSegmentKey(getTopSegmentFromSegments(segments))
        }
    }, [wards])

    // Whenever the selected segment is updated...
    useEffect(() => {
        // Calculate percentages for each ward.
        if (selectedSegment) {
            const selectedKey = selectedSegment.value || "total"

            const newWards = wards.map((ward) => {
                return {
                    ...ward,
                    percentage: ward[selectedKey] as number / ward.total * 100
                }
            })
            setWards(newWards)
        } else {
            const newWards = wards.map((ward) => {
                return {
                    ...ward,
                    percentage: undefined
                }
            })
            setWards(newWards)
        }
    }, [selectedSegment])

    return {
        // store
        wards,
        segments,
        topSegmentKey,
        selectedSegment,
        // actions
        setWards,
        setSelectedSegment
    }
}

export default useVoterData

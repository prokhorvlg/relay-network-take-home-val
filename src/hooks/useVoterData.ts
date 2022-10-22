import { useEffect, useState } from "react";
import App, { AppState } from "../components/App.component";
import { getSegmentsFromWards, getTopSegmentFromSegments } from "../components/helpers/SegmentHelpers";
import { IDropdownOption, ISegment, IWard } from "../interfaces/VoterData";

// useVoterData.ts
// Contains hook that handles all data and functionality related to voter data.

const useVoterData = () => {
    // Contains data pertaining to voter information.
    const [wards, setWards] = useState<IWard[]>([])
    const [segments, setSegments] = useState<ISegment[]>([])
    const [topSegmentKey, setTopSegmentKey] = useState<string>()
    const [selectedSegment, setSelectedSegment] = useState<IDropdownOption>()

    // Whenever wards are changed...
    useEffect(() => {
        if (wards.length) {
            console.log("wards changed")
            // Calculate new segment totals and percentages.
            setSegments(getSegmentsFromWards(wards))
            // Calculate top segment. (the segment with the largest total)
            setTopSegmentKey(getTopSegmentFromSegments(segments))
        }
    }, [wards])

    // Whenever the selected segment is updated...
    useEffect(() => {
        console.log("selection changed")
        if (selectedSegment) {
            const selectedKey = selectedSegment.value as keyof IWard || "total"
            // Calculate percentages for each ward
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

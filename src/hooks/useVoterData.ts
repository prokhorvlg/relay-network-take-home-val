import { useEffect, useState } from "react";
import { AppState, VOTER_DATA_ENDPOINT_URL } from "../components/App.component";
import { getSegmentsFromWards, getTopSegmentFromSegments } from "../components/helpers/SegmentHelpers";
import { IDropdownOption, IGetVoterDataResponse, ISegment, IWard } from "../interfaces/VoterData";

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

    // Fetches wards data from endpoint and populates state.
    // In a fully-fledged app, this would likely be an action (and reducer).
    const fetchWardsFromEndpoint = async (): Promise<AppState> => {
        return await fetch(VOTER_DATA_ENDPOINT_URL)
            .then(response => {
                return response.json()
            })
            .then(
                (result: IGetVoterDataResponse) => {
                    // Filter out the "totals" row. (explained in readme's 'mistakes' section)
                    const rows = result.rows.filter((row) => {
                        return row.ward !== "Totals:"
                    })

                    // Set the state.
                    setWards(rows)
                    return Promise.resolve(AppState.Loaded)
                },
                (error) => {
                    // If an error has occured...
                    return Promise.resolve(AppState.Error)
                }
            )
    }

    return {
        // store
        wards,
        segments,
        topSegmentKey,
        selectedSegment,
        // actions
        setSelectedSegment,
        fetchWardsFromEndpoint
    }
}

export default useVoterData

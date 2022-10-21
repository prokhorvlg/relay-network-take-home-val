import { useState } from "react";
import { IWard } from "../interfaces/VoterData";

// useVoterData.ts
// Contains hook that handles all data and functionality related to voter data.

const useVoterData = () => {
    // Contains current ward data.
    const [wards, setWards] = useState<IWard[]>([]);

    // Adds given wards to store.
    const addWards = (addedWards: IWard[]): void => {
        setWards(wards  => [...wards, ...addedWards])
        // TODO: If this were a two-way app, this is where the post call would go.
    }

    const loadWardsFromEndpoint = (): void => {
        // TODO: Call endpoint to get wards
    }

    return [
        // store
        wards,
        // actions
        addWards
    ]
}

export default useVoterData

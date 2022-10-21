import { useEffect, useState } from "react";
import useVoterData from "../hooks/useVoterData";
import { IGetVoterDataResponse } from "../interfaces/VoterData";
import SummaryPanel from "./panels/SummaryPanel.component";
import VoterDataPanel from "./panels/VoterDataPanel.component";

const VOTER_DATA_ENDPOINT_URL: string = 
	"https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id"

enum AppState {
	NotLoaded,
	Loaded,
	Error
}

export const App = () => {
	// Contains current state of app
	const [loadingState, setLoadingState] = useState<AppState>(AppState.NotLoaded);

	const {wards, setWards} = useVoterData()

	// On app load, load the data,
	useEffect(() => {
		fetch(VOTER_DATA_ENDPOINT_URL)
			.then(response => response.json())
			.then(
				(result: IGetVoterDataResponse) => {
					// If the results are fetched correctly, set the data.
					// In a fully-fledged app, this would likely be done by an action in a store like Redux.
					setWards(result.rows)
					setLoadingState(AppState.Loaded)
				},
				(error) => {
					// If an error has occured...
					setLoadingState(AppState.Error)
				}
			)
	}, [])

	if (loadingState === AppState.NotLoaded) {
		return (
			<>
				Loading...
			</>
		)
	}
	else if (loadingState === AppState.Loaded) {
		return (
			<div className="app-container">
				<SummaryPanel />
				<VoterDataPanel />
			</div>
		)
	} 
	else if (loadingState === AppState.Error) {
		return (
			<>
				An error has occured while fetching the data.
			</>
		)
	}
}

export default App

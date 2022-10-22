import { useEffect, useState } from "react";
import useVoterData from "../hooks/useVoterData";
import { IGetVoterDataResponse } from "../interfaces/VoterData";
import SummaryPanel from "./panels/SummaryPanel.component";
import VoterDataPanel from "./panels/VoterDataPanel.component";

export const VOTER_DATA_ENDPOINT_URL: string =
	"https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id"

export enum AppState {
	NotLoaded,
	Loaded,
	Error
}

export const App = () => {
	// Contains current state of app
	const [loadingState, setLoadingState] = useState<AppState>(AppState.NotLoaded);
	const { wards, segments, topSegmentKey, selectedSegment, setSelectedSegment, fetchWardsFromEndpoint } = useVoterData()

	// On app start, load the data from endpoint.
	useEffect(() => {
		fetchWardsFromEndpoint().then((appState: AppState) => {
			console.log(appState)
			setLoadingState(appState)
		})
	}, [])

	if (loadingState === AppState.NotLoaded) {
		return (
			<div className="app-container" data-testid="app-container-notloaded">
				Loading...
			</div>
		)
	}
	else if (loadingState === AppState.Loaded) {
		return (
			<div className="app-container" data-testid="app-container-loaded">
				<div className="header">
					<h1>Voter Statistics</h1><p>by Valentin Sigalov for <em>Relay Network</em></p>
				</div>
				<div className="contents">
					<SummaryPanel
						segments={segments}
						topSegmentKey={topSegmentKey}
						selectedSegment={selectedSegment}
						setSelectedSegment={setSelectedSegment}
					/>
					<VoterDataPanel
						wards={wards}
						segments={segments}
						selectedSegment={selectedSegment}
					/>
				</div>
			</div>
		)
	}
	else if (loadingState === AppState.Error) {
		return (
			<div className="app-container" data-testid="app-container-error">
				An error has occured while fetching the data.
			</div>
		)
	} else {
		return null
	}
}

export default App

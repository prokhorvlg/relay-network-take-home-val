import { mockGetVoterData } from "../data/WardsMockData";
import App from "./App.component";
import { act, render, screen, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock';

describe('App', () => {
	beforeEach(() => {
		// Mocking the endpoint with our false data
		fetchMock.mockResponse(JSON.stringify(mockGetVoterData))
		render(<App />)
	})

	test('displays loading text at start', () => {
		expect(screen.getByTestId("app-container-notloaded")).toBeInTheDocument
	})
	test('displays loaded container after fetch', async () => {
		await act(async () => {
			render(<App />);
		})

		await waitFor(() => {
			expect(screen.getByTestId("app-container-loaded")).toBeInTheDocument
		})
	})
})
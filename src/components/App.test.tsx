import { mockGetVoterData } from "../data/WardsMockData";
import App from "./App.component";
import { act, render, screen, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock';
require('jest-fetch-mock').enableMocks();

describe('App', () => {
	beforeEach(() => {
		// Mocking the endpoint with our false data
		fetchMock.mockResponse(JSON.stringify(mockGetVoterData))
	})

	test('displays loading text at start', () => {
		render(<App />)
		expect(screen.getByTestId("app-container-notloaded")).toBeInTheDocument()
	})
	test('displays loaded container after successful fetch request', async () => {
		await act(async () => {
			render(<App />);
		})

		await waitFor(() => {
			expect(screen.getByTestId("app-container-loaded")).toBeInTheDocument()
		})
	})
	test('displays correct data in window after successful fetch request', async () => {
		await act(async () => {
			render(<App />);
		})

		await waitFor(() => {
			expect(screen.getByTestId("app-container-loaded")).toBeInTheDocument()
			expect(screen.getByText('WD02')).toBeInTheDocument()
			expect(screen.getByText('10')).toBeInTheDocument()
		})
	})
})
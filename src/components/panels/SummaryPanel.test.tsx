import { act, render, screen, waitFor } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock';
import { mockGetVoterData, mockWards } from '../../data/WardsMockData';
import { ISegment } from '../../interfaces/VoterData';
import { getSegmentsFromWards, getTopSegmentFromSegments } from '../helpers/SegmentHelpers';
import SummaryPanel from './SummaryPanel.component';

describe('SummaryPanel', () => {
    let segments: ISegment[]
    let topSegmentKey: string
    beforeAll(() => {
        segments = getSegmentsFromWards(mockWards)
        topSegmentKey = getTopSegmentFromSegments(segments)
    })

    test('displays given top segment data as expected', () => {
        render(<SummaryPanel segments={segments} topSegmentKey={topSegmentKey} />)
        expect(screen.getByTestId("summary-panel")).toHaveTextContent("Male - 74")
        expect(screen.getByTestId("summary-panel")).toHaveTextContent("46.67%")
    })
    test('displays nothing if top segment is undefined', () => {
        render(<SummaryPanel segments={segments} topSegmentKey={undefined} />)
        const summaryPanel = screen.queryByTestId("summary-panel")
        expect(summaryPanel).toBeNull()
    })
})
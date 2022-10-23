import { render, screen } from '@testing-library/react'
import { mockWards } from '../../data/WardsMockData';
import { IDropdownOption, ISegment } from '../../interfaces/VoterData';
import { getSegmentsFromWards } from '../helpers/SegmentHelpers';
import SegmentDropdown from './SegmentDropdown.component';

describe('SegmentDropdown', () => {
    let segments: ISegment[]
    let selectedSegment: IDropdownOption
    const setSelectedSegment = () => { }
    beforeAll(() => {
        segments = getSegmentsFromWards(mockWards)
        selectedSegment = {
            value: segments[1].key,
            label: segments[1].name
        }
    })

    test('displays a list of options', () => {
        render(<SegmentDropdown
            segments={segments}
            selectedSegment={selectedSegment}
            setSelectedSegment={setSelectedSegment}
        />)

        expect(screen.getByText('Republican')).toBeInTheDocument()
    })
    test('displays nothing if setSelectedSegment is undefined', () => {
        render(<SegmentDropdown
            segments={segments}
            selectedSegment={selectedSegment}
            setSelectedSegment={undefined}
        />)

        const dropdown = screen.queryByTestId("segment-dropdown")
        expect(dropdown).toBeNull()
    })
})
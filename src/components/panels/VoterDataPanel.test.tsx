import { render, screen } from '@testing-library/react'
import { baseSegments } from '../../data/BaseSegments';
import { mockWards } from '../../data/WardsMockData';
import { IDropdownOption } from '../../interfaces/VoterData';
import { getSegmentByKey } from '../helpers/SegmentHelpers';
import VoterDataPanel from './VoterDataPanel.component';

describe('VoterDataPanel', () => {
    const wards = mockWards
    const segments = baseSegments
    const selectedSegment: IDropdownOption = {
        value: "female",
        label: "Female"
    }

    beforeAll(() => {
        const relatedSegment = getSegmentByKey(selectedSegment.value, segments)
        if (relatedSegment) {
            relatedSegment.count = 50000
        }
    })

    test('displays a correct header and value', () => {
        render(<VoterDataPanel
            wards={wards}
            segments={segments}
            selectedSegment={selectedSegment}
        />)

        expect(screen.getByText('Female')).toBeInTheDocument()
        expect(screen.getByText('50,000')).toBeInTheDocument()
    })
    test('has the correct number of selected items', () => {
        const { container } = render(<VoterDataPanel
            wards={wards}
            segments={segments}
            selectedSegment={selectedSegment}
        />)

        // The count is 4 from:
        // header, 2 row items in mock data, footer
        expect(container.getElementsByClassName('selected').length).toBe(4)
    })
})
import { render, screen } from '@testing-library/react'
import { ISegment } from '../../interfaces/VoterData';
import SummaryDetails from './SummaryDetails.component';

describe('SummaryDetails', () => {
    const text = "Test Text"
    const segment: ISegment = {
        key: "testKey",
        name: "testText",
        count: 52000,
        percentage: 95.12345
    }
    const selected = true

    test('displays correct percentage value', () => {
        render(<SummaryDetails
            text={text}
            segment={segment}
            selected={selected}
        />)

        expect(screen.getByText('95.12%')).toBeInTheDocument()
    })
    test('displays correct text value', () => {
        render(<SummaryDetails
            text={text}
            segment={segment}
            selected={selected}
        />)

        expect(screen.getByText('testText - 52,000')).toBeInTheDocument()
    })
    test('displays nothing if percentage is not defined', () => {
        segment.percentage = undefined

        render(<SummaryDetails
            text={text}
            segment={segment}
            selected={selected}
        />)

        const element = screen.queryByTestId("summary-details")
        expect(element).toBeNull()
    })
})
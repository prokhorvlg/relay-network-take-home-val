import { IDropdownOption, ISegment } from "../../interfaces/VoterData";
import Select, { SingleValue } from 'react-select';

interface SegmentDropdownProps {
	segments: ISegment[]
	selectedSegment: IDropdownOption | undefined
	setSelectedSegment: Function | undefined
}

const SegmentDropdown = ({ segments, selectedSegment, setSelectedSegment }: SegmentDropdownProps) => {
	if (!setSelectedSegment) return null

	// Generate dropdown options from provided segments.
	const dropdownOptions: IDropdownOption[] = segments.filter((segment) => {
		return !segment.ignoreForDropdown
	}).map((segment) => {
		return {
			value: segment.key,
			label: segment.name
		}
	})

	// Handle change from the selection.
	const handleSelectChange = (option: SingleValue<IDropdownOption>) => {
		setSelectedSegment(option)
	}

	return (
		<div className="dropdown" data-testid="segment-dropdown">
			<Select<IDropdownOption>
				defaultValue={selectedSegment}
				onChange={handleSelectChange}
				options={dropdownOptions}
				isClearable={true}
			/>
		</div>
	)
}

export default SegmentDropdown;

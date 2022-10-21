interface VoterDataHeaderItemProps {
    text: string
}

const VoterDataHeaderItem = ({ text }: VoterDataHeaderItemProps) => {
	return (
		<div className="voter-data-header-item">
			<span>{text}</span>
		</div>
	)
}

export default VoterDataHeaderItem;

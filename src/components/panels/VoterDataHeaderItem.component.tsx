interface VoterDataHeaderItemProps {
    text: string
}

const VoterDataHeaderItem = ({ text }: VoterDataHeaderItemProps) => {
	return (
		<div className="col-element">
			<span>{text}</span>
		</div>
	)
}

export default VoterDataHeaderItem;

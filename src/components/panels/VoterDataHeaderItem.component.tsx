interface VoterDataHeaderItemProps {
    text: string
}

const VoterDataHeaderItem = ({ text }: VoterDataHeaderItemProps) => {
	return (
		<div className="col-element">
			<h3>{text}</h3>
		</div>
	)
}

export default VoterDataHeaderItem;

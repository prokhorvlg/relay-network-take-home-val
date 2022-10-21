interface VoterDataColumnItemProps {
    text: string | number
}

const VoterDataColumnItem = ({ text }: VoterDataColumnItemProps) => {
    return (
        <div className="col-element">
            <p>{text}</p>
        </div>
    )
}

export default VoterDataColumnItem
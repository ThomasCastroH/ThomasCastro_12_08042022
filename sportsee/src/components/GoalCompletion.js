function GoalCompletion(props) {
    let score = props.score;

    return (
        <div className="goal-completion-container">
            <span className="goal-completion-container-title">{score*100}% de l'objectifs</span>
        </div>
    )
}

export default GoalCompletion;
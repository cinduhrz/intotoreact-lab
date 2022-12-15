function SentimentAnalysis(props){
    return (<>
        <div className="sentiment-analysis top-section">
            <p className="section-heading">Sentiment Analysis</p>
            <div className="sentiment-analysis-nums-container" >
                <h3 className="small-num">{props.num1}</h3>
                <h3 className="small-num">{props.num2}</h3>
                <h3 className="small-num">{props.num3}</h3>
            </div>
        </div>
    </>)
}



// export component
export default SentimentAnalysis
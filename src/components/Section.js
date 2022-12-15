function Section(props){
    return (<>
        <div className={`${props.sectionClass} topSection`}>
            <p>{props.sectionTitle}</p>
            <h1 className="big-num">Number</h1>
        </div>
    </>)
}



// export component
export default Section
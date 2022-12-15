function Section(props){
    return (<>
        <div className={`${props.sectionClass} topSection`}>
            <p>{props.sectionTitle}</p>
            <h1>Number</h1>
        </div>
    </>)
}



// export component
export default Section
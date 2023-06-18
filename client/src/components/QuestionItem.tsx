import React from "react"
import data from "../common/data/data.json"

function QuestionItem() {
    return (
        <div>{data[0].title}</div>
    )
}

export default QuestionItem;
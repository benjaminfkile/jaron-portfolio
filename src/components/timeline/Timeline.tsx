import { FunctionComponent } from "react"
import TimelineItem from "./TimelineItem"
import TimelineItemTypes from "../../types/TimelineItemTypes"

interface Props {
    timelineItems: TimelineItemTypes[]
}

const Timeline: FunctionComponent<Props> = (props) => {

    const { timelineItems } = props

    return (
        <ul className="timeline">
            {timelineItems.map((item, i) =>
                <li key={i}>
                    <TimelineItem
                        date={item.date_range}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                        index={i}
                    />
                </li>)}
        </ul>
    )
}

export default Timeline
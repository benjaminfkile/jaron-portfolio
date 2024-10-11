import PortfolioItemTypes from "./PortfolioItemTypes"
import SkillItemTypes from "./SkillItemTypes"
import TimelineItemTypes from "./TimelineItemTypes"

type ContentResponseTypes = {
        about: string
        portfolioItems: PortfolioItemTypes[]
        skillItems: SkillItemTypes[]
        timelineItems: TimelineItemTypes[]
}

export default ContentResponseTypes
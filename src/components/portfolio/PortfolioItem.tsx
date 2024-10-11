import { FunctionComponent } from "react"
import PortfolioItemTypes from "../../types/PortfolioItemTypes"
import "./PortfolioItem.css"

interface PortfolioItemProps {
    index: number
    portfolioItem: PortfolioItemTypes
}

const PortfolioItem: FunctionComponent<PortfolioItemProps> = (props) => {

    const { index, portfolioItem } = props

    return (
        <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href={`#portfolioModal${index}`}>
                    <img crossOrigin="anonymous" alt="..." src={`${process.env.REACT_APP_API_URL}/api/media?key=images/${portfolioItem.file_name}`} />
                </a>
            <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{portfolioItem.title}</div>
            </div>
        </div>
    )
}

export default PortfolioItem
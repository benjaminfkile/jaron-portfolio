import { FunctionComponent } from "react"
import PortfolioItemTypes from "../../types/PortfolioItemTypes"
import "./PortfolioItem.css"

interface Props {
    index: number
    portfolioItem: PortfolioItemTypes
}

const PortfolioItemModal: FunctionComponent<Props> = (props) => {

    const { index, portfolioItem } = props

    return (
        <div className="portfolio-modal modal fade" id={`portfolioModal${index}`} tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content portfolio-modal-content">
                    <div className="close-modal" data-bs-dismiss="modal">
                        <span className="material-icons-outlined">close</span>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <div className="portfolio-item-modal-tech">
                                        {portfolioItem.icon_sources.map((iconSource: string, i) =>
                                            <img key={i} src={iconSource} alt="..." />
                                        )}
                                    </div>
                                    <h2 className="text-uppercase portfolio-modal-title">{portfolioItem.title}</h2>
                                    <p className="item-intro text-muted portfolio-modal-title-p">{portfolioItem.intro}</p>
                                    <img crossOrigin="anonymous" alt="..." src={`${process.env.REACT_APP_API_URL}/api/media?key=images/${portfolioItem.file_name}`} />
                                    <p>{portfolioItem.description}</p>
                                    {portfolioItem.repo && <div className="portfolio-link-item">
                                        <a href={portfolioItem.repo} target="_blank" rel="noreferrer">Check out the repo</a>
                                    </div>}
                                    {portfolioItem.url && <div className="portfolio-link-item">
                                        <a href={portfolioItem.url} target="_blank" rel="noreferrer">Visit</a>
                                    </div>}
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItemModal
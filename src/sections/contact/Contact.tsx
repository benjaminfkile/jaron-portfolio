import { FunctionComponent } from "react"


const Contact: FunctionComponent<{}> = () => {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Me</h2>
                    <h4><a href="tel:2105592641">210-559-2641</a></h4>
                    <h4><a href="mailto:benjaminfkile@gmail.com">djaron.garcia@gmail.com</a></h4>
                </div>
            </div>
        </section>
    )
}

export default Contact
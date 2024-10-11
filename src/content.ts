import ContentTypes from "./types/ContentResponseTypes"

const content: ContentTypes = {
    about: "Welcome to my portfolio! I'm Dito Jaron-Michael Garcia, known as “Jaron,” an experienced technician and entrepreneur transitioning from the beauty industry into aerospace and mechanical engineering. With a Bachelor of Science in Manufacturing Engineering and hands-on experience in aerospace assembly, I have a strong foundation in precision engineering, machining, and technical sharpening. My expertise spans from CNC machining to advanced soldering techniques, and I am driven by a passion for innovation and quality. I'm excited to leverage my skills in engineering design and manufacturing, while continually seeking new opportunities to grow and contribute to cutting-edge projects.",
    portfolioItems: [

    ],
    skillItems: [
        {
            title: "AutoCAD",
            description: "I have extensive experience using AutoCAD to design and create detailed technical drawings for various engineering projects. My proficiency in applying GD&T principles within AutoCAD ensures that my designs meet precise specifications and industry standards. I have used AutoCAD to collaborate with teams on complex assemblies, translating ideas into clear, functional blueprints for manufacturing and aerospace components.",
            proficiency: 0,
            order: 1,
            icon_source: "https://jaron-portfolio-bucket.s3.amazonaws.com/autocad-logo.png"
        },
        {
            title: "GD&T",
            description: "I have significant experience applying GD&T (Geometric Dimensioning and Tolerancing) principles to ensure precise and accurate engineering designs. By utilizing GD&T in my work, I have been able to define exact tolerances and relationships between components, improving both the quality and manufacturability of parts. This knowledge has allowed me to collaborate with teams to minimize errors in production and ensure that all components meet industry standards for functionality and precision.",
            proficiency: 0,
            order: 1,
            icon_source: "https://jaron-portfolio-bucket.s3.amazonaws.com/gdt-logo.webp"
        },
        {
            title: "DFM/DFA",
            description: "I have extensive experience applying DFM (Design for Manufacturing) and DFA (Design for Assembly) principles to optimize designs for efficient production and assembly. By incorporating these methodologies, I ensure that parts are not only easy to manufacture but also streamlined for assembly, reducing costs and minimizing production time. My understanding of DFM/DFA has allowed me to work closely with manufacturing teams, identifying potential issues early in the design phase and making adjustments to improve overall efficiency and product quality.",
            proficiency: 0,
            order: 1,
            icon_source: "https://jaron-portfolio-bucket.s3.amazonaws.com/dfm-dfa-logo.webp"
        },
        {
            title: "Metallurgy",
            description: "I have a strong foundation in metallurgy, with extensive experience in executing precision finishing techniques such as hollow and surface grinding, flat honing, and chemical polishing. I am skilled in sandblasting and heat treatment processes to achieve the desired material properties while ensuring efficient production. My ability to operate CNC machinery and sharpening equipment has been essential in maintaining production flow and ensuring high-quality results in demanding environments.",
            proficiency: 0,
            order: 1,
            icon_source: "https://jaron-portfolio-bucket.s3.amazonaws.com/metallurgy-logo.webp"
        },
        {
            title: "Circuitry/Arduino",
            description: "I have hands-on experience working with electrical circuitry and Arduino programming, using both to design and prototype various electronic systems. My projects have involved controlling HVAC systems, fusion splicing, and fiber optics, allowing me to apply my knowledge of sensors, wiring, and embedded programming. This expertise has enabled me to create efficient and reliable circuits for a wide range of applications, from automation to custom hardware solutions.",
            proficiency: 0,
            order: 1,
            icon_source: "https://jaron-portfolio-bucket.s3.amazonaws.com/circuitry-arduino-logo.webp"
        },
    ],
    timelineItems: [
        {
            date_range: "2010-2014",
            title: "Northwest Vista College",
            description: "During my Associate of Science in Mechanical Engineering from Northwest Vista College, I gained a strong understanding of core engineering principles like mechanics, thermodynamics, and material science. I honed my problem-solving skills and applied technical knowledge to real-world scenarios, working with tools such as AutoCAD and SolidWorks. This experience has given me the ability to design, analyze, and optimize mechanical systems for a wide range of engineering applications.",
            imgUrl: "https://jaron-portfolio-bucket.s3.amazonaws.com/timeline-item-1.webp",
            order: 1
        },
        {
            date_range: "Currently attending",
            title: "Texas State University",
            description: "Pursuing a Bachelor of Science in Manufacturing Engineering at Texas State University, where I'm deepening my knowledge of engineering design, production processes, and advanced manufacturing technologies. This program is enhancing my skills in CAD software, materials science, and systems optimization, with a focus on preparing for a career in mechanical and aerospace engineering. Currently progressing toward graduation, I am actively applying what I learn to real-world engineering challenges.",
            imgUrl: "https://jaron-portfolio-bucket.s3.amazonaws.com/timeline-item-2.webp",
            order: 2
        },
        {
            date_range: "2015+",
            title: "The Silver Lining Shear Company",
            description: "As the Owner and Operator of The Silver Lining Shear Company, I provide mobile repair and maintenance services for high-quality shears, serving stylists, barbers, and dog groomers. Utilizing water-cooled, high-speed machinery and applying advanced techniques such as precision grinding and polishing, I restore up to 80% of the operational lifespan of shears previously deemed unusable. I work with durable materials like cobalt, molybdenum, and vanadium alloys, ensuring cutting efficiency and heat dissipation. Through rigorous quality control, I maintain sharpness, balance, and craftsmanship, which has led to a 20% increase in shear sales. In 2023, I grew the business by 40% through direct marketing and face-to-face sales, fostering strong relationships with industry partners and clients.",
            imgUrl: "https://jaron-portfolio-bucket.s3.amazonaws.com/timeline-item-3.webp",
            order: 3
        },
        {
            date_range: "8/23 - 12/23",
            title: "Primus Aerospace",
            description: "I have extensive experience assembling complex aluminum aerospace components, including booster covers, detonator housings, Javelin bodies, and Boeing heat sinks, using precise tooling and technical drawings. By managing a second shift and operating HAAS and MAZAK CNC machines, I boosted assembly lab output by 35% and collaborated with engineering to improve the assembly rate by 5%. Additionally, my expertise in applying epoxy adhesives and soldering electrical components contributed to a 99% product pass rate and a 75% reduction in rework due to soldering defects.",
            imgUrl: "https://jaron-portfolio-bucket.s3.amazonaws.com/timeline-item-4.webp",
            order: 3
        },
    ]
}

export default content
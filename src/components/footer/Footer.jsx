import "./footer.scss"


const Footer = () => {
        const myMail = "imsameer76@gmail.com";
        const subject = "Enthusiastic Developer Ready for New Opportunities";
        const openMailTo = () => {
            const mailtoLink =`mailto:${myMail}?subject=${encodeURIComponent(subject)}`;
            window.location.href = mailtoLink;
        };
    return (
        
        <div className="footer">
            <div className="topfooter">
                <div className="topleft">
                    <h1>Have something in mind?<br />let’s build it together.</h1>
                    <button onClick={() => window.location.href = "https://www.linkedin.com/in/sameer-hussain16/"}>Let's Connect</button>
                </div>
                <div className="topright">
                    <p>2023 ©        All Rights Reserved</p>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/sameer-hussain16/">LinkedIn</a>
                        <a href="https://github.com/Sameer-Hussain16">Github</a>
                        <a href="">Twitter</a>
                        <a onClick={openMailTo} style={{ cursor: 'pointer' }}>Gmail</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
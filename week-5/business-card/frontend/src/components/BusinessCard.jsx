/* eslint-disable react/prop-types */

export function BusinessCard({ name, description, interests, socialMediaLinks }) {
    const cardStyle = {
        "margin": '10px',
        "padding": '0px 50px 50px 20px',
        "background-color": "white",
        "border": "1px solid #ddd",
        "box-shadow": "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)",
        'min-width': '30%',
        "width": 'fit-content',
        "max-width": "30%"
    }

    const socialMediaLinkStyle = {
        "font-size": "18px",
        "color": "white",
        "background-color": "#007bff",
        "text-decoration": "none",
        "padding": "10px",
        "margin": "10px",
        "border-radius": "10px"
    }

    return (
        <div style={cardStyle}>
            <h1>{name}</h1>
            <span style={{ "word-wrap": "break-word" }}>{description}</span>
            <h2>Interests</h2>
            {
                interests.map((interest) => (
                    <>
                        <p>{interest}</p>
                    </>
                ))
            }
            <h2>Social Media</h2>
            {
                socialMediaLinks.map((socialMedia) => (
                    <>
                        <a style={socialMediaLinkStyle} href={socialMedia.link} target="_blank" key={socialMedia.index}>{socialMedia.category}</a>
                    </>
                ))
            }
        </div >
    )
}
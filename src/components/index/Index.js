import React from "react";
import profPic from "./fenix.jpg";

function Card() {
    return (
        <div className="row">
            <h2>About Me</h2>

            <div className="d-inline-flex">
                <p className="conBorder">
                    <img id="profPic" className="float-left" src={profPic} />
            &nbsp;&nbsp;I am first and foremost a believer in God and I strive
            to live my life based upon His Holy Word. I wish to grow every day,
            learning from those who have paved the ways before me so that I may
            surpass them, carry their teaching with me, and pass them on to all
            who are willing to listen. I understand every moment is another in
            which I can continue to learn and grow in order that I may reach my
            goals in life. As a man of God, I dream of building a business from
            the ground up and expanding my reach to impact the world around me
            as a force of good. I plan to use the gifts He has given me to
            strengthen schools and communities, to supply the needy with a
            chance to pick themselves up and out of poverty, and live as an
            example of “a man after God’s own heart”. I strive for excellence in
            all I do, whether in word or deed, as I work to bring glory to God.
            (Colossians 3:17, 23)
            <br />
                </p>
            </div>
            <br />
            <table className="table table-sm">
                <tr>
                    <thead colspan="2" className="thead-dark font-weight-bold">
                        Links
            </thead>
                </tr>
                <tr>
                    <td>Linkedin:</td>
                    <td>
                        <a href="https://www.linkedin.com/in/jamison-stramer-8744321a1/"
                        >Jamison Stramer</a
                        >
                    </td>
                </tr>
                <tr>
                    <td>GitHub Repo:</td>
                    <td><a href="https://github.com/R1senFenix">R1senFenix</a></td>
                </tr>
                <tr>
                    <td>My Email:</td>
                    <td><a href="mailto:jjstram@gmail.com">jjstram@gmail.com</a></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td><a href="tel:763-567-9397">(763) 567-9397</a></td>
                </tr>
                <tr>
                    <td>Resume:</td>
                    <td>
                        <a href="assets/PDF/J_Stramer_Resume.pdf" target="blank"
                        >Jamison Stramer</a
                        >
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Card;
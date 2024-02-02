import { useState } from "react";
function Card({ id, image, info, price, name, removeTour }) {
    const [readmode, setReadmode] = useState(false);

    function readmoreHandler() {
        setReadmode(!readmode);
    };


    // const description = `${info.substring(0, 200)}...`;
    const description = readmode ? info : `${info.substring(0, 200)}...`;

    return (

        <div className="card">
            <img src={image} className="image" alt=""></img>
            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                    <div className="description">
                        {description}
                        <span className="read-more" onClick={readmoreHandler} >
                            {readmode ? 'show less' : 'Read More'}
                        </span>
                    </div>

                </div>


                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>

    );

}
export default Card;

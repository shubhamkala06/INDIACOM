import { Link } from "react-router-dom";

const News = (l)=>{
    return (
        <div className="newsContainer">
            <p>
                <Link>
                    {l?.["content"]}
                </Link>
                <span className="division"></span>
            </p>
        </div>
    );
};

export default News;
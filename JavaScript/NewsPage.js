import { Link } from "react-router-dom";
import { news } from "./DataNews";

const NewsPage = ()=>{
    return (
        <div className="newsPageContainer">
            <h1>Latest News</h1>
            <div>
                <div className="newsPageSno">
                    <div>S. No.</div>
                    {news.map((n)=>(
                        <div key={n.id}>{n.id}</div>
                    ))}
                </div>
                <div className="newsPageContent">
                    <div>Headlines</div>
                    {news.map((n)=>(
                        <Link key={n.id+news.length}>{n.content}</Link>
                    ))}
                </div>
                <div className="newsPageDates">
                    <div>News Date</div>
                    {news.map((n)=>(
                        <div key={n.id+2*news.length}>{n.date}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage
import React,{useState} from 'react'
import Article_img from "../assets/img/article_img.png"
import classes from "../assets/img/classes.png"
import webinair from "../assets/img/webinair.png"
import { FaSearch } from 'react-icons/fa';

article = {
  name:'Nail art secrets and new technique ',
  isTopRated:true,
  isClasses: true,
  isWebinair: true,
}

function HomePageArticle() {
  [article,setArticle] = useState(article)
  return (
     <div className="article-section"
    style={{ backgroundImage: `url(${Article_img})` }}>
      <div className="article-padding"></div>
      <div className="article-descrition">
        <div className="article-name">{article.name}</div>
        <div className="article-features">
                {console.log(article.isTopRated == true)}
                { article.isTopRated == true? (<div className="btn-look">Top rated 2020</div>):('')}
                <div className="feature"><img className="classes" alt="classes" src={classes} />{ article.isClasses == true && (<span>Classes</span>)}</div>
                <div className="feature"><img className="webinair" alt="webinair" src={webinair} />{ article.isWebinair == true && (<span>Webinair</span>)}</div>
      </div>
      </div>

    </div>
  )
}

export default HomePageArticle
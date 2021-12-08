
import { useParams } from "react-router";


const Article = () => {

    const {id}=useParams()
    return ( <h2>Article - {id}</h2> );
}
 
export default Article;
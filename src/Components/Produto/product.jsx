import { useParams } from "react-router-dom";
import list,{ getPost } from "../../data";
import Cards from "../card";
export default function Product({ handleClick}) {
  let params = useParams();
  let post = getPost(parseInt(params.Id, 10));
  const categorie= post.categories;
  return (
    <>
    <div className="containerD">
      <div className="imageselection">
        <img src={post.img} />
      </div>
      <div className="productDetails">
        <div className="details">
          <h2>{post.author}</h2>
          <h3>{post.price}</h3>
          <h2>{post.title}</h2>
        </div>
        <div className="button">
          <button>Select</button>
        </div>
      </div>
    </div>
    <div>
    {list.filter(item => item.categories.includes(categorie)).map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} value={categorie}/>
        ))}
    </div>
    </>
  );
}
//apresentou erro
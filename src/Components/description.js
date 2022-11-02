import { Link } from "react-router-dom";
import { getPosts } from "../data";

export default function Content() {
  let list = getPosts();
  return (
    <div id="mainContainer">
      <div id="containerClothing">
        {list.map((post) => {
          return (
            <section>
              <Link key={post.id} to={`/Product/${post.id}`}>
                <div id="box">
                  <img src={post.img} alt="" />
                  <div id="details">
                    <h3>{post.title}</h3>
                    <h3>{post.price}</h3>
                  </div>
                </div>
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
}

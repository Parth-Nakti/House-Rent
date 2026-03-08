import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  // Previous categories UI (kept for reference)
  // return (
  //   <div className="categories">
  //     <h1>Explore Top Categories</h1>
  //     <p>
  //       Explore our wide range of vacation rentals that cater to all types of
  //       travelers. Immerse yourself in the local culture, enjoy the comforts of
  //       home, and create unforgettable memories in your dream destination.
  //     </p>
  //
  //     <div className="categories_list">
  //       {categories?.slice(1, 7).map((category, index) => (
  //         <Link to={`/properties/category/${category.label}`}>
  //           <div className="category" key={index}>
  //             <img src={category.img} alt={category.label} />
  //             <div className="overlay"></div>
  //             <div className="category_text">
  //               <div className="category_text_icon">{category.icon}</div>
  //               <p>{category.label}</p>
  //             </div>
  //           </div>
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <section className="categories">
      <div className="categories_header">
        <h1>Stay types for every trip</h1>
        <p>
          Browse by category to quickly find beachfront escapes, urban lofts,
          countryside retreats, and more curated stays.
        </p>
      </div>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`} key={index}>
            <div className="category">
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;

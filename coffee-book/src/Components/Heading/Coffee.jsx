const Coffee = ({ data }) => {
     const {image,category,name,origin,popularity,rating}=data
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img className="h-72  w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> Name : {name}</h2>
        <p>Category : {category}</p>
        <p>0rigin : {origin}</p>
        <p>Popularity : {popularity}</p>
        <p>Rating {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn ">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;

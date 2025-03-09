const Book = (props) => {
  const { img, title, author, number } = props;
  // console.log(props);
  return (
    <article className='book'>
      <span className="number">{`# ${number + 1}`}</span>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;

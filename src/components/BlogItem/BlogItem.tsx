import './BlogItem.css';
const BlogItem = ({ blog }: any) => {
  const { image, type, title, description, comments, date } = blog;
  return (
    <div className="blog-item">
      <div className="blog-image"><img src={image} alt="" /></div>
      <div className="blog-information">
        <div className="blog-type">{type}</div>
        <div className="blog-title">{title}</div>
        <div className="blog-description">{description}</div>
        <div className="blog-foot">
          <div className="blog-comment">{comments} comments</div>
          <div className="blog-date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

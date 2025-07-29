import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { author, reading_time , cover ,title ,posted_date ,hashtags } = blog;
    return (
        <div>
            <img  src={cover}></img>
            <div className= 'flex justify-between '>
                <div className='ml-6'> 
                   <h3 className="text-2xl">{author}</h3>
                   <p>{posted_date}</p>
                </div>
                <div>
                  <span>{reading_time} mins read </span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                { hashtags.map(hash=>( <span>
                    <a href=""> #{hash}</a>
                </span>))
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;

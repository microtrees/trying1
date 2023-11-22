import App from"../../App.css"
import "./Post.css"
export default Post =(props)  => {

return(
    <div className="post-card">
    <h2 className="post-title">{props.title}</h2>
    <p className="post-body">{props.price}$</p>
    <button 
        className="btn-delete" 
        onClick={() => props.deletePost(props.id)}
    >Delete</button>
  
</div>
)
}
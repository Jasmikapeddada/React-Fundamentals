function blogPost(post){

    const postStyle = {
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9"
    } 

    return (
        <div style={postStyle}>
            <p><b>Key: </b> {post.key}</p>
            <p><b>Author:</b> {post.author}</p>
            <p><b>Title:</b> {post.title}</p>
            <p><b>Description:</b> {post.description}</p>
        </div>
    )
}

export default blogPost
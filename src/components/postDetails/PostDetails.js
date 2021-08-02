import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../../redux/postAction';
import { Button, Card } from 'react-bootstrap';
import { FaRegComments } from 'react-icons/fa';
import '../postDetails/postDetails.css';
import Comments from '../comments/Comments';


function PostDetails({ fetchPost, postData }) {
    console.log(postData);
    const { id } = useParams();
    useEffect(() => {
        fetchPost(id);
    }, [])


    const { post, error, loading } = postData;

    const [showComments, setShowComments] = useState(false)

    const showCommentsHandler = () => {
        setShowComments(!showComments)
    }

    return (
        <div className="post_details_container">
            {
                loading ? (<h5>Loading...</h5>) : (error) ? (<h5>{error}</h5>) : (
                    <Card >
                        <Card.Header>{post.title}</Card.Header>
                        <Card.Body >
                            <Card>
                                <Card.Body>
                                    {post.body}
                                </Card.Body>
                            </Card>
                            <hr />
                            <Button variant="light" onClick={showCommentsHandler}>
                                Show Comments <FaRegComments />
                            </Button>
                            {
                                (showComments === true) ? (<Comments id={id} showComments={showComments} />) : (<span></span>)
                            }
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        postData: state.post
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (id) => dispatch(fetchPost(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)

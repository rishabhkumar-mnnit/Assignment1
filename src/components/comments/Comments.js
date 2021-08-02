import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchComment } from '../../redux/commentAction';
import './comments.css';

function Comments({ postComments, fetchComment, id, showComments }) {
    console.log(postComments);
    useEffect(() => {
        fetchComment(id)
    }, [showComments]);
    return (
        <Card>
            <Card.Body>
                <div>
                    {
                        (postComments.loading) ? (<h5>Loading Comments...</h5>) :
                            (postComments.error) ? (<h5>{postComments.error}</h5>) :
                                (
                                    postComments.postComments.map((val, index) => {
                                        return (
                                            <div key={val.id}>
                                                <div className="comment_section">
                                                    <div className="thumbnail_container">
                                                        <div className="thumbnail"></div>
                                                    </div>
                                                    <div className="comment_container">
                                                        <div>
                                                            <span><strong>{val.name} </strong></span>
                                                        </div>
                                                        <div>
                                                            <p>Username{' '}{val.body} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (props) => {
    return {
        postComments: props.postComments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComment: (id) => dispatch(fetchComment(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../../redux';
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../postList/postList.css';


function PostList({ postListData, fetchPostList }) {
    useEffect(() => {
        fetchPostList()
    }, [])
    console.log(postListData.postList);
    const { postList, error, loading } = postListData;
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <Container>
            <div className="search_box_container">
                <input type="text" className="search_box" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div>
                {
                    (loading) ? (<h5>Loading...</h5>) :(error) ? (<h5>error</h5>) :
                    (postList.filter((val) => {
                        if (searchTerm === "") {
                            return val;
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map((val, index) => {
                        return (
                            <div key={val.id} className="post_container" >
                                <Link to={`/Assignment1/posts/${val.id}`} className="link_style" >
                                    <Card>
                                        <Card.Header ><strong>{val.title}</strong></Card.Header>
                                        <Card.Body >
                                            <span>{val.body}</span>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        )
                    }))
                }
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        postListData: state.postList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostList: () => dispatch(fetchPostList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList)

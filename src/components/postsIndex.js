import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    onPostClick(id) {
        this.props.history.push(`/posts/${id}`);
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            const link=`/posts/${post.id}`;
            return (
                <li onClick={() => this.onPostClick(post.id)} key={post.id} className="list-group-item">
                    {post.title}
                </li>
            )
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul classNamae="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
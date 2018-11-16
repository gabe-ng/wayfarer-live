import axios from 'axios';

class PostModel {
    static getPosts(city) {
        let url = "http://localhost:3001/api/posts/" + city
        let request = axios.get(url);
        
        console.log("City posts request: ", request);
        return request;
    }

    static showPost(id) {
        let url = "http://localhost:3001/api/posts/post/" + id;
        let request = axios.get(url);
        console.log(request, "YEET");
        console.log(id);

        return request;
    }

    static addPost(title, body, city, username) {
        let url = "http://localhost:3001/api/posts/create";
        let request = axios.post(url, {
            username: username,
            title: title,
            body: body,
            city: city,
        });
        
        return request;
    }

    static updatePost(id, title, body) {
        let url = "http://localhost:3001/api/posts/update/" + id;
        let request = axios.put(url, {
            title: title,
            body: body,
        })

        return request;
    }

    static deletePost(username, postId) {
        let url = "http://localhost:3001/api/posts/delete";
        let request = axios.delete(url, {
            data: {
                username: username,
                postId: postId
            }
        })
        return request;
    }
}

export default PostModel;
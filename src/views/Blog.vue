<template>
    <div class="blog">
        <h1>Blog Page</h1>
        <div v-for="post in posts" :key="post.id" class="blog-post">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
                { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
                // Add more posts here
            ]
        };
    }
};
</script>

<style scoped>
.blog {
    padding: 20px;
}

.blog-post {
    margin-bottom: 20px;
}

.blog-post h2 {
    margin: 0;
    font-size: 24px;
}

.blog-post p {
    font-size: 16px;
}
</style>
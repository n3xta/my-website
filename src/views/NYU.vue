<template>
    <div>
        <h1>NYU School Files</h1>
        <p>Here you can find some of my school files hosted.</p>
        <!-- Add your HTML files in the public folder and link them here -->
        <ul>
            <li><a href="/public/file1.html" target="_blank">File 1</a></li>
            <li><a href="/public/file2.html" target="_blank">File 2</a></li>
            <li><a href="/public/file3.html" target="_blank">File 3</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NYU'
}
</script>

<style scoped>
h1 {
    color: #333;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 10px 0;
}
a {
    color: #007bff;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
</style>
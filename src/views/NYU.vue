<template>
    <div>
        <h1>NYU School Files</h1>
        <p>Here you can find some of my school files hosted.</p>
        <!-- Add your HTML files in the public folder and link them here -->
        <ul>
            <li><a href="/241125_detailed_proposal.html" target="_blank">Creative Computing Final Proposal</a></li>
            <li><a href="/hypercinema_final_project_proposal.html" target="_blank">Hypercinema Final Proposal</a></li>
            <li><a href="/Chance_Me_Documentation.html" target="_blank">"Chance Me" Documentation</a></li>
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
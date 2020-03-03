let data;

function start() {
    data = fetchPosts = () => {
        console.log('fetchPosts()');
        fetch(`https://s3.amazonaws.com/technical-test/scientists.txt`, {method: 'GET'})
            // .then(response => response.json())
            .then(string_res => JSON.parse(string_res))
            .then(carousel(0))
            .catch(err => console.log(err));
    };
}

function carousel(index) {
    document.getElementById('name').innerHTML = data[index].name;
    document.getElementById('date_of_birth').innerHTML  = data[index].date_of_birth;
    setTimeout(carousel(index+1), 5000)
}
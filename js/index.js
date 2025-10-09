async function getUser() {
    const response = await fetch("https://api.github.com/users/cesarve-dev/repos");
    try {
        if (!response.ok) {
            throw new Error(response.status);
        } 

        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name)
        }
     } catch (error) {
        console.error('new error:', error);
    }    
}

getUser();
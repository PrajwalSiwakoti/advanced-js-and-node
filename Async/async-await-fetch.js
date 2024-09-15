const API_URL = 'https://api.github.com/users/PrajwalSiwakoti';

async function handlePromise() {

    try{
        const data = await fetch(API_URL);

        const dataJson = await data.json();

        console.log(dataJson);

    }catch(err){
        console.error(err);
    }
    
}

handlePromise();
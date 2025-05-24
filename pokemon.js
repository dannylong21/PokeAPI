

function playMusic(){
    let audio2 = document.getElementById('backgroundmusic');
    audio2.src = './1-18. Battle! (Wild Pokémon).mp3'
    audio2.play();
}

playMusic()



async function searchIt(){
    let textval = document.getElementById('searchbar').value;
    let pokemon = document.getElementById('pokename');
    let errorwin = document.getElementById('errorwindow');
    let pokeimage = document.getElementById('pokeimg');
    let ability = document.getElementById('abilitiestxt');
    let moves = document.getElementById('movestxt');
    let successaudio = document.getElementById('success');
    let failaudio = document.getElementById('error');
    try{
        const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${textval}`);
        if(!API.ok){
            throw new Error('Could not fetch resource!')
        }
        const data =  await API.json();
        console.log(data);
        pokemon.innerHTML = textval.toUpperCase();
        successaudio.play()
        pokemon.removeAttribute('hidden');
        pokeimage.removeAttribute('hidden');
        errorwin.setAttribute('hidden', true);
        pokeimage.src = data.sprites.front_default;
        ability.innerHTML = `Abilities: ${data.abilities[0].ability.name}`
        moves.innerHTML = `Moves:${data.moves[0].move.name}`
        audio.src = data.cries.latest;
        audio.play()
        console.log(`${textval} was successfully retrieved`)
    }
    catch(error){
        failaudio.play()
        errorwin.textContent = `Error: Unable to find ${textval}`
        console.log(`${textval} was not retrieved! Try Again!`,error);
        errorwin.removeAttribute('hidden');
        pokemon.setAttribute('hidden', true);
        pokeimage.setAttribute('hidden', true);
        audio.setAttribute('hidden', true)



    }
}


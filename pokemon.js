
/* BACKGROUND MUSIC BEGINS HERE */
function playMusic(){
    let audio2 = document.getElementById('backgroundmusic');
    audio2.src = './1-18. Battle! (Wild Pokémon).mp3'
    audio2.play();
}
playMusic()
/*-- END BACKGROUND MUSIC FUNCTION HERE */

/*-- VARIABLES DEFINED FOR ASYNC FUNCTION --*/
    
    let pokemon = document.getElementById('pokename');
    let errorwin = document.getElementById('errorwindow');
    let pokeimage = document.getElementById('pokeimg');
    let ability = document.getElementById('abilitiestxt');
    let moves = document.getElementById('movestxt');
    let successaudio = document.getElementById('success');
    let failaudio = document.getElementById('error');

/*-- END VARIABLES SECTION --*/

/*-- START FUNCTION AREA --*/
    async function searchIt(){
     /* This variable was required to be inside of the function */
         let textval = document.getElementById('searchbar').value;
    try{
        
        const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${textval}`);
        if(!API.ok){
            throw new Error('Could not fetch resource!')
        }
        const data =  await API.json();

        /*-- API SUCCESS CODE, (ALLOWS ALL HIDDEN OBJECTS TO BECOME VISIBLE)--*/
        successaudio.play();
        pokemon.innerHTML = textval.toUpperCase();
        pokemon.removeAttribute('hidden');
        pokeimage.removeAttribute('hidden');
        audio.removeAttribute('hidden');
        moves.removeAttribute('hidden')
        errorwin.setAttribute('hidden', true);

        /*-- Displays information to card about pokemon searched --*/
        pokeimage.src = data.sprites.front_default;
        ability.innerHTML = `Abilities: ${data.abilities[0].ability.name}`
        moves.innerHTML = `Moves:${data.moves[0].move.name}`
        console.log(`${textval} was successfully retrieved`)
        audio.src = data.cries.latest;
        audio.play()
    }
    catch(error){
        /*-- Plays audio and console handles the error --*/
        failaudio.play()
        errorwin.textContent = `Error: Unable to find ${textval}`
        console.log(`${textval} was not retrieved! Try Again!`,error);
        /*-- Error section that hides all other components except for error window --*/
        errorwin.removeAttribute('hidden');
        pokemon.setAttribute('hidden', true);
        pokeimage.setAttribute('hidden', true);
        moves.setAttribute('hidden', true)
        audio.setAttribute('hidden', true);



    }
}

async function abilityjs(){
    try{
        let textval = document.getElementById('searchbar').value;
        const API2 = await fetch(`https://pokeapi.co/api/v2/ability/${textval}`);
        
        if(!API2.ok){
            throw new Error(`Could not retrieve pokemon`);
        }
        const API2data = await API2.json();
        console.log(API2data.name)
    
    }catch(error){
        console.log(error)
    }

}
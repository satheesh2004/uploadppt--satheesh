
async function FetchTeamName() {
    const email = document.getElementById('email').value;
    const nameField = document.getElementById('name');
    const teamNameContainer = document.getElementById('team-name-container');
    const submitbutton = document.querySelector('.sub');

    try {
        const response = await fetch('https://mzcet.in/techquest23/api/returnfile.php');
        const data = await response.json();
        
        const team = data.find(item => item.Email === email);
        
        if (team) {
            nameField.value = team.TeamName;
            teamNameContainer.style.display = 'block';
            submitbutton.style.display = 'block';
        } else {
            nameField.value = '';
            teamNameContainer.style.display = 'none';
            alert("Please enter a valid email.");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default FetchTeamName;
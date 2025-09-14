console.log("✅ index.js is loaded");

fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(data => {
    const ul = document.getElementById('list');
    const details = document.getElementById('details');

    data.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c.name;

      // When you click a name, show details
      li.addEventListener('click', () => {
        let currentVotes = c.votes;

        details.innerHTML = `
          <h3>${c.name}</h3>
          <img src="${c.image}" alt="${c.name}" style="max-width:200px; display:block;">
          <p id="vote-count">Votes: ${currentVotes}</p>
          <button id="vote-btn">Vote</button>
        `;

        // creating the vote button
        const voteBtn = document.getElementById('vote-btn');
        const voteCount = document.getElementById('vote-count');

        voteBtn.addEventListener('click', () => {
          currentVotes++;
          voteCount.textContent = `Votes: ${currentVotes}`;
        });
      });

      ul.appendChild(li);
    });
  })
  .catch(error => console.error(error));
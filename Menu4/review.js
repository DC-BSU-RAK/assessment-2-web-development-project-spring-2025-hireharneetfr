const reviews = [ // all the reviews for the game
  `"The graphics are stunning, the sound effects are perfectly executed, and the overall experience is just phenomenal. I encountered only one minor bug on Shadows of Evil, but it didn’t affect the gameplay at all – it’s still 100% playable.
The campaign mission pulls you in right from the start, not just with its story or graphics but because it's just so addictive. Whether playing solo or with friends, the game is incredibly fun and keeps you hooked. Even though it’s an older title, it’s still a nostalgic gem, and revisiting it years later has been a blast.
While I’m not the biggest fan of multiplayer personally, the Zombies mode is my absolute favorite! The maps are brilliantly designed, each offering something unique. Shadows of Evil’s magma theme, for example, and other maps that provide entirely fresh experiences ensure that the game never feels repetitive or boring."`,
  `"Id rate this game when in term of fun 10/10. But for story mode, probably 6/10 because it doesnt have any connection/relation with previous black ops series but its still fun regardless. Zombies, 10/10 as well but they are separate from main game so you should get the DLC as its packed/bundled with previous black ops zombies series.
The reason why i called this game "fun" because you are free to mods everything inside in this game. You can play, modify, create and customize the way you want to be. Thanks for the workshop feature but keep in mind that achievements / xp will be disabled when turning on mods. Overall, you should get this game even if you were late to party. By the time this review was made in 2025, the game is still hella fun and you can customize everything you want to be inside of Black Ops 3."`,
  `"This game is hands down the best thing to ever happen to the Zombies series. From its gameplay and storyline to its progression and surprises, every element is crafted to keep you coming back for more. Each map is packed with tasks, hidden items, and unique experiences that make every playthrough feel fresh and exciting.
The replayability is unmatched—no other game has kept me engaged for so long. Add in the custom Zombies and mod tools, and the content becomes virtually endless. Thanks to the incredible community, we not only have Zombies Chronicles but also stunning remakes of fan-favorite maps like Mob of the Dead, Call of the Dead, and Town, with Buried and Die Rise on the horizon for 2023/2024.
If you’re a fan of Call of Duty Zombies—or just love a good zombies mode—this game is an absolute must-play."`,
  `""Call of Duty®: Black Ops III - Just Zombies And Nothing Else Because Nothing Else Matters Edition"
- I mean you are scamming people by making them think that the multiplayer is enjoyable after all. You're also fully admitting that you're aware of the fact that a large majority of your players (The ones that aren't cheaters) -only play for the zombies and custom maps, solely by calling the base game "Zombies Chronicles Edition". You obviously just want people to buy the full package for a higher price and that would be fine if it wasn't for the fact that it feels like it never really goes on sale and the game is what, 6 years old now? Can't forget that the sale prices for these games are always the same every single time as well.
Can only recommend buying it when it's on sale"`

];

// If user presses "X", take them back to the menu page
document.addEventListener("keydown", function (e) {
        if (e.key.toLowerCase() === "x") {
          window.location.href = "../MainMenu/menu.html";
        }
      });

function showReview(index) {
  document.getElementById('reviewText').textContent = reviews[index]; // Set the review text based on the index
  document.querySelectorAll('.review-buttons button').forEach((btn, i) => {  // Loop through all the review buttons and add/remove the 'active' class
    btn.classList.toggle('active', i === index); // Highlight the active button
  });
}

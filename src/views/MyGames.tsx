import React, { StrictMode} from "react";
import '../styles/homepageStyles.css'

export default function MyGames() {
		console.log("Loaded game gallery")
	return (

		<>
		<div className="gallery">

		<div className="selectable">
		<img src="/src/assets/gameImages/1984.png"/>
		<br/>
		<a id="selectionTitle" href="/games/1984">1984</a>
		<p id="desc">Made for a highschool english assignment</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		<div className="selectable">
		<img src="/src/assets/gameImages/birbyNight.gif"/>
		<br/>
		<a id="selectionTitle" href="/games/Birby">Birby</a>
		<p id="desc">A cute puzzle platformer</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		<div className="selectable">
		<img src="/src/assets/gameImages/DegBomb.png"/>
		<br/>
		<a id="selectionTitle" href="/games/degBomb">Degree Bomb</a>
		<p id="desc">Made for the Brackey's game jam when I was 15</p>
		<p id="platformDesc">Windows</p>
		</div>

		<div className="selectable">
		<img src="/src/assets/gameImages/lifelessBits.gif"/>
		<br/>
		<a id="selectionTitle" href="/games/lifelessBits">lifelessBits</a>
		<p id="desc">An arena shooter inspired by bauxite's meteorite LOWREZJAM entry</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		<div className="selectable">
		<img src="/src/assets/gameImages/terminalShooter.png"/>
		<br/>
		<a id="selectionTitle" href="/games/terminalShooter">terminalShooter</a>
		<p id="desc">A shootemup set in some computer</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		<div className="selectable">
		<img src="/src/assets/gameImages/dreamGirl.png"/>
		<br/>
		<a id="selectionTitle" href="/games/dreamGirl">Undisclosed project</a>
		<p id="desc">A story game currently in development in SDL2 and c++.</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		</div>
		</>
	)
}


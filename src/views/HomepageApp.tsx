import RotatingBirdScene from '../RotatingBirdCanvas'
import { Outlet } from 'react-router-dom'


import '../styles/homepageStyles.css'

export default function Homepage() {
	
		return (
		<>

		<h1 id="title">Shahroz Khan</h1>

		<div id="homepageHeader">

		<hr/>
		<a className="active" href="/home/games">MyGames</a>
		<a href="/home/software">Software</a>
		<a href="/home/blog">Blog</a>
		<a href="/home/about">About Me</a>
		<RotatingBirdScene/>
		<br/>

		</div>

		<Outlet/>

		</>
	)		
}



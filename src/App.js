import React from 'react';

import './sass/main.scss';

function App() {
	return (
		<div className='container'>
			<div className='column flex-center'>
				<header className='header'>
					<h1 className='header__text'>Header</h1>
				</header>
			</div>

			<main>
				<section className='section'>
					<h2 className='row'>Main Section</h2>
					<p className='paragraph'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem animi
						suscipit nam rem, vero ullam a numquam dicta libero velit cum adipisci nulla
						rerum fugiat fugit labore sequi ad atque illum! At, neque. Impedit repellendus
						eligendi ex illo id beatae.
					</p>
				</section>
			</main>
		</div>
	);
}

export default App;

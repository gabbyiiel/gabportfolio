import './hero.css';

export const Hero2 = () => {
	return (
		<>
			<div className="bgContainer">
				<span className="bgHeroInnovate">Innovate</span>
				<span className="bgHeroDesign">Design</span>
				<span className="bgHeroDevelop">Develop</span>
			</div>
			<div className="heroContainer">
				<div className="heroTitleContainer">
					<div className="heroSmallTitle">
						<span className="heroTitle">I am</span>
					</div>
					<span className="heroTitle font-bold text-[6.5em] leading-[4.5rem]">
						Gabriel
					</span>
					<div className="heroEndSmallTitle">
						<span className="heroTitle">A FRONT END DEVELOPER</span>
					</div>
				</div>
			</div>
		</>
	);
};

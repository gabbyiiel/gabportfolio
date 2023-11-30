import React from 'react';

const About = () => {
	return (
		<div className="about flex flex-col gap-28 px-28 py-10">
			<div className="skill-menu flex flex-row items-center justify-start gap-20">
				<h5 className="skill-menu-title text-h5 uppercase tracking-wide">
					Skills
				</h5>
				<div className="skill-set flex flex-row items-center justify-center gap-10">
					{[
						['UI/UX Design', 'test'],
						['Web Development', 'test'],
						['Multimedia Editing', 'test']
					].map(([title, id]) => (
						<a
							id={id}
							className="skill-set-title text-links font-GT font-light uppercase tracking-widest text-light-text/50 hover:cursor-pointer"
						>
							{title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;

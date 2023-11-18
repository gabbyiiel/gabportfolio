import './footer.css';

const Footer = () => {
	return (
		<div className="container__footer">
			<div className="container__contact">
				<div className="container__footer__contact">
					<h2 className="contact__title">Connect and Collaborate</h2>
					<p className="contact__text">
						Witness how I transform concepts into captivating
						digital experiences, and let's explore the possibilities
						for your next project
					</p>
				</div>
			</div>
			<div className="container__footer__content">
				<div className="footer__logo">
					<img src="./LogoBlack.png" alt="LogoBlack" />
				</div>
				<div className="footer__text">
					<span>Gabriel Lawrence</span>
					<span>All Rights Reserved</span>
					<span>2023</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;

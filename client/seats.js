import React from 'react';
import Blinds from './Blinds';

const Seats = (props) => {
	const players = props.players;
	const clientPlayer = props.clientPlayer;


	if (clientPlayer[0]) {
		let active = ''
		let otherActive = ''
		if (clientPlayer[0].active === true) {
			active = '-active'
			otherActive = ''
		} else {
			active = ''
			otherActive = '-active'
		}
		return (
			<div>
				<div key={clientPlayer[0].id} className={(clientPlayer[0].active ? 'active' : '') + ' ' + 'my-seat'}>
					<div className="player">
						<Blinds button={clientPlayer[0].button} bigBlind={clientPlayer[0].bigBlind} smallBlind={clientPlayer[0].smallBlind} />
						<div className="player-font">{clientPlayer[0].name}</div>
						<div className="player-font">${clientPlayer[0].bankroll}</div>
					</div>
				</div>
				<div className={'other-seats'}>
					{players.map((player) => {
						if (player.id !== props.id) {
							return (
								<div key={player.name} className={(player.active ? 'active' : '') + ' ' + 'other-seat'}>
									<div className="player">
										<Blinds button={player.button} bigBlind={player.bigBlind} smallBlind={player.smallBlind} />
										<div className="player-font"> {player.name}</div>
										<div className="player-font">${player.bankroll}</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	} else if (clientPlayer.length === 0) {
		let active = ''
		let otherActive = ''
		if (players[0]) {
			if (players[0].active === true) {
				active = '-active'
				otherActive = ''
			} else {
				active = ''
				otherActive = '-active'
			}
		}
		return (
			<div>
				{players.map((player) => {
					if (players.indexOf(player) === 0) {
						return (
							<div key={player.name} className={'my-seat ' + (player.active ? 'active' : '')}>
								<div className="player">
									<div className="player-font"> {player.name}</div>
									<div className="player-font">${player.bankroll}</div>
								</div>
							</div>
						);
					}
				})}
				<div className={'other-seats'}>
					{players.map((player) => {
						if (players.indexOf(player) !== 0) {
							return (
								<div key={player.name} className={(player.active ? 'active' : '') + ' ' + 'other-seat'}>
									<div className="player">
										<div className="player-font"> {player.name}</div>
										<div className="player-font">${player.bankroll}</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default Seats;

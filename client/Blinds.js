import React from 'react';

const Blinds = (props) => {
	if (props.button === true) {
		return <div className="zhuangjia mark">庄家</div>;
	} else if (props.smallBlind === true) {
		return <div className="mark">小盲</div>;
	} else if (props.bigBlind === true) {
		return <div className="mark">大盲</div>;
	} else {
		return <div />;
	}
};

export default Blinds;

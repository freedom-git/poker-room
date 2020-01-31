import React from 'react';
import Button from '@material-ui/core/Button';

const Fold = (props) => {
	return (
		<Button variant="contained" color="primary" onClick={props.fold}>
			弃牌
		</Button>
	);
};

export default Fold;

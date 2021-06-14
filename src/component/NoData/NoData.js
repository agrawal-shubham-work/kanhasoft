import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';
import './NoDataAvailableMsg.css';

const NoDataAvailableMsg = (props) => {
	return (
		<span className="noDataMsgContainer">
			<span className="noDataMsg">
				<WarningIcon className="noDataMsgIcon" />
			</span>{' '}
			<span className="noDataMsgText">
				{props.message ? props.message : 'No Data Available'}
			</span>
		</span>
	);
};

export default NoDataAvailableMsg;
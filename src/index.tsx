import { render } from 'nixix/dom';
import View from './View';
import './index.css';

/* @module-refresh */
const root = document.querySelector('body');
const Mount = () => {
	render(() => <View />,root!, {
		commentForLF: false
	});
};

Mount();
export default Mount;
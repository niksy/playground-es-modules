import { pick } from 'lodash-es';
import jackie from './jackie';
import chester from 'app/chester';

export function bar () {
	console.log(jackie);
}

export default function foo () {
	pick({a:2}, 'a');
	console.log(jackie);
	console.log(chester);
}

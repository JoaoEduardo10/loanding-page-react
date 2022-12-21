import { mockLinks } from '../../components/NavLinks/mock';

import { BaseProps } from '.';
import { mockGridText } from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';

export const mockBase: BaseProps =  {
	links: mockLinks ,
	logoData: {
		text: 'Logo',
		link: '#',
	},
	footerHtml: '<p>Teste de footer</p>',
	children: (
		<>
			<GridText {...mockGridText} background />
			<GridText {...mockGridText} />
			<GridText {...mockGridText} background />
			<GridText {...mockGridText} />
			<GridText {...mockGridText} background />
		</>
	)
};
import Page1 from '../pages/Page1';
import Tab1 from '../pages/Page1/Tab1';
import Tab2 from '../pages/Page1/Tab2';
import { RouteItem } from './types';

export const mainRoutes: RouteItem[] = [
	{
		name: 'Page1',
		path: '/page1',
		component: Page1,
		icon: 'icongaojingliebiao',
		redirect: '/page1/tab1',
	},
]

export const alarmRoutes = [
	{
		name: 'Tab1',
		path: '/page1/tab1',
		component: Tab1,
		icon: 'iconmenu-suanfaguanli'
	},
	{
		name: 'Tab2',
		path: '/page1/tab2',
		component: Tab2,
		icon: 'iconmenu-suanfaguanli'
	}
];

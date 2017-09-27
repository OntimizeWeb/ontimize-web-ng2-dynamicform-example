import {
  MenuRootItem,
  MenuGroup,
  MenuItem
} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  {
    id: 'views',
    name: 'VIEW',
    icon: '',
    opened: true,
    items: [
      { id: 'forms', name: 'FORMS', route: '/main/dynamicforms', icon: 'content_paste' },
      { id: 'data', name: 'DATA', route: '/main/data', icon: 'storage' }
    ]
  },
  {
    id: 'general',
    name: 'GENERAL',
    icon: 'info_outline',
    opened: false,
    items: [
      { id: 'version', name: 'VERSION', route: '/main/version' }
    ]
  }
];

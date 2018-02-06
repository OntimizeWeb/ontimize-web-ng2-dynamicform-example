import {
  MenuRootItem,
  MenuGroup,
  MenuItem
} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  {
    id: 'views',
    name: 'VIEW',
    icon: 'remove_red_eye',
    opened: true,
    items: [
      { id: 'forms', name: 'FORMS', route: '/main/dynamicforms', icon: 'content_paste' },
      { id: 'data', name: 'DATA', route: '/main/data', icon: 'storage' }
    ]
  },
  { id: 'logout', name: 'LOGOUT', route : '/login', icon: 'power_settings_new', confirm : 'yes' }
  // {
  //   id: 'general',
  //   name: 'GENERAL',
  //   icon: 'info_outline',
  //   opened: false,
  //   items: [
  //     { id: 'version', name: 'VERSION', route: '/main/version' }
  //   ]
  // }
];

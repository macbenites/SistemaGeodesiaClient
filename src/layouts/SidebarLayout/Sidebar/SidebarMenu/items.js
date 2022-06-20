import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';

const menuItems = [
  {
    heading: '',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: 'Articulos',
    items: [
      {
        name: 'Articulo',
        link: '/productos/ingreso',
        icon: Inventory2TwoToneIcon
      }
      // {
      //   name: 'Salida de Insumos',
      //   icon: InventoryTwoToneIcon,
      //   link: '/productos/salida'
      // }
    ]
  },
  {
    heading: 'Configuración',
    items: [
      {
        name: 'Presentación',
        link: '/config/presentacion',
        icon: Inventory2TwoToneIcon
      },
      {
        name: 'Tipo de Transferencia',
        link: '/config/tipotransferencia',
        icon: Inventory2TwoToneIcon
      },
      {
        name: 'Categoria',
        link: '/config/categoria',
        icon: Inventory2TwoToneIcon
      },
      {
        name: 'Unidad de Medida',
        link: '/config/unidadmedida',
        icon: Inventory2TwoToneIcon
      },
      {
        name: 'Tipo de documento',
        link: '/config/docidentidad',
        icon: Inventory2TwoToneIcon
      }
    ]
  },
  {
    heading: 'Insumos',
    items: [
      {
        name: 'Ingreso de Insumos',
        link: '/insumos/ingreso',
        icon: Inventory2TwoToneIcon
      },
      {
        name: 'Salida de Insumos',
        icon: InventoryTwoToneIcon,
        link: '/insumos/salida'
      }
    ]
  },

  {
    heading: 'Reportes',
    items: [
      {
        name: 'Kardex',
        link: '/reportes/kardex',
        icon: Inventory2TwoToneIcon
      },
      {
        name: 'Inventario',
        link: '/reportes/inventario',
        icon: InventoryTwoToneIcon
      }
    ]
  },
  {
    heading: 'Proveedor',
    items: [
      {
        name: 'Registro de Proveedor',
        link: '/proveedor/registro',
        icon: Inventory2TwoToneIcon
      }
    ]
  }
  // {
  //   heading: 'Dashboards',
  //   items: [
  //     {
  //       name: 'Crypto',
  //       link: '/dashboards/crypto',
  //       icon: BrightnessLowTwoToneIcon
  //     },
  //     {
  //       name: 'Messenger',
  //       icon: MmsTwoToneIcon,
  //       link: '/dashboards/messenger'
  //     }
  //   ]
  // }
  // {
  //   heading: 'Management',
  //   items: [
  //     {
  //       name: 'Transactions',
  //       icon: TableChartTwoToneIcon,
  //       link: '/management/transactions'
  //     },
  //     {
  //       name: 'User Profile',
  //       icon: AccountCircleTwoToneIcon,
  //       link: '/management/profile',
  //       items: [
  //         {
  //           name: 'Profile Details',
  //           link: '/management/profile/details'
  //         },
  //         {
  //           name: 'User Settings',
  //           link: '/management/profile/settings'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   heading: 'Components',
  //   items: [
  //     {
  //       name: 'Buttons',
  //       icon: BallotTwoToneIcon,
  //       link: '/components/buttons'
  //     },
  //     {
  //       name: 'Modals',
  //       icon: BeachAccessTwoToneIcon,
  //       link: '/components/modals'
  //     },
  //     {
  //       name: 'Accordions',
  //       icon: EmojiEventsTwoToneIcon,
  //       link: '/components/accordions'
  //     },
  //     {
  //       name: 'Tabs',
  //       icon: FilterVintageTwoToneIcon,
  //       link: '/components/tabs'
  //     },
  //     {
  //       name: 'Badges',
  //       icon: HowToVoteTwoToneIcon,
  //       link: '/components/badges'
  //     },
  //     {
  //       name: 'Tooltips',
  //       icon: LocalPharmacyTwoToneIcon,
  //       link: '/components/tooltips'
  //     },
  //     {
  //       name: 'Avatars',
  //       icon: RedeemTwoToneIcon,
  //       link: '/components/avatars'
  //     },
  //     {
  //       name: 'Cards',
  //       icon: SettingsTwoToneIcon,
  //       link: '/components/cards'
  //     },
  //     {
  //       name: 'Forms',
  //       icon: TrafficTwoToneIcon,
  //       link: '/components/forms'
  //     }
  //   ]
  // },
  // {
  //   heading: 'Extra Pages',
  //   items: [
  //     {
  //       name: 'Status',
  //       icon: VerifiedUserTwoToneIcon,
  //       link: '/status',
  //       items: [
  //         {
  //           name: 'Error 404',
  //           link: '/status/404'
  //         },
  //         {
  //           name: 'Error 500',
  //           link: '/status/500'
  //         },
  //         {
  //           name: 'Maintenance',
  //           link: '/status/maintenance'
  //         },
  //         {
  //           name: 'Coming Soon',
  //           link: '/status/coming-soon'
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export default menuItems;

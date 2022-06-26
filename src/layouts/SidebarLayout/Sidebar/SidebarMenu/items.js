import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import StraightenTwoToneIcon from '@mui/icons-material/StraightenTwoTone';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import BusinessIcon from '@mui/icons-material/Business';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const menuItems = [
  {
    heading: 'Almacenes',
    items: [
      {
        name: 'Almacen',
        link: '/almacenes/registro',
        icon: Inventory2TwoToneIcon
      }
    ]
  },
  {
    heading: 'Articulos',
    items: [
      {
        name: 'Articulo',
        link: '/productos/ingreso',
        icon: PrecisionManufacturingIcon
      }
    ]
  },
  {
    heading: 'Configuración',
    items: [
      {
        name: 'Presentación',
        link: '/config/presentacion',
        icon: ShoppingBagTwoToneIcon
      },
      {
        name: 'Tipo de Transferencia',
        link: '/config/tipotransferencia',
        icon: CheckTwoToneIcon
      },
      {
        name: 'Categoria',
        link: '/config/categoria',
        icon: CategoryTwoToneIcon
      },
      {
        name: 'Unidad de Medida',
        link: '/config/unidadmedida',
        icon: StraightenTwoToneIcon
      },
      {
        name: 'Tipo de documento',
        link: '/config/tipodocumento',
        icon: ReceiptLongTwoToneIcon
      }
    ]
  },
  {
    heading: 'Insumos',
    items: [
      {
        name: 'Ingreso de Insumos',
        link: '/insumos/ingreso',
        icon: AddCircleOutlineTwoToneIcon
      },
      {
        name: 'Salida de Insumos',
        icon: RemoveCircleOutlineTwoToneIcon,
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
        icon: SummarizeTwoToneIcon
      },
      {
        name: 'Inventario',
        link: '/reportes/inventario',
        icon: InventoryTwoToneIcon
      }
    ]
  },
  {
    heading: 'Proveedores',
    items: [
      {
        name: 'Proveedor',
        link: '/proveedor/registro',
        icon: AddBusinessTwoToneIcon
      }
    ]
  },
  {
    heading: 'Empresa',
    items: [
      {
        name: 'Datos de la empresa',
        link: '/empresa/registro',
        icon: BusinessIcon
      }
    ]
  },
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
  {
    heading: 'Usuarios',
    items: [
      {
        name: 'Trabajador',
        link: '/usuarios/mantenimiento',
        icon: BadgeTwoToneIcon
      }
    ]
  },
];

export default menuItems;

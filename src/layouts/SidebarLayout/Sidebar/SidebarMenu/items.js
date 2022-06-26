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
        icon: Inventory2TwoToneIcon
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
    heading: 'Usuarios',
    items: [
      {
        name: 'Trabajador',
        link: '/usuarios/mantenimiento',
        icon: BadgeTwoToneIcon
      }
    ]
  }
];

export default menuItems;

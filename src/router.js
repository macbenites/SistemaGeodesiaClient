import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Kardex from './content/pages/Reports/Kardex';
import Proveedor from './content/pages/Proveedor/Registrar';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
//Reportes
const InventarioReporte = Loader(
  lazy(() => import('src/content/pages/Reports/Inventario'))
);
// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Almacen

const RegistroAlmacen = Loader(
  lazy(() => import('src/content/pages/Almacen/Registrar'))
);
const TablaAlmacen = Loader(
  lazy(() => import('src/content/pages/Almacen/TableAlmacen'))
);

//Productos

const Ingreso = Loader(
  lazy(() => import('src/content/pages/Products/TableProducts'))
);

const RegistroProducto = Loader(
  lazy(() => import('src/content/pages/Products/Ingreso'))
);

//Insumos
const TablaInsumos = Loader(
  lazy(() => import('src/content/pages/Insumos/Ingreso/TablaIngreso'))
);
const IngresoInsumos = Loader(
  lazy(() => import('src/content/pages/Insumos/Ingreso/Registrar/ingresoTest'))
);


const SalidaInsumos = Loader(
  lazy(() => import('src/content/pages/Insumos/Salida'))
);

// Config
const TablaPresentacion = Loader(
  lazy(() => import('src/content/pages/Config/Presentation/TablePresentations')) //archivo index de presentaciomes
);
const RegistroPresentacion = Loader(
  lazy(() => import('src/content/pages/Config/Presentation/Registrar')) //archivo registrar presentacion
);
const TablaTipoTransferencia = Loader(
  lazy(() => import('src/content/pages/Config/Transf/TableTransferencias'))
);
const RegistroTipoTransferencia = Loader(
  lazy(() => import('src/content/pages/Config/Transf/Registrar'))
);
const TablaCategoria = Loader(
  lazy(() => import('src/content/pages/Config/Category/TableCategorias'))
);
const RegistroCategoria = Loader(
  lazy(() => import('src/content/pages/Config/Category/Registrar'))
);
const TablaUnidadMedida = Loader(
  lazy(() => import('src/content/pages/Config/Unit/TableUnidades'))
);
const RegistroUnidadMedida = Loader(
  lazy(() => import('src/content/pages/Config/Unit/Registrar'))
);
const TablaTipoDoc = Loader(
  lazy(() => import('src/content/pages/Config/DocumentIden/TableDocumentos'))
);
const RegistroTipoDoc = Loader(
  lazy(() => import('src/content/pages/Config/DocumentIden/Registrar'))
);

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);

// Proveedor

const RegistroProveedor = Loader(
  lazy(() => import('src/content/pages/Proveedor/Registrar'))
);
const TablaProveedor = Loader(
  lazy(() => import('src/content/pages/Proveedor/TableProvider'))
);

// Empresa

const RegistroEmpresa = Loader(
  lazy(() => import('src/content/pages/Empresa/Registro'))
);

// Usuarios

const Employee = Loader(
  lazy(() => import('src/content/pages/Users/Trabajador/Ingreso'))
);

const EmployeeMaintenance = Loader(
  lazy(() => import('src/content/pages/Users/Trabajador/TableTrabajador'))
);

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

//Perfil

const Perfil = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);

const routes = (isLoggedIn) => [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },

      {
        path: 'status',
        children: [
          {
            path: '/',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: '/almacenes',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="almacenes" replace />
      },
      {
        path: 'registro',
        element: <TablaAlmacen />
      },
      {
        path: 'registro-nuevo',
        element: <RegistroAlmacen />
      }
    ]
  },
  {
    path: '/productos',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="productos" replace />
      },
      {
        path: 'ingreso',
        element: <Ingreso />
      },
      {
        path: 'ingreso-insumos',
        element: <RegistroProducto />
      }
    ]
  },
  {
    path: '/insumos',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="insumos" replace />
      },
      {
        path: 'ingreso',
        element: <TablaInsumos />
      },
      {
        path: 'ingreso-nuevo',
        element: <IngresoInsumos />
      },
      {
        path: 'salida',
        element: <SalidaInsumos />
      }
    ]
  },
  {
    path: '/config',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="config" replace />
      },
      {
        path: 'presentacion', //index de presentaciomes
        element: <TablaPresentacion />
      },
      {
        path: 'presentacion-registrar', //registrar presentacion
        element: <RegistroPresentacion />
      },
      {
        path: 'tipotransferencia',
        element: <TablaTipoTransferencia />
      },
      {
        path: 'tipotransferencia-registrar',
        element: <RegistroTipoTransferencia />
      },
      {
        path: 'categoria',
        element: <TablaCategoria />
      },
      {
        path: 'categoria-registrar',
        element: <RegistroCategoria />
      },
      {
        path: 'unidadmedida',
        element: <TablaUnidadMedida />
      },
      {
        path: 'unidadmedida-registrar',
        element: <RegistroUnidadMedida />
      },
      {
        path: 'tipodocumento',
        element: <TablaTipoDoc />
      },
      {
        path: 'tipodocumento-registrar',
        element: <RegistroTipoDoc />
      }
    ]
  },
  {
    path: 'dashboards',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboards/crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      }
    ]
  },
  {
    path: 'reportes',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="reportes" replace />
      },
      {
        path: 'kardex',
        element: <Kardex />
      },
      {
        path: 'inventario',
        element: <InventarioReporte />
      }
    ]
  },
  {
    path: 'proveedor',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="proveedor" replace />
      },
      {
        path: 'registro',
        element: <TablaProveedor/>
      },
      {
        path: 'registro-nuevo',
        element: <RegistroProveedor/>
      }
    ]
  },
  {
    path: 'empresa',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="empresa" replace />
      },
      {
        path: 'registro',
        element: <RegistroEmpresa/>
      }
    ]
  },
  {
    path: 'usuarios',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="usuarios" replace />
      },
      {
        path: 'trabajador',
        element: <Employee />
      },
      {
        path: 'mantenimiento',
        element: <EmployeeMaintenance />
      }
    ]
  },
  {
    path: 'perfil',
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/" />,
    children: [
      {
        path: '/',
        element: <Navigate to="perfil" replace />
      },
      {
        path: 'user',
        element: <Perfil />
      }
    ]
  }
];

export default routes;

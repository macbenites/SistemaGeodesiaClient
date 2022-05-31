import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Kardex from './content/pages/Reports/Kardex';
import Proveedor from './content/pages/Proveedor';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

//Productos

const Ingreso = Loader(
  lazy(() => import('src/content/pages/Products/Ingreso'))
);

//Insumos
const IngresoInsumos = Loader(
  lazy(() => import('src/content/pages/Insumos/Ingreso'))
);

const SalidaInsumos = Loader(
  lazy(() => import('src/content/pages/Insumos/Salida'))
);

// Config
const Presentacion = Loader(
  lazy(() => import('src/content/pages/Config/Presentation'))
);
const TipoTransferencia = Loader(
  lazy(() => import('src/content/pages/Config/Transf'))
);
const Categoria = Loader(
  lazy(() => import('src/content/pages/Config/Category'))
);
const UnidadMedida = Loader(
  lazy(() => import('src/content/pages/Config/Unit'))
);
const DocIdentidad = Loader(
  lazy(() => import('src/content/pages/Config/DocumentIden'))
);

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);

// Proveedor

const ProveedorRegistro = Loader(
  lazy(() => import('src/content/pages/Proveedor'))
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

const routes = [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
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
    path: '/productos',
    element: <SidebarLayout />,
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
        path: 'salida',
        element: <h1>Ingreso de Salida</h1>
      }
    ]
  },
  {
    path: '/insumos',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="insumos" replace />
      },
      {
        path: 'ingreso',
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
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="config" replace />
      },
      {
        path: 'presentacion',
        element: <Presentacion />
      },
      {
        path: 'tipotransferencia',
        element: <TipoTransferencia />
      },
      {
        path: 'categoria',
        element: <Categoria />
      },
      {
        path: 'unidadmedida',
        element: <UnidadMedida />
      },
      {
        path: 'docidentidad',
        element: <DocIdentidad />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboards/crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'reportes',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="reportes" replace />
      },
      {
        path: 'kardex',
        element: <Kardex />
      }
    ]
  },
  {
    path: 'proveedor',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="proveedor" replace />
      },
      {
        path: 'registro',
        element: <ProveedorRegistro />
      }
    ]
  }
];

export default routes;

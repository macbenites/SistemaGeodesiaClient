import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Kardex from './content/pages/Reports/Kardex';

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
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

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
  }
  // {
  //   path: 'management',
  //   element: <SidebarLayout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <Navigate to="/management/transactions" replace />
  //     },
  //     {
  //       path: 'transactions',
  //       element: <Transactions />
  //     },
  //     {
  //       path: 'profile',
  //       children: [
  //         {
  //           path: '/',
  //           element: <Navigate to="details" replace />
  //         },
  //         {
  //           path: 'details',
  //           element: <UserProfile />
  //         },
  //         {
  //           path: 'settings',
  //           element: <UserSettings />
  //         }
  //       ]
  //     }
  //   ]
  // }
  // {
  //   path: 'components',
  //   element: <SidebarLayout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <Navigate to="/components/buttons" replace />
  //     },
  //     {
  //       path: 'buttons',
  //       element: <Buttons />
  //     },
  //     {
  //       path: 'modals',
  //       element: <Modals />
  //     },
  //     {
  //       path: 'accordions',
  //       element: <Accordions />
  //     },
  //     {
  //       path: 'tabs',
  //       element: <Tabs />
  //     },
  //     {
  //       path: 'badges',
  //       element: <Badges />
  //     },
  //     {
  //       path: 'tooltips',
  //       element: <Tooltips />
  //     },
  //     {
  //       path: 'avatars',
  //       element: <Avatars />
  //     },
  //     {
  //       path: 'cards',
  //       element: <Cards />
  //     },
  //     {
  //       path: 'forms',
  //       element: <Forms />
  //     }
  //   ]
  // }
];

export default routes;

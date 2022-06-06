import * as yup from 'yup';
import { array, boolean, number, object, string, ValidationError } from 'yup';

export const validationArticle = yup.object().shape({
  cod_art: yup.string().required('El código es requerido'),
  des_art: yup
    .string('Ingrese la descripción')
    .required('El nombre del articulo es requerido'),
  cod_cat: yup
    .string('Ingrese categoría')
    .required('El codigo del articulo es requerido'),
  cod_pres: yup
    .string('Ingrese presentación')
    .required('La presentacion es requerida'),
  cod_unid_med: yup.string().required('La unidad de medida es requerida'),
  imagen_art: yup.string('Ingrese url').required('La imagen es requerida')
});

export const validationCategory = yup.object().shape({
  des_cat: yup
    .string('Ingrese la descripción')
    .required('El nombre de la categoria es requerido')
});

export const validationUnit = yup.object().shape({
  des_unid_med: yup
    .string('Ingrese la descripción de  unidad de medida ')
    .required('El nombre de la categoria es requerido'),
  prefijo_unid_med: yup
    .string('Ingrese la unidad de medida ')
    .required('El nombre de la categoria es requerido')
});

export const validationPresentacion = yup.object().shape({
  des_pres: yup
    .string('Ingrese la descripción de Presentacion')
    .required('El nombre de la presentacion es requerido')
});

export const validationTransferencia = yup.object().shape({
  des_transf: yup
    .string('Ingrese la descripción de tranferencia')
    .required('El nombre de la transferencia es requerido')
});

export const validationKardex = yup.object().shape({
  fec_ini: yup
    .string('Ingrese la fecha de inicio')
    .required('La fecha de inicio es requerida'),
  fec_fin: yup
    .string('Ingrese la fecha de fin')
    .required('La fecha de fin es requerida'),
  almacen: yup.string('Ingrese el almacen').required('El almacen es requerido'),
  articulo: yup
    .string('Ingrese el articulo')
    .required('El articulo es requerido')
});

export const validationSupplies = yup.object().shape({
  cod_prov: yup
    .string('Ingrese el codigo del proveedor')
    .required('El codigo del proveedor es requerido'),
  cod_almacen: yup
    .string('Ingrese el codigo del almacen')
    .required('El codigo del almacen es requerido'),
  cod_trabajador: yup
    .string('Ingrese el codigo de trabajador')
    .required('El codigo del trabajador es requerido'),
  cod_t_transf: yup
    .string('Ingrese el codigo de transferencia')
    .required('El codigo de transferencia es requerido'),
  cod_t_doc: yup
    .string('Ingrese el codigo de documento')
    .required('El codigo del documento es requerido'),
  nro_doc: yup
    .string('Ingrese el numero de documento')
    .required('El numero del documento es requerido'),
  fec_doc: yup
    .string('Ingrese la fecha de documento')
    .required('La fecha del documento es requerido'),

  articles: array(
    object({
      cod_art: string().required('El codigo del articulo es requerido'),
      cant_art: number()
        .required('La cantidad del articulo es requerida')
        .min(1, 'La cantidad del articulo debe ser mayor a 1'),
      prec_unit: number()
        .required('El precio unitario del articulo es requerido')
        .min(1, 'El precio unitario del articulo debe ser mayor a 1'),
      obs_ing: string()
        .required('La observacion del articulo es requerida')
        .min(3, 'La observacion del articulo debe tener minimo 3 caracteres')
        .max(
          10,
          '  La observacion del articulo debe tener maximo 10 caracteres'
        )
    })
  )
    .min(1, 'Debe ingresar al menos un articulo')
    .max(8, 'Debe ingresar maximo 3 articulos')
  // .test((donations) => {
  //   const sum = donations?.reduce(
  //     (acc, curr) => acc + (curr.percentage || 0),
  //     0
  //   );

  //   if (sum !== 100) {
  //     return new ValidationError(
  //       `Percentage should be 100%, but you have ${sum}%`,
  //       undefined,
  //       'donations'
  //     );
  //   }

  //   return true;
  // })
});

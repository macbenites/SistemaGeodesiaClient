import * as yup from 'yup';

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

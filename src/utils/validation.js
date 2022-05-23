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
  stock: yup
    .number()
    .typeError('El stock debe ser un numero')
    .min(1, 'El stock debe ser mayor a 1')
    .max(1000, 'El stock debe ser menor a 1000')
    .required('El stock es requerido'),
  imagen_art: yup.string('Ingrese url').required('La imagen es requerida')
});

export const validationCategory = yup.object().shape({
  des_cat: yup
    .string('Ingrese la descripción')
    .required('El nombre de la categoria es requerido')
});

import * as yup from 'yup';
import { array, boolean, number, object, string } from 'yup';

export const validationArticle = yup.object().shape({
  cod_art: yup.string().required('El codigo del articulo es requerido'),
  des_art: yup
    .string('Ingrese la descripción')
    .required('El nombre del articulo es requerido'),
  cod_cat: yup
    .string('Ingrese categoría')
    .required('La categoria es requerida'),
  cod_pres: yup
    .string('Ingrese presentación')
    .required('La presentacion es requerida'),
  cod_unid_med: yup.string().required('La unidad de medida es requerida'),
  imagen_art: yup.string('Ingrese url').required('La imagen es requerida')
});

export const validationProvider = yup.object().shape({
  cod_t_per: yup
    .string('Ingrese tipo de persona')
    .required('El tipo persona es requerido'),
  razon_social: yup
    .string('Ingrese razon social')
    .required('La razon social es requerida'),
  cod_t_doc: yup.string().required('El tipo de documento es requerido'),
  nro_doc: yup
    .string('Ingrese número del documento')
    .required('El número de documento es requerido')
    .matches(/\b\d{11}\b/, {
      message: 'Ingrese solo 11 digitos',
      excludeEmptyString: true
    }),
  // .test('len', 'Ingrese solo 11 digitos', val => val.toString().length === 11)
  // .matches(/^[0-9]+$/,'Ingrese solo números'),
  // .trim(),
  correo_per: yup
    .string('Ingrese email')
    .email('El email no tiene un formato válido')
    .max(90, 'El email no puede superar los 90 caracteres')
    .required('El email es requerido'),
  dir_per: yup
    .string('Ingrese dirección')
    .max(100, 'La direccion no puede superar los 100 caracteres')
    .required('La dirección es requerida'),
  telephones: array(
    object({
      nro_telf: string('Ingrese número de telefono')
        .min(7, 'Ingrese minimo 7 digitos')
        .max(9, 'Ingrese máximo 9 digitos')
        .matches(/^[0-9]+$/, 'Ingrese solo números')
        .required('El numero de telefono es requerido')
    })
  )
});
// const linkgooglemap=/^https?\:\/\/?goo.gl(\.[a-z]+){1,2}\/maps\/?\?([^&]+&)*(ll=-?[0-9]{1,2}\.[0-9]+,-?[0-9]{1,2}\.[0-9]+|q=[^&]+)+($|&)/
export const validationWarehouse = yup.object().shape({
  des_almacen: yup
    .string('Ingrese la descripción')
    .required('El nombre del almacen es requerido'),
  ubic_almacen: yup
    .string('Ingrese direccin URL de google map')
    // .matches(/^https?\:\/\/?goo.gl(\.[a-z]+){1,2}\/maps\/?\?([^&]+&)*(ll=-?[0-9]{1,2}\.[0-9]+,-?[0-9]{1,2}\.[0-9]+|q=[^&]+)+($|&)/,'URL invalida')
    .required('La ubicacion del almacen es requerido')
});

export const validationCompany = yup.object().shape({
  razon_social: yup
    .string('Ingrese razon social')
    .required('La razon social es requerida'),
  nro_doc: yup
    .string('Ingrese número del documento')
    .required('El número de documento es requerido')
    .matches(/\b\d{11}\b/, {
      message: 'Ingrese solo 11 digitos',
      excludeEmptyString: true
    }),
  correo_per: yup
    .string('Ingrese email')
    .email('El email no tiene un formato válido')
    .max(90, 'El email no puede superar los 90 caracteres')
    .required('El email es requerido'),
  // telephones: array(
  //   object({
  //     nro_telf: string('Ingrese número de telefono')
  //       .min(7, 'Ingrese minimo 7 digitos')
  //       .max(9, 'Ingrese máximo 9 digitos')
  //       .matches(/^[0-9]+$/, 'Ingrese solo números')
  //       .required('El numero de telefono es requerido')
  //   })
  // )
});

export const validationCategory = yup.object().shape({
  des_cat: yup
    .string('Ingrese la descripción')
    .required('El nombre de la categoria es requerido')
});

export const validationUnit = yup.object().shape({
  des_unid_med: yup
    .string('Ingrese la descripción de  unidad de medida ')
    .required('El nombre largo de la unidad de medida es requerido'),
  prefijo_unid_med: yup
    .string('Ingrese la unidad de medida ')
    .required('El nombre corto de la unidad de medida es requerido')
});

export const validationPresentacion = yup.object().shape({
  des_pres: yup
    .string('Ingrese la descripción de Presentación')
    .required('El nombre de la presentación es requerido')
});

export const validationTransferencia = yup.object().shape({
  des_transf: yup
    .string('Ingrese la descripción de tranferencia')
    .required('El nombre del tipo de transferencia es requerido')
});

export const validationDocumento = yup.object().shape({
  // tipo_reg_doc: yup
  //   .required('El tipo de movimiento es requerido'),
  des_t_doc: yup
    .string('Ingrese la descripción del documento')
    .required('El nombre del tipo de documento es requerido')
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
          255,
          'La observacion del articulo debe tener maximo 255 caracteres'
        )
    })
  ).min(1, 'Debe ingresar al menos un articulo')
  // .max(8, 'Debe ingresar maximo 3 articulos')
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

export const validationLogin = yup.object().shape({
  usuario: yup.string('Ingrese el usuario').required('El usuario es requerido'),
  contraseña: yup
    .string('Ingrese la contraseña')
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener minimo 6 caracteres')
});

export const validationChangePass = yup.object().shape({
  password: yup.string('Ingrese la nueva contraseña')
  .required('La nueva contraseña es requerida')
  .min(6, 'La contraseña debe tener minimo 6 caracteres'),
  password_confirmation: yup
    .string('Confirme la nueva contraseña')
    .required('La confirmacion de contraseña es requerida')
    .oneOf([yup.ref('password')], 'No coinciden las contraseñas')
    .min(6, 'La contraseña debe tener minimo 6 caracteres')
});

export const validationEmployee = yup.object().shape({
  cod_t_per: yup.string().required('El tipo de persona es requerido'),
  nom_per: yup.string().required('El nombre es requerido'),
  ape_pat_per: yup.string().required('El apellido paterno es requerido'),
  ape_mat_per: yup.string().required('El apellido materno es requerido'),
  cod_t_doc: yup.string().required('El tipo de documento es requerido'),
  nro_doc: yup.string().required('El numero de documento es requerido'),
  correo_per: yup
    .string()
    .email('El correo electronico no es valido')
    .required('El correo electronico es requerido'),
  dir_per: yup.string().required('La direccion es requerida'),
  cod_dpt: yup.string().required('El departamento es requerido'),
  cod_provi: yup.string().required('La provincia es requerida'),
  cod_dist: yup.string().required('El distrito es requerido'),
  dir_per: yup.string().required('La direccion es requerida'),
  telephones: array(
    object({
      nro_telf: string('Ingrese número de telefono')
        .min(7, 'Ingrese minimo 7 digitos')
        .max(9, 'Ingrese máximo 9 digitos')
        .matches(/^[0-9]+$/, 'Ingrese solo números')
        .required('El numero de telefono es requerido')
    })
  )
});

// cod_solicitador: '',
// cod_autorizador: '',
// cod_almacen: '',
// cod_t_transf: '',
// cod_t_doc: '',
// nro_doc: '',
// fec_doc: '',
// articles: [emptyArticle]
export const validationCheckoutForm = yup.object().shape({
  cod_solicitador: yup.string().required('El solicitador es requerido'),
  cod_autorizador: yup.string().required('El autorizador es requerido'),
  cod_almacen: yup.string().required('El almacen es requerido'),
  cod_t_transf: yup.string().required('El tipo de transferencia es requerido'),
  cod_t_doc: yup.string().required('El tipo de documento es requerido'),
  nro_doc: yup.string().required('El numero de documento es requerido'),
  fec_doc: yup.string().required('La fecha de documento es requerida'),
  articles: array(
    object({
      cod_art: string().required('El codigo del articulo es requerido'),
      stock_almacen: number().required('El stock del almacen es requerido'),
      cant_art: number()
        .required('La cantidad del articulo es requerida')
        .integer('La cantidad del articulo debe ser un numero entero')
        .min(1, 'La cantidad del articulo debe ser mayor a 1')
        .max(
          yup.ref('stock_almacen'),
          'La cantidad del  articulo debe ser menor al stock del almacen'
        ),
      obs_sal: string()
        .required('La observacion del articulo es requerida')
        .min(3, 'La observacion del articulo debe tener minimo 3 caracteres')
        .max(
          255,
          'La observacion del articulo debe tener maximo 255 caracteres'
        )
    })
  ).min(1, 'Debe ingresar al menos un articulo')
});

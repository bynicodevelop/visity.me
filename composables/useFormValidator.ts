import { useForm, type BaseFieldProps, type GenericObject } from "vee-validate";
import * as yup from "yup";

type SchemaDefinition = Record<string, yup.AnySchema>;

interface FormOptions {
  validationSchema: SchemaDefinition;
  initialValues?: Record<string, string>;
}

export const useFormValidator = (options: FormOptions) => {
  const schema = yup.object(options.validationSchema);

  const { errors, defineField, meta } = useForm({
    validationSchema: schema,
    initialValues: options.initialValues ?? {},
  });

  const fields: Record<string, globalThis.Ref<string, string>> = {};
  const fieldsAttrs: Record<string, globalThis.Ref<BaseFieldProps & GenericObject, BaseFieldProps & GenericObject>> = {};

  for (const fieldName of Object.keys(options.validationSchema)) {
    const [fieldRef, fieldAttrsRef] = defineField(fieldName);
    fields[fieldName] = fieldRef;
    fieldsAttrs[fieldName] = fieldAttrsRef;
  }

  return {
    fields,
    fieldsAttrs,
    errors,
    meta,
  };
};
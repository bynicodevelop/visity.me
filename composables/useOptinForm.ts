import { useForm } from "vee-validate";
import * as yup from "yup";

export const useOptinForm = () => {
    const { params } = useRoute();
    const optinCookie = useCookie('__session', {
        default: () => ({
            optin: false,
        }),
    });
    const schema = yup.object({
        email: yup.string().email("Email invalide").required("L'email est requis."),
    });
    const { errors, defineField, meta } = useForm({
        validationSchema: schema,
        initialValues: { email: "" },
    });
    const [email, emailAttrs] = defineField("email");
    const username = computed(() => params.username);

    const submitForm = async () => {
        const { status } = await $fetch("/api/optin", {
            method: "post",
            body: { email: email.value, username: username.value },
        });

        if (status === 200) {
            optinCookie.value.optin = true;
        }
    };

    watch(email, () => meta.value.touched = false);

    return { email, emailAttrs, errors, meta, optinCookie: computed(() => optinCookie.value.optin), submitForm };
};
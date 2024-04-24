import supabase from "./supabase";

export default function Session({ setState }) {
    supabase.auth.getSession().then(({ data, error }) => {
        setState(data);
    })
}
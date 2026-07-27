import { supabase } from './supabase'

export async function SignUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) throw error
    return data
}

export async function SignIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) throw error
    return data
}

export async function SignOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}

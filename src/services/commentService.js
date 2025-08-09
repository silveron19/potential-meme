// service example for fetching comments
import supabase from '../utils/supabase/supabaseClient.js';

export async function fetchComments() {
    const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        throw error;
    }
    return data;
}
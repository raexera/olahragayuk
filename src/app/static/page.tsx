import supabase from "../../lib/supabase";

export default async function Posts() {
  const { data: posts } = await supabase.from("posts").select();
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}

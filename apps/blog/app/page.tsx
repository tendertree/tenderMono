import  createClient  from '@infra/supabase/src/server'
import { redirect } from 'next/navigation'


export default async function PrivatePage() {
  const supabase = createClient()
 //@ts-ignore
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <p>Hello {data.user.email}</p>
}

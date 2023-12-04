import { redirect } from 'next/navigation'
export default function NotFound() {
    // for redirecting to home page when user visits page that does not exist
    return redirect('/')
}

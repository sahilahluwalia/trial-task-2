import React from 'react';
import { redirect } from 'next/navigation'
function Page() {
    // for redirecting to home page when user visits /product
    return redirect('/')
}

export default Page;

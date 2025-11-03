export async function getTenantByDomain(domain: string, slug: string) {
 
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/websites?where[domains.domain][equals]=${domain}`,
      // { next: { revalidate: 3600 } }, // 1 hour cache
    )

    
  
    const json = await res.json()


    let id = json?.docs?.[0]

  
    const final = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[website][equals]=${id.id}&where[slug][equals]=${slug}`,
      // { next: { revalidate: 60 } },
    )
  
    const jsonm = await final.json()
  
    let ans = jsonm?.docs?.[0] ?? null
  
    // const page = await getPageBySlug(id.id, slug)
    return ans
    // return json?.docs?.[0] ?? null
  }
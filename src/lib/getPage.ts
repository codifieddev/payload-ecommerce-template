export async function getTenantByDomain(domain: string, slug: string) {
  console.log("FETCHING TENANT FOR DOMAIN", domain, slug)
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/tenants?where[domains.domain][equals]=${domain}`,
      // { next: { revalidate: 3600 } }, // 1 hour cache
    )

    console.log( `${process.env.NEXT_PUBLIC_SERVER_URL}/api/tenants?where[domains.domain][equals]=${domain}`)
  
    const json = await res.json()


    let id = json?.docs?.[0]

    console.log("TENANT ID", id)
  
    const final = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[tenant][equals]=${id.id}&where[slug][equals]=${'home'}`,
      // { next: { revalidate: 60 } },
    )
  
    const jsonm = await final.json()
  
    let ans = jsonm?.docs?.[0] ?? null
  
    // const page = await getPageBySlug(id.id, slug)
    return ans
    // return json?.docs?.[0] ?? null
  }
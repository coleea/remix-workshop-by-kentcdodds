import {Link, useLoaderData} from '@remix-run/react'
import {json} from '@remix-run/node'
import {prisma } from '~/db.server'

export async function getPosts() {
  const posts = await prisma.post.findMany()
  console.log({posts});  
  return posts
}

export async function loader() {
    const posts = await getPosts()
    return posts
}

export default function Posts() {
  const posts = useLoaderData<typeof loader>()

  return (
    <main>
      <h1>Posts</h1>
      <ul>          
          {posts.map((v, i) => {
            return (
              <li key={v.slug} className="">
                  <Link to={v.slug} className='' >
                      {v.title}
                  </Link>
                  <div className="">
                      {v.updatedAt}                      
                  </div>
              </li>
            )
          })}
      </ul>
    </main>
  );
}
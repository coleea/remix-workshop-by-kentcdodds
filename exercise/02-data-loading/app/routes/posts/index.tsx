import {Link, useLoaderData} from '@remix-run/react'
import {json} from '@remix-run/node'

const posts = [
  {
    slug: "my-first-post",
    title: "My First Post",
    date : new Date(),
    fn : () => console.log("this works 1")

  },
  {
    slug: "90s-mixtape",
    title: "A Mixtape I Made Just For You",
    date : new Date(),
    fn : () => console.log("this works2")
  },
]

export default function Posts() {

  posts.at(0)?.fn()
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
                      {v.date.toISOString()}                      
                  </div>
              </li>
            )
          })}
      </ul>
    </main>
  );
}

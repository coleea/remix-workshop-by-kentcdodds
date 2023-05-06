import {Link, useLoaderData} from '@remix-run/react'
import {json} from '@remix-run/node'

export async function loader() {

  return json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
        date : new Date()
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
        date : new Date()

      },
    ],
  })
}

export default function Posts() {

  const someobject = useLoaderData<typeof loader>()

  console.log({someobject});
  
  return (
    <main>
      <h1>Posts</h1>
      <ul>          
          {someobject.posts.map((v, i) => {
            return (
              <li key={v.slug} className="">
                  <Link to={v.slug} className='' >
                    <div className="">
                        {v.title}
                    </div>
                    <div className="">
                      {v.date}
                    </div>
                  </Link>
              </li>
            )
          })}
      </ul>
    </main>
  );
}

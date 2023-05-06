import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPostListItems, getPostItem } from "~/models/post.server";
import { marked } from "marked";

export async function loader({params} : LoaderArgs) {

  const slug = params.slug as string
  const post = await getPostItem(slug)
  
  const htmlizedBody = marked(post.markdown)
  return json({
    post: post,
    htmlizedBody,
  });
}

export default function Posts() {
  const { post, htmlizedBody } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {/* {posts.map((post) => ( */}
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <div className="" dangerouslySetInnerHTML={{__html : htmlizedBody}}>
              {/* {post.markdown} */}
            </div>
          </li>
        {/* ))} */}
      </ul>
    </main>
  );
}

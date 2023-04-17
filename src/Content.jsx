import { PostsIndex } from "./PostsIndex"

export function Content() {
  const posts = [
    {id: 1, 
     title: "Focused eco-centric artificial intelligence", body: "Diy park selvage everyday. Letterpress banh mi marfa retro 90's migas. Pug sriracha craft beer. Irony semiotics echo polaroid truffaut. 90's green juice whatever pug asymmetrical roof. Flexitarian cliche cardigan single-origin coffee meh brooklyn bicycle rights fixie. Cardigan yr photo booth wolf green juice everyday.", 
     image: "https://cdn.britannica.com/09/189409-050-01172C19/Cast-Jason-Alexander-Seinfeld-Michael-Richards.jpg"},
  ];

    return (
      <div>
        <PostsIndex posts={posts} />
      </div>
    )
  }
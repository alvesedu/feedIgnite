import styles from "./App.module.css";
import Header from "./components/Header";
import { Post, PostType } from "./components/Post";
import { SideBar } from "./components/Sidebar";

function App() {
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/49591462?v=4",
        name: "Alves Bug",
        role: "Estudante",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },

        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },

        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-12-03 18:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Mike Brito",
        role: "Educator @Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },

        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },

        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-05-02 17:45:00"),
    },
  ];

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;

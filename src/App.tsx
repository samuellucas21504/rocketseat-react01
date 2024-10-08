import { Header } from './components/Header';
import './global.css';

import styles from './App.module.css';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: "Samuel",
      avatarUrl: "https://github.com/samuellucas21504.png",
      role: "Dev @ NoCartorio.com"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-08-16'),
  },
  {
    id: 2,
    author: {
      name: "Mayk Brito",
      avatarUrl: "https://github.com/maykbrito.png",
      role: "Educator @ RocketSeat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-08-05'),
  }
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return  (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}

export default App

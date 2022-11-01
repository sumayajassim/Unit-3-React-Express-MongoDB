import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  let simpsons = [
    {
      name: 'Homer Simpson',
      description: 'Husband of Marge; father of Bart, Lisa, and Maggie.',
      image: homer,
      email: 'homer_Simpson@gmail.com'
    },
    {
      name: 'Lisa Simpson',
      description: 'Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.',
      image: lisa,
      email: 'lisa_Simpson@gmail.com'
    },
    {
      name: 'Bart Simpson',
      description: 'Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.',
      image: bart,
      email: 'bart_Simpson@gmail.com'
    },
    {
      name: 'Maggie Simpson',
      description: 'Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.',
      image: maggie,
      email: 'maggie_Simpson@gmail.com'
    },
    {
      name: 'Marge Simpson',
      description: 'Wife of Homer; mother of Bart, Lisa, and Maggie.',
      image: marge,
      email: 'marge_Simpson@gmail.com'
    },
  ]
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
            {simpsons.map((item, index) => (
              <ProfileCard key={index} pic={item.image} name={item.name} desc={item.description} email={item.email} />
            ))}
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;

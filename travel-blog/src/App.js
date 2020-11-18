import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header__inner section">
          <div className="left">
            <h2>Travelize</h2>
            <sub>My traveling experiences</sub>
          </div>
          <div className="right">
            <a href="/">Home</a>
            <a href="/">Blog</a>
            <a href="/">About</a>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="hero section-hero" style={{ backgroundImage: `url(${heroBackground})` }} />
        <div className="aboutme section">
          <div className="left">
            <img className="headshot_image" src={headshot} alt="headshot" />
          </div>
          <div className="right">
            <h2>
              A little about me
            </h2>
            <p>
              Donec dolor lorem, tristique nec magna in, interdum tincidunt mi. Mauris nec elit id lorem fringilla hendrerit et nec ex. Duis vitae purus sed lectus cursus porta. Curabitur sit amet diam non magna auctor eleifend ac quis arcu. Etiam odio justo, interdum at purus eget, tincidunt posuere velit. Quisque non posuere nunc. Aenean ut tristique lectus. Duis tempor lacinia scelerisque. Nulla tristique eros et urna suscipit, ac tristique libero elementum. Nulla volutpat id arcu tempor porttitor. Proin a sem sit amet urna semper scelerisque quis eget lacus.
            </p>
            <p>
              Pellentesque eu ex ut urna posuere dictum vitae eget purus. Donec commodo interdum lobortis. Vestibulum maximus nec tellus et finibus. Aliquam sed sapien odio. Maecenas quis dapibus justo. Mauris in orci nibh. Cras finibus, mauris sit amet fermentum pellentesque, nisl lacus egestas felis, id malesuada justo enim elementum lectus. Aenean nec ex nunc. Sed faucibus justo et nisi sollicitudin, a pharetra nunc imperdiet. Vivamus dictum pulvinar nunc vel fringilla. In hac habitasse platea dictumst. Nunc et diam eget tortor ornare dictum in nec ex.
            </p>
            <p>
              Mauris libero mi, gravida eget quam ut, pharetra convallis nibh. Aenean id fringilla libero, sit amet accumsan dolor. Vivamus vel eros eros. Nunc a arcu magna. Aliquam in dolor aliquet, faucibus sem id, sollicitudin mi. Duis efficitur mattis elit id venenatis. Sed scelerisque congue justo, sagittis dignissim velit molestie eu. Morbi pellentesque mollis facilisis. Morbi eget ipsum fermentum lorem imperdiet vestibulum id a libero. Aliquam dictum metus non vehicula interdum. Aenean et rutrum ipsum, vitae efficitur lacus. Morbi tincidunt tellus sit amet mi suscipit, a hendrerit tellus pulvinar. Duis fringilla faucibus lacus et lobortis.
            </p>
            <p>
              Nam lacinia magna in quam ullamcorper, id porta enim tincidunt. Morbi porta, quam euismod volutpat ornare, tellus libero pulvinar lacus, quis imperdiet metus enim eu neque. Sed id magna eget sapien tristique placerat. Cras sed felis varius, cursus eros non, tincidunt orci. Vivamus maximus rhoncus commodo. Duis efficitur feugiat justo quis faucibus. Nunc semper mollis turpis, id luctus justo luctus quis. Nullam mollis elit vitae sapien mollis, id tristique est placerat. Aliquam ut aliquet ligula, eu pulvinar libero. Aliquam a placerat erat, sit amet sollicitudin augue. Cras congue lectus vel risus consectetur ultrices. Curabitur consectetur et tellus dapibus eleifend. Quisque blandit tellus vitae pharetra convallis. Ut eu iaculis nunc, in posuere eros.
            </p>
            <p>
              Morbi a bibendum tellus. Sed id libero elementum lectus feugiat dapibus. In hac habitasse platea dictumst. Sed sagittis auctor felis ut efficitur. Nullam venenatis libero lectus, sagittis molestie elit tempor eu. Proin tristique diam eget dui ornare volutpat. Suspendisse vel risus diam. Nam feugiat orci et justo scelerisque, sit amet vehicula tortor fermentum. Maecenas porta luctus metus ut aliquam.
            </p>
            <p>
              Suspendisse congue purus a tortor venenatis, et congue ipsum ultricies. Ut at magna molestie, sollicitudin turpis at, placerat sem. Morbi eu condimentum tellus. Nullam quam enim, tristique ac rutrum et, porttitor ac metus. Nam laoreet neque vel tellus lacinia, tristique molestie orci laoreet. Pellentesque pretium mi eget nibh ultrices cursus. Mauris dictum consequat purus. Proin justo dui, condimentum quis enim sed, rhoncus tincidunt sem.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__inner section">
          <div className="left">
            &copy; 2020 Travelize
          </div>
          <div className="right">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms and conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

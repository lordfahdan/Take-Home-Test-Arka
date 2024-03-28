import './Ketupat.css';

const Ketupat = () => {
  const arr = Array.from({length: 9})

  return (
    <div className="ketupat__container">
      <div className="ketupat">
        {arr.map((_, index) => (
          <span className="ketupat__tile" key={index} />
        ))}
      </div>
      <h5 className='greet'>.: selamat hari raya idul fitri :.</h5>
      <h5 className='greet'>mohon maaf lahir dan batin ♥</h5>
    </div>
  );
};

export default Ketupat;

import './Avatar.css';
import { PuffLoader } from 'react-spinners';
import { useState } from 'react';

const Avatar = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [loaded, setLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name !== img) {
      setLoaded(false);
      setImg(name);
      setName('');
    }
  };

  return (
    <div className="avatar__container">
      <div className="avatar__layer">
        <form onSubmit={handleSubmit} className="avatar__form">
          <input
            className="avatar__form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="avatar__form-button">buat profil picture!</button>
        </form>
        <div className="relative">
          <img
            className={`avatar__img ${img == '' ? 'opacity-0' : ''}`}
            src={'https://robohash.org/Lord' + img}
            alt=""
            onLoad={() => setLoaded(true)}
          />
          {loaded === false && (
            <div className="avatar__img--load">
              <PuffLoader size={250} color="#36d7b7" className="" />
            </div>
          )}
          <h5 className="avatar__img-label">{img}</h5>
        </div>
      </div>
    </div>
  );
};

export default Avatar;

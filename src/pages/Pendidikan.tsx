import './Pendidikan.css';
import chevron from '../assets/chevron.svg';

import { useEffect, useState } from 'react';
import { list_jenjang, list_tingkatan } from '../constant';

const Pendidikan = () => {
  const [jenjang, setJenjang] = useState('');
  const [tingkatan, setTingkatan] = useState('');

  useEffect(() => {
    if (jenjang === '') setTingkatan('');
  }, [jenjang]);

  return (
    <div className="pendidikan__container">
      <div className="pendidikan__layer">
        <div className="relative bg-green-500 rounded-md">
          <img
            className="absolute select-none right-4 top-2 w-6"
            src={chevron}
            alt=""
          />
          <select
            className="pendidikan__select"
            name="jenjang"
            id="jenjang"
            value={jenjang}
            onChange={(e) => setJenjang(e.target.value)}
          >
            <option value="" selected>
              Pilih jenjang
            </option>
            {list_jenjang.map((jenjang) => (
              <option value={jenjang.id} key={jenjang.id}>
                {jenjang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="relative bg-red-500 rounded-md">
          <img
            className="absolute right-4 top-2 w-6"
            src={chevron}
            alt=""
          />
          <select
            className="pendidikan__select"
            name="tingkatan"
            id="tingkatan"
            value={tingkatan}
            onChange={(e) => setTingkatan(e.target.value)}
            disabled={jenjang === ''}
          >
            <option value="" selected disabled hidden>
              {jenjang === '' ? 'Pilih jenjangnya dulu!' : 'Pilih tingkatan'}
            </option>
            <optgroup
              label={
                jenjang !== ''
                  ? list_jenjang.filter((item) => item.id === jenjang)[0].name
                  : ''
              }
            >
              {jenjang !== '' &&
                list_tingkatan
                  .filter((tingkatan) => tingkatan.jenjang === jenjang)
                  .map((tingkatan) => (
                    <option value={tingkatan.name} key={tingkatan.id}>
                      {tingkatan.name}
                    </option>
                  ))}
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pendidikan;

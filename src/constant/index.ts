import ketupat from '../assets/ketupat-asset.png';
import pendidikan from '../assets/pendidikan-asset.png';
import avatar from '../assets/avatar-asset.png';
import { LIST_TEST } from '../interfaces/LIST_TEST';
import { LIST_JENJANG } from '../interfaces/LIST_JENJANG';
import { LIST_TINGKATAN } from '../interfaces/LIST_TINGKATAN';

export const list_test: Array<LIST_TEST> = [
  {
    link: '/ketupat',
    label: 'Test #1',
    image: ketupat
  },
  {
    link: '/pendidikan',
    label: 'Test #2',
    image: pendidikan
  },
  {
    link: '/avatar',
    label: 'Test #3',
    image: avatar
  },
]

export const list_jenjang: Array<LIST_JENJANG> = [
  {
    name: 'Pendidikan Pra Sekolah',
    id: 'J001'
  },
  {
    name: 'Pendidikan Dasar',
    id: 'J002'
  },
  {
    name: 'Pendidikan Menengah',
    id: 'J003'
  },
  {
    name: 'Pendidikan Tinggi',
    id: 'J004'
  },
]

export const list_tingkatan: Array<LIST_TINGKATAN> = [
  {
    id: 'T001',
    name: 'PAUD (Pendidikan Anak Usia Dini)',
    jenjang: 'J001'
  },
  {
    id: 'T002',
    name: 'TK (Taman Kanak-kanak)',
    jenjang: 'J001'
  },
  {
    id: 'T003',
    name: 'RA (Raudhatul Athfal)',
    jenjang: 'J001'
  },
  {
    id: 'T004',
    name: 'SD (Sekolah Dasar)',
    jenjang: 'J002'
  },
  {
    id: 'T005',
    name: 'MI (Madrasah Ibtidaiyah)',
    jenjang: 'J002'
  },
  {
    id: 'T006',
    name: 'SMP (Sekolah Menengah Pertama)',
    jenjang: 'J002'
  },
  {
    id: 'T007',
    name: 'MTs (Madrasah Tsanawiyah)',
    jenjang: 'J002'
  },
  {
    id: 'T008',
    name: 'SMA (Sekolah Menengah Atas)',
    jenjang: 'J003'
  },
  {
    id: 'T009',
    name: 'MA (Madrasah Aliyah)',
    jenjang: 'J003'
  },
  {
    id: 'T010',
    name: 'SMK (Sekolah Menengah Kejuruan)',
    jenjang: 'J003'
  },
  {
    id: 'T011',
    name: 'D3 Diploma',
    jenjang: 'J004'
  },
  {
    id: 'T012',
    name: 'S1/D4 Sarjana',
    jenjang: 'J004'
  },
  {
    id: 'T013',
    name: 'S2 Magister',
    jenjang: 'J004'
  },
  {
    id: 'T014',
    name: 'S3 Doktoral',
    jenjang: 'J004'
  },
]
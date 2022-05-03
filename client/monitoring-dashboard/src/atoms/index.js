import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();

export const patientState = atom({
  key: 'recoil-persist',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
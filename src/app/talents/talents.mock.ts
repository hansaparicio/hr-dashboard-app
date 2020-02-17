import { TalentProfile, Gender } from './talent-profile/talent-profile.interface';

export const TALENTS_MOCK: TalentProfile[] = [
  {
    name: 'Hans Aparicio',
    email: 'hans.moreno@super7ui.com',
    gender: Gender.MALE,
    birthday: new Date('11/06/1986'),
    phoneNumber: '+541136814751',
    streetAddress: 'Bulnes 405',
    city: 'Buenos Aires',
    zipCode: 1176,
    activeMember: true
  }
];

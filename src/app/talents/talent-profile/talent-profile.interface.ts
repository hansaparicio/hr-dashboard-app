export class TalentProfile {
  name: string;
  email: string;
  gender: Gender;
  birthday: Date;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  zipCode: number;
  activeMember: boolean;
}

export enum Gender {
  MALE,
  FEMALE
}

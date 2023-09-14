export type QuestType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWeb: string;
  level: string;
  type: string;
  peopleMinMax: number[];
}

export type QuestInfoType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWeb: string;
  level: string;
  type: string;
  peopleMinMax: number[];
  descripions: string;
  coverImg: string;
  coverImgWeb: string;
}

export type LocationType = {
  address: string;
  coords: number[];
}

export type AvailableType = {
  time: string;
  isAvailable: boolean;
}

export type BookingInfoType = {
  id: string;
  location: LocationType;
  slots: {
    today: AvailableType[];
    tomorrow: AvailableType[];
  };
}

export type QuestBookingInfoType = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type UserBookingInfoType = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: LocationType;
  quest: QuestType;
}

export type AythDataType= {
  email: string;
  password: string;
}


export type Token = string;

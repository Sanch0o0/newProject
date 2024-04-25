export type ItemType = {
  name: string | null,
  id: number,
  photos: {
    small: string | null,
    large: string | null
  },
  status: string | null,
  followed: boolean
}

export type UsersType = {
  items: Array<ItemType>,
  totalCount: number
  error: string | null
}

export type ContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type PhotosType = {
  small: string | null
  large: string | null
}

export type ProfileType = {
  aboutMe: string | null
  contacts: ContactsType
  lookingForAJob: boolean | null
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number | null
  photos: PhotosType
}
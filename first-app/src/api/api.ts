import axios from 'axios';
import { PhotosType, ProfileType, UsersType } from '../types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '557f4cc2-ecc4-49dd-b3b7-f36919874cdd',
  }
})

export const getUsers = async (currentPage = 1, pageSize = 10, term = '', friend: null | boolean ) => {
  const response = await instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`));
  return response.data;
};

type APIResponceType<D = {}> = {
  data: D
  resultCode: number
  messages: Array<string>
}

export const unfollowUser = async (id: number) => {
  const response = await instance.delete<APIResponceType>(`follow/${id}`);
  return response.data;
};

export const followUser = async (id: number) => {
  const response = await instance.post<APIResponceType>(`follow/${id}`, {});
  return response.data;
}

type CheckMeType = {
  id: number
  email: string
  login: string
}

export const checkMe = async () => {
  const response = await instance.get<APIResponceType<CheckMeType>>(`auth/me`);
  return response.data;
}

export const getUserProfile = async (userId: number) => {
  const response = await instance.get<ProfileType>(`profile/${userId}`);
  return response.data;
}

export const getUserStatus = async (userId: number) => {
  const response = await instance.get<string>(`profile/status/${userId}`);
  return response.data;
}

export const setUserStatus = async (status: string) => {
  const response = await instance.put<APIResponceType>(`profile/status`, { status });
  return response.data;
}

type LoginType = {
  userId: number
}

export const logInUser = async (email: string, password: string, rememberMe = false, captcha = 'null') => {
  const response = await instance.post<APIResponceType<LoginType>>(`auth/login`, { email, password, rememberMe, captcha });
  return response.data;
}

export const logOutUser = async () => {
  const response = await instance.delete<APIResponceType>(`auth/login`);
  return response.data;
}

type SavePhotoType = {
  photos: PhotosType
}

export const saveUserPhoto = async (photos: any) => {
  const formData = new FormData();
  formData.append('image', photos);
  const response = await instance.put<APIResponceType<SavePhotoType>>(`profile/photo`, formData, {
    headers: {
      "Content-Type": 'multupart/form-data',
    }
  });
  return response.data;
}

export const saveProfileAPI = async (profile: ProfileType) => {
  const response = await instance.put<APIResponceType>(`profile`, profile);
  return response.data;
}

type CaptchaType = {
  url: string
}

export const getCaptchaURL = async () => {
  const response = await instance.get<CaptchaType>(`security/get-captcha-url`);
  return response.data;
}
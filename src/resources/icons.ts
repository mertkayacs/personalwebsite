import { IconType } from 'react-icons';

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from 'react-icons/pi';

import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaX,
  FaThreads,
  FaMedium,
  FaKaggle,
} from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';
import { BiBriefcase } from 'react-icons/bi';
import { SiKaggle, SiLeetcode } from 'react-icons/si';
import { LiaKaggle } from 'react-icons/lia';
import { TbBrandLeetcode } from 'react-icons/tb';

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  briefcase: BiBriefcase,
  download: FiDownload,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  kaggle: LiaKaggle,
  leetcode: TbBrandLeetcode,
  medium: FaMedium,
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;

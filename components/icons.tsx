import Image from "next/image"
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsChevronDown,
  BsFire,
  BsCheck2,
} from "react-icons/bs"
import { FaMoon, FaSun } from "react-icons/fa";
import {
  AiOutlineEllipsis,
  AiOutlineWarning,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineFileSearch,
} from "react-icons/ai"
import { MdDeleteForever, MdOutlineLogout } from "react-icons/md"
import { BiHistory, BiCalendar, BiBarChartAlt } from "react-icons/bi"
import { FaUserAlt, FaSort } from "react-icons/fa"
import { ImSpinner8, ImStatsBars } from "react-icons/im"
import { RxMixerHorizontal } from "react-icons/rx"
import { LuSettings } from "react-icons/lu"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  blank: () => {
    return <></>
  },
  react: () => {
    return (
      <Image
        src="react.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },
  code: () => {
    return (
      <Image
        src="code.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },
  crypto: () => {
    return (
      <Image
        src="crypto.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },
  transfer: () => {
    return (
      <Image
        src="transfer.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },
  responsive: () => {
    return (
      <Image
        src="responsive.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },
  email: () => {
    return (
      <Image
        src="email.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={100}
        height={100}
        alt="Card image"
      />
    )
  },


  // Features
  fileSearch: AiOutlineFileSearch,
  barChart: BiBarChartAlt,
  settings: LuSettings,

  // Mode Toggle
  moon: FaMoon,
  sun: FaSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  fire: BsFire,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,
}

export const Icons: IconsType = icons
